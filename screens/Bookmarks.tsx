import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BookmarkCard from "../components/Bookmarks/BookmarkCard";
import EmptyList from "../components/Bookmarks/EmptyList";
import { BOOKMARK_KEY } from "../services/api/constant";
import { NFT } from "../types";
import { COLORS } from "../utils/colors";
import { getItemLayout } from "./Home";

type Props = {
  navigation: any;
};

// accept navigation as a prop
function Bookmarks({ navigation }: Props) {
  const [bookmarkedNts, setBookmarkedNfts] = React.useState<NFT[]>(null);

  useEffect(() => {
    const unsbscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem(BOOKMARK_KEY).then((bookmarkData) => {
        const jsonData = JSON.parse(bookmarkData ?? "{}");
        setBookmarkedNfts(Object.values(jsonData));
      });
    });
    return unsbscribe;
  }, [navigation]);

  const removeBookmark = async (tokenId: string) => {
    let bookmarkedData = await AsyncStorage.getItem(BOOKMARK_KEY);
    let jsonData = JSON.parse(bookmarkedData ?? "{}");
    if (jsonData) {
      delete jsonData[tokenId];
      await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(jsonData));
      setBookmarkedNfts(Object.values(jsonData));
    }
  };

  if (bookmarkedNts === null) {
    return null;
  } else if (bookmarkedNts.length === 0) {
    return <EmptyList />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={bookmarkedNts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <BookmarkCard nft={item} remove={removeBookmark} />
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        maxToRenderPerBatch={6}
        initialNumToRender={10}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 5,
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.primary800,
  },
});

export default Bookmarks;
