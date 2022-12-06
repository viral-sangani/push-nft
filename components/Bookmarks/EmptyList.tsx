import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
type Props = {};

function EmptyList({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing to see here yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: COLORS.primary800,
  },
  text: {
    fontSize: 24,
    fontFamily: "NotoSans_700Bold",
    color: COLORS.white,
  },
});

export default EmptyList;
