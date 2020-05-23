import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Modal,
} from "react-native";

const GetStartedScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/getStarted.png")}
      />
      <Text style={styles.title}>SmallPaw</Text>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.description}>
        Build community with pet lovers just like you!
      </Text>
      <View style={styles.mainButtonContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={1}
          onPress={() => {
            props.navigation.navigate("login");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={1}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <View style={{ ...styles.button, ...styles.white }}>
            <Text style={{ ...styles.buttonText, ...styles.black }}>
              Join us, it's free
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E43",
  },
  image: {
    height: "65%",
    width: "100%",
    borderBottomLeftRadius: 90,
    marginBottom: 11,
    resizeMode: "stretch",
  },
  title: {
    width: "100%",
    position: "absolute",
    marginTop: 49,
    textAlign: "center",
    color: "#2A2E43",
    fontSize: 25,
    fontFamily: "poppins-semibold",
  },
  welcome: {
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "poppins-medium",
  },
  description: {
    fontSize: 14,
    marginHorizontal: 24,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "poppins-regular",
    marginBottom: 13,
  },

  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 51,
    backgroundColor: "#3ACCE1",
    paddingVertical: 13,
    paddingHorizontal: 21,
    borderRadius: 52,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: 14,
    textAlign: "center",
  },
  black: {
    color: "#1B1B1B",
  },
  white: {
    backgroundColor: "#FFFFFF",
  },
});

export default GetStartedScreen;
