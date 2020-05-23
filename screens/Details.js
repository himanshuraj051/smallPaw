import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import firebaseKeys from "../config";

export default Details = (props) => {
  const [petName, petNameChange] = useState("");
  const [display, changeDisplay] = useState(false);
  const [displayInput, changeDisplayInput] = useState(true);
  const [pet, changePet] = useState("Type of pet");
  const [gender, changeGender] = useState("Select Gender");
  const [displayGender, changeDisplayGender] = useState(false);
  const [displayGenderOptions, changeDisplayGenderOptions] = useState(true);

  const handleDisplay = () => {
    changeDisplay(!display);
    changeDisplayInput(!displayInput);
  };

  const petDogHandler = () => {
    changePet("Dog");
    changeDisplay(!display);
    changeDisplayInput(!displayInput);
  };
  const petCatHandler = () => {
    changePet("Cat");
    changeDisplay(!display);
    changeDisplayInput(!displayInput);
  };
  const petOtherHandler = () => {
    changePet("Other");
    changeDisplay(!display);
    changeDisplayInput(!displayInput);
  };

  const genderHandler = () => {
    changeDisplayGender(!displayGender);
    changeDisplayGenderOptions(!displayGenderOptions);
  };

  const femaleHandler = () => {
    changeGender("Female");
    changeDisplayGender(!displayGender);
    changeDisplayGenderOptions(!displayGenderOptions);
  };

  const maleHandler = () => {
    changeGender("Male");
    changeDisplayGender(!displayGender);
    changeDisplayGenderOptions(!displayGenderOptions);
  };

  const submitHandler = () => {
    var userId = firebase.auth().currentUser.uid;
    var postData = {
      pet: pet,
      user_gender: gender,
      pet_name: petName,
    };
    var newPostKey = firebase.database().ref().push().key;
    var updates = {};
    updates[newPostKey] = postData;
    return firebase
      .database()
      .ref("/users/" + userId)
      .update(postData);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hi Micheal,</Text>
      <Text
        style={{
          fontSize: 15,
          color: "#2A2E43",
          marginLeft: -220,
          fontFamily: "poppins-bold",
        }}
      >
        Choose Gender
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 35,
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "column", marginLeft: 30 }}>
          <View style={styles.shadow}>
            <TouchableOpacity style={styles.gender}>
              <MaterialCommunityIcons
                name="gender-female"
                size={40}
                color="#707070"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginLeft: 8,
              marginTop: 8,
              fontFamily: "poppins-medium",
            }}
          >
            Female
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.gender}>
            <MaterialCommunityIcons
              name="gender-male"
              size={40}
              color="#707070"
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 8,
              fontFamily: "poppins-medium",
            }}
          >
            Male
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.gender}>
            <FontAwesome name="transgender-alt" size={40} color="#707070" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 12,
              marginTop: 8,
              fontFamily: "poppins-medium",
            }}
          >
            Other
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 44,
          fontSize: 15,
          color: "#2A2E43",
          marginLeft: -170,
          fontFamily: "poppins-bold",
        }}
      >
        Enter your pet details
      </Text>
      <View style={{ alignItems: "center", marginTop: 27 }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#707070"
          onChangeText={(text) => petNameChange(text)}
        ></TextInput>
        <TouchableOpacity
          style={[styles.input, { display: displayInput ? "flex" : "none" }]}
          onPress={handleDisplay}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#707070", fontFamily: "poppins-medium" }}>
              {pet}
            </Text>
            <AntDesign
              name="caretdown"
              size={15}
              color="#B7B7B7"
              style={{ position: "absolute", marginLeft: 230 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: display ? "flex" : "none",
            flexDirection: "row",
            marginBottom: 33,
            marginTop: 11,
          }}
        >
          <TouchableOpacity
            style={[styles.pet, { marginLeft: 35 }]}
            onPress={petDogHandler}
          >
            <Text style={{ fontFamily: "poppins-medium" }}>Dog</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet} onPress={petCatHandler}>
            <Text style={{ fontFamily: "poppins-medium" }}>Cat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet} onPress={petOtherHandler}>
            <Text style={{ fontFamily: "poppins-medium" }}>Other</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.input,
            { display: displayGenderOptions ? "flex" : "none" },
          ]}
          onPress={genderHandler}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#707070", fontFamily: "poppins-medium" }}>
              {gender}
            </Text>
            <AntDesign
              name="caretdown"
              size={15}
              color="#B7B7B7"
              style={{ position: "absolute", marginLeft: 230 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: displayGender ? "flex" : "none",
            flexDirection: "row",
            marginBottom: 33,
            marginTop: 11,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.pet, { marginLeft: 25 }]}
            onPress={femaleHandler}
          >
            <MaterialCommunityIcons
              name="gender-female"
              size={40}
              color="#707070"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pet} onPress={maleHandler}>
            <MaterialCommunityIcons
              name="gender-male"
              size={40}
              color="#707070"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bt} onPress={submitHandler}>
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 16,
              color: "#FFFFFF",
              fontFamily: "poppins-medium",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 66,
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    color: "#2A2E43",
    marginLeft: -200,
    fontFamily: "poppins-bold",
  },
  gender: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 34,
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderRadius: 50,
    borderWidth: 0.2,
    flexDirection: "column",
  },
  shadow: {
    shadowColor: "#00000029",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,

    elevation: 50,
  },
  input: {
    backgroundColor: "#EAEAEA",
    height: 43,
    width: 280,
    borderRadius: 5,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  bt: {
    width: 262,
    height: 51,
    backgroundColor: "#3ACCE1",
    borderRadius: 28,
    marginTop: 112,
    shadowColor: "#00000029",
    shadowOffset: { width: 2, height: 10 },
    elevation: 6,
  },
  pet: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 34,
    borderRadius: 50,
    borderWidth: 0.2,
    flexDirection: "column",
    height: 68,
    width: 68,
  },
});
