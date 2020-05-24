import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Navbar from "../Components/Navbar";
import { FlatList } from "react-native-gesture-handler";
const WIDTH = Dimensions.get("window").width;
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

var posts = [
  {
    id: "1",
    profile: require("../assets/avatar1.jpg"),
    name: "Milana Myles",
    caption:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    image: require("../assets/pic1.jpg"),
    timestamp: "May 28, 2020 at 08:30",
  },
  {
    id: "2",
    profile: require("../assets/avatar2.jpg"),
    name: "Lara Scouts",
    caption:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    image: require("../assets/pic2.jpg"),
    timestamp: "May 28, 2020 at 08:30",
  },
  {
    id: "3",
    profile: require("../assets/avatar1.jpg"),
    name: "Milana Myles",
    caption:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    image: require("../assets/pic1.jpg"),
    timestamp: "May 28, 2020 at 08:30",
  },
];
export default FeedScreen = (props) => {
  renderPost = (post) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Image style={styles.avatar} source={post.profile}></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{post.name}</Text>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
          </View>
          <View style={styles.more}>
            <Feather name="more-vertical" size={24} color="#9F9FA0" />
          </View>
        </View>
        <Text style={styles.caption}>{post.caption}</Text>
        <View>
          <Image source={post.image} style={styles.photo}></Image>
        </View>
        <View style={styles.bar}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="paw" size={22} color="#3ACCE1" />
            <Text style={styles.quantity}>247</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather name="message-circle" size={22} color="#7A8FA6" />
            <Text style={styles.quantity}>51</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="forward" size={22} color="#7A8FA6" />
            <Text style={styles.quantity}>50</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <FlatList
        data={posts}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTop: {
    flexDirection: "row",
  },
  avatar: {
    width: 51,
    height: 51,
    borderRadius: 50,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  name: {
    fontFamily: "poppins-semibold",
    fontSize: 16,
    color: "#1B1B1B",
  },
  timestamp: {
    fontFamily: "poppins-regular",
    fontSize: 10,
    color: "#989898",
  },
  caption: {
    marginTop: 15,
    fontSize: 12,
    fontFamily: "poppins-regular",
    marginBottom: 15,
  },
  photo: {
    height: 186,
    width: WIDTH - 40,
    borderRadius: 10,
  },
  more: {
    position: "absolute",
    marginLeft: 336,
    marginTop: 3,
  },
  bar: {
    flexDirection: "row",
    marginTop: 14,
    justifyContent: "space-evenly",
  },
  quantity: {
    color: "#7A8FA6",
    marginLeft: 6.5,
    fontFamily: "poppins-semibold",
  },
});
