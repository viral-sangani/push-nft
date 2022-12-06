import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NFT } from "../types";
import { COLORS } from "../utils/colors";
import { addressFormatter } from "../utils/helper";

type Props = {
  nftData: NFT;
  isBookmarked: boolean;
  addBookmark: () => void;
  removeBookmark: () => void;
};

function NFTCard({
  nftData,
  isBookmarked,
  addBookmark,
  removeBookmark,
}: Props) {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            style={styles.cardImage}
            source={{
              uri: nftData.items[0].nft_data[0].external_data.image_256,
            }}
          />
          <View style={styles.cardDetailsContainer}>
            <View style={styles.bookmarkContainer}>
              <Text style={styles.tokenId}>
                #{nftData.items[0].nft_data[0].token_id}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  isBookmarked ? removeBookmark() : addBookmark();
                }}
              >
                {isBookmarked ? (
                  <Ionicons
                    name={"bookmark"}
                    size={26}
                    color={COLORS.primary300}
                  />
                ) : (
                  <Ionicons
                    name={"bookmark-outline"}
                    size={26}
                    color={COLORS.primary300}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text numberOfLines={1} style={styles.title}>
              {nftData.items[0].nft_data[0].external_data.name}
            </Text>
            <View style={styles.ownerContainer}>
              <Text style={styles.owner}>
                Owner:{" "}
                {addressFormatter(nftData.items[0].nft_data[0].owner_address)}
              </Text>
            </View>
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
    fontFamily: "NotoSans_700Bold",
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.primary300,
    marginBottom: 4,
  },
  ownerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary700,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  owner: {
    fontFamily: "NotoSans_700Bold",
    fontSize: 16,
    color: COLORS.white,
  },
});

export default NFTCard;
