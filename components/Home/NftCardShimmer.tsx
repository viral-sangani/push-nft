import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../utils/colors";

type Props = {
  id: string;
};

function NFTCardShimmer({ id }: Props) {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.cardImage} />
          <View style={styles.cardDetailsContainer}>
            <View style={styles.bookmarkContainer}>
              <Text style={styles.tokenId}>#{id}</Text>
            </View>
            <View style={styles.title}></View>
            <View style={styles.ownerContainer}></View>
          </View>
        </View>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  cardContainer: {
    height: 310,
    width: "50%",
    alignItems: "center",
    padding: 8,
    marginTop: 8,
    borderRadius: 16,
  },
  bookmarkContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    borderRadius: 20,
    backgroundColor: COLORS.primary500,
    width: "100%",
    height: "100%",
    padding: 8,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: COLORS.primary800,
  },
  cardDetailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  tokenId: {
    color: COLORS.white,
    fontFamily: "NotoSans_700Bold",
    fontWeight: "bold",
    fontSize: 22,
    marginRight: 8,
  },
  title: {
    color: COLORS.primary300,
    width: "100%",
    height: 24,
    borderRadius: 8,
    backgroundColor: COLORS.primary700,
    marginBottom: 8,
  },
  ownerContainer: {
    color: COLORS.primary300,
    width: "100%",
    height: 24,
    borderRadius: 8,
    backgroundColor: COLORS.primary700,
    marginBottom: 4,
  },
  owner: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 16,
    color: COLORS.white,
  },
});

export default NFTCardShimmer;
