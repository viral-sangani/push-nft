export interface NFT {
  updated_at: string;
  items: Item[];
  pagination: any;
}

export interface Item {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  type: string;
  nft_data: NftData[];
}

export interface NftData {
  token_id: string;
  token_balance: string;
  token_url: string;
  supports_erc: string[];
  token_price_wei: any;
  token_quote_rate_eth: any;
  original_owner: string;
  external_data: ExternalData;
  owner: string;
  owner_address: string;
  burned: boolean;
}

export interface ExternalData {
  name: string;
  description: string;
  image: string;
  image_256: string;
  image_512: string;
  image_1024: string;
  animation_url: string;
  external_url: any;
  attributes: any;
  owner: any;
}
