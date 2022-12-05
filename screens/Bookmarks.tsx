import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { screenBg } from "../styles/containers";

type Props = {};

function Bookmarks({}: Props) {
  return (
    <View style={style.container}>
      <Text>Bookmarks</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    ...screenBg,
  },
});

export default Bookmarks;
