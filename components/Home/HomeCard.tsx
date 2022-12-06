import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { BOOKMARK_KEY, cacheNfts } from "../../services/api/constant";
import { fetchNFt } from "../../services/api/fetchNFt";
import { NFT } from "../../types";
import NFTCard from "../NftCard";
import NFTCardShimmer from "./NftCardShimmer";

type Props = {
  item: string;
  bookmarkedNFTs: Map<string, NFT> | {};
};

function HomeCard({ item, bookmarkedNFTs }: Props) {
  const [nft, setNft] = React.useState<NFT | null>(null);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // check if item present in cacheNFt
    if (cacheNfts.has(item)) {
      setNft(cacheNfts[item]);
      checkIsBookmarked(cacheNfts[item]);
    } else {
      fetchNFt(item).then((data) => {
        if (data != null) {
          setNft(data);
        }
        checkIsBookmarked(data);
      });
    }
  }, [bookmarkedNFTs]);

  const checkIsBookmarked = (data) => {
    let bookmarked =
      data.items[0].nft_data[0].token_id in bookmarkedNFTs ? true : false;
    setIsBookmarked(bookmarked);
    setIsLoading(false);
  };

  const addBookmark = async () => {
    let bookmarkedData = await AsyncStorage.getItem(BOOKMARK_KEY);
    let jsonData = JSON.parse(bookmarkedData ?? "{}");
    jsonData[item] = nft;
    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(jsonData));
    setIsBookmarked(true);
  };

  const removeBookmark = async () => {
    let bookmarkedData = await AsyncStorage.getItem(BOOKMARK_KEY);
    let jsonData = JSON.parse(bookmarkedData ?? "{}");
    if (jsonData) {
      delete jsonData[item];
      await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(jsonData));
      setIsBookmarked(false);
    }
  };

  if (isLoading) {
    return <NFTCardShimmer id={item} />;
  }

  return (
    <NFTCard
      isBookmarked={isBookmarked}
      nftData={nft}
      addBookmark={addBookmark}
      removeBookmark={removeBookmark}
    />
  );
}

export default HomeCard;
