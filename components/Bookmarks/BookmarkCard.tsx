import React from "react";
import { NFT } from "../../types";
import NFTCard from "../NftCard";

type Props = {
  nft: NFT;
  remove: (id: string) => void;
};

function BookmarkCard({ nft, remove }: Props) {
  const removeBookmark = async () => {
    remove(nft.items[0].nft_data[0].token_id);
  };

  return (
    <NFTCard
      isBookmarked={true}
      nftData={nft}
      addBookmark={() => {}}
      removeBookmark={removeBookmark}
    />
  );
}

export default BookmarkCard;
