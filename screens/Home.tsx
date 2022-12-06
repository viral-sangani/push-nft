import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HomeCard from "../components/Home/HomeCard";
import { BOOKMARK_KEY, FETCHSTRENGTH } from "../services/api/constant";
import { NFT } from "../types";
import { COLORS } from "../utils/colors";
import { range } from "../utils/helper";

type Props = {
  navigation: any;
};

export const getItemLayout = (data, index) => ({
  length: 310,
  offset: 310 * index,
  index,
});

function Home({ navigation }: Props) {
  const [fetchIndex, setFetchIndex] = React.useState([1, 10]);
  const [bookmarkedNFTs, setBookmarkedNFTs] =
    React.useState<Map<string, NFT>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      AsyncStorage.getItem(BOOKMARK_KEY).then((bookmarkData) => {
        const jsonData = JSON.parse(bookmarkData ?? "{}");
        setBookmarkedNFTs(jsonData);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={range(fetchIndex[0], fetchIndex[1])}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <HomeCard
            key={item.toString()}
            bookmarkedNFTs={bookmarkedNFTs ?? {}}
            item={item}
          />
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        maxToRenderPerBatch={6}
        initialNumToRender={10}
        onEndReached={() => {
          const end = fetchIndex[1] + FETCHSTRENGTH;
          if (end <= 100) {
            setFetchIndex([fetchIndex[0], end]);
          }
        }}
        onEndReachedThreshold={0.4}
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

export default Home;
