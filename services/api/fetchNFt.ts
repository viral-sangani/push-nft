import { API_TOKEN } from "@env";
import axios from "axios";
import { NFT } from "../../types";
import { COVALENT_API_BASE, NFT_CONTRACT_ADDRESS } from "./constant";

export const fetchNFt = async (id: string) => {
  try {
    const res = await axios.get(
      `${COVALENT_API_BASE}/${NFT_CONTRACT_ADDRESS}/nft_metadata/${id}/?quote-currency=USD&format=JSON&key=${API_TOKEN}`
    );
    const { data }: { data: NFT } = await res.data;
    return data;
  } catch (e) {
    console.log("e", e);
  }
};
