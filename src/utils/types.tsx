export interface WatchlistProps {
  id: number;
  coin_id: string;
}

export interface WatchlistDataProps {
  id: string;
  image: string;
  name: string;
  symbol: string;
  change: number;
}

export interface DashboardPortfolioProps {
  typeOfInvestment: string;
  percentChange: number;
  investmentValue: number;
}

export interface PortfolioCoinProps extends WatchlistDataProps {
  investedAmount: number;
}

export interface TransactionsProps {
  id: number;
  cryptoId: string;
  transactionDateTime: string;
  quantity: string;
  symbol: string;
  transactionType: string;
  price: number;
  status: string;
  remarks: string;
}
export type timeProps = "1h" | "24h" | "1w" | "1m" | "1y";

export interface CryptocurrencyType {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  marketCap: number;
  totalSupply: number;
  availableSupply: number;
  priceChangeIn1hr: number;
  priceChangeIn24hrs: number;
  priceChangeIn1week: number;
  priceChangeIn1month: number;
  priceChangeIn1year: number;
  volume: number;
  investedAmount: number;
  currencyData: number[];
  percentageChange: number;
  categories: string[];
  coinBalance: number;
  currentValue: number;
  isWatchlist: boolean;
}
export interface Wallet {
  id: number;
  name: string;
  balance: number;
  investedAmount: number;
  cryptoId: string;
}
export interface Transaction {
  name: string;
  from: string;
  date: number;
  month: string;
  quantity: number;
  symbol: string;
  transactionType: string;
  price: number;
  status: string;
}

export type coinTypes =
  | "bitcoin"
  | "ethereum"
  | "usd-coin"
  | "polkadot"
  | "solana"
  | "ripple"
  | "binance-usd"
  | "dogecoin"
  | "matic-network";
