import { NFT } from "../../types";

export const COVALENT_API_BASE = "https://api.covalenthq.com/v1/1/tokens";
export const NFT_CONTRACT_ADDRESS =
  "0xa2b885e7065ea59a3251489715ca80de5ff642f8";
export const FETCHSTRENGTH = 15;
export const MAX_NFT = 100;
export const BOOKMARK_KEY = "BOOKMARK";

export let cacheNfts = new Map<string, NFT>();
