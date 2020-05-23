import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import * as authActions from "../store/actions/auth";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";

const logIn = async () => {
  try {
    await Facebook.initializeAsync("1658145597673608");
    const result = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (result.type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${result.token}`
      );

      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(
        result.token
      );

      // Sign in with credential from the Facebook user.
      const res = await firebase.auth().signInWithCredential(credential);
      console.log(
        res.additionalUserInfo.profile.email,
        res.additionalUserInfo.profile.name,
        res.user.uid
      );
      const email = res.additionalUserInfo.profile.email;
      const userId = res.user.uid;
      const name = res.additionalUserInfo.profile.name;

      // const addDataToFirebase = await fetch(`https://smallpaw-5248b.firebaseio.com/users//${userId}.json`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email
      //   })
      // })
      // if(!addDataToFirebase.ok)
      // console.log('something went wrong')

      firebase.auth().onAuthStateChanged(async (user) => {
        if (user != null) console.log(user.xa); // user access token
        // Do other things
      });
    } else {
      // type === 'cancel'
    }
  } catch (err) {
    console.log(err);
    alert(`Facebook Login Error: ${err.message}`);
  }
};

const LoginScreen = (props) => {
  useEffect(() => {
    var firebaseConfig;
    firebaseConfig = {
      apiKey: "AIzaSyAXVnvpQ81A67NK_heatmvkgojxjf3z0H8",
      authDomain: "smallpaw-5248b.firebaseapp.com",
      databaseURL: "https://smallpaw-5248b.firebaseio.com",
      projectId: "smallpaw-5248b",
      storageBucket: "smallpaw-5248b.appspot.com",
      messagingSenderId: "494857074681",
      appId: "1:494857074681:web:4b1daf3b568cd15cb32f28",
      measurementId: "G-KB416W51KH",
    };
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    // firebase.auth().onAuthStateChanged(async (user) => {
    //   if (user != null) {
    //     // const data = Object.keys(user);
    //     // console.log(user.xa)
    //     // data.map((item, index) => {
    //     //   console.log(item, index)
    //     // })
    //     // console.log(data)
    //     // for(var key in user){
    //     //   console.log(key+" "+user[key])
    //     // }
    //     console.log("We are authenticated now!");
    //   }

    // Do other things
    // });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const authHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authActions.login(email, password));
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/fabian-gieske-cbIKeuURaq8-unsplash.png")}
        style={styles.image}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/left.png")}
            style={styles.backIcon}
          />
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholderTextColor="#767676"
          textContentType="emailAddress"
          placeholder="Your e-mail"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholderTextColor="#767676"
          textContentType="password"
          placeholder="Enter Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={1}
          onPress={authHandler}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback styles={styles.forgotPassword}>
          <Text style={styles.caption}>Forgot Password?</Text>
        </TouchableWithoutFeedback>

        <View style={styles.socialAuth}>
          <Text style={styles.options}>Or continue with</Text>

          <View style={styles.socialContainer}>
            {/* <TouchableWithoutFeedback></TouchableWithoutFeedback> */}
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={{
                  height: 63,
                  width: 63,
                  borderRadius: 63,
                  overflow: "hidden",
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={styles.googleIcon}
                />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={logIn}>
              <Image
                source={require("../assets/facebook.png")}
                style={styles.fbIcon}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 512,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 53,
    left: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  signUp: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "poppins-medium",
    color: "#2A2E43",
    marginRight: 32,
  },

  content: {
    top: 146,
    position: "absolute",
    height: "100%",
    backgroundColor: "white",
    width: "100%",
    elevation: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  title: {
    marginTop: 32,
    marginBottom: 11,
    fontSize: 25,
    color: "#2A2E43",
    fontFamily: "poppins-bold",
  },
  input: {
    width: 267,
    height: 43,
    backgroundColor: "#EAEAEA",
    color: "#2A2E43",
    fontFamily: "poppins-medium",
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 13,
    fontSize: 12,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 21,
    marginBottom: 15,
  },
  button: {
    width: 262,
    height: 51,
    backgroundColor: "#3ACCE1",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: 14,
    textAlign: "center",
  },
  forgotPassword: {
    alignItems: "center",
  },
  caption: {
    textAlign: "center",
    color: "#3ACCE1",
    fontSize: 14,
    fontFamily: "poppins-medium",
  },
  socialAuth: {
    flex: 1,
    marginTop: 29,
  },
  options: {
    textAlign: "center",
    color: "#2A2E43",
    fontFamily: "poppins-medium",
    fontSize: 14,
    marginBottom: 11,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    height: 80,
    width: 80,
  },
  fbIcon: {
    width: 63,
    height: 63,
    marginLeft: 9,
  },
});

export default LoginScreen;
