import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { screenBg } from "../styles/containers";

type Props = {};

function Home({}: Props) {
  return (
    <View style={style.container}>
      <Text>Home</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    ...screenBg,
  },
});

export default Home;
