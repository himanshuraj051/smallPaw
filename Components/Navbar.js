import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default FeedScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.sub}>
          <Image
            style={styles.currUser}
            source={require("../assets/profile.jpg")}
          ></Image>
          <Ionicons
            name="ios-search"
            size={18}
            color="#9F9FA0"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.search}
            placeholder="Search"
            placeholderTextColor="#9F9FA0"
          ></TextInput>
          <FontAwesome name="bell" size={25} color="#9F9FA0" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  subcontainer: {
    height: 51,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B7B7B7",
  },
  sub: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  currUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  search: {
    width: 252,
    height: 36,
    backgroundColor: "#E9E9E9",
    borderRadius: 10,
    zIndex: -1,
    paddingLeft: 38,
  },
  searchIcon: {
    position: "absolute",
    marginLeft: 70,
  },
});
