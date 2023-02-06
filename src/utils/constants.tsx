import theme from '../theme'
import Bitcoin from '../../public/assets/images/coins/bitcoin.svg'
import bitcoin from '../../public/assets/images/coins/bitcoin.svg'
import ethreum from '../../public/assets/images/coins/ethreum.svg'
import Cardano from '../../public/assets/images/coins/Cardano.svg'
import DodgeCoin from '../../public/assets/images/coins/DodgeCoin.svg'
import Tether from '../../public/assets/images/coins/tether.svg'
import USDCoin from '../../public/assets/images/coins/USDCoin.svg'
import Ethereum2 from '../../public/assets/images/coins/ethereum2.svg'
import xrp from '../../public/assets/images/coins/XRP.svg'
import moment from 'moment'


export const transactionHistoryStepper = {
  step1: ['Payment method', 'Visa credit ...8845'],
  step2: ['Delivery fees', '0.001 '],
  step3: ['Deposit to', ' Wallet'],
}

export const timeLineValues = ['1H', '24H', '1W', '1M', '1Y', 'ALL']

export const dollarValue = 3406069.54

export const CHOOSE_CRYPTO = 'Choose crypto'

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const formatDate = (date: string) => {
  return moment(date, 'YYYY-MM-DD').format('LL').split(',')[0]
}

export const TAX = 1000


export const timeValues = ['1H', '24H', '1W', '1M', '1Y']

interface HashmapProps {
  [key: string]: string
}

export const pictures: HashmapProps = {
  bitcoin: Bitcoin,
  ethereum: ethreum,
  usdCoin: USDCoin,
  xrp: xrp,
  binanceUsd: bitcoin,
  solana: Ethereum2,
  dogecoin: DodgeCoin,
  polkadot: Cardano,
  maticNetwork: Tether,
}

export const priceCorelationMockData: { image: string; text: string }[] = [
  {
    image: bitcoin,
    text: 'Bitcoin',
  },
  {
    image: ethreum,
    text: 'Etherium',
  },
  {
    image: xrp,
    text: 'XRP',
  },
  {
    image: Tether,
    text: 'Thether',
  },
]

export const currencies = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'bitcoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'ethereum',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'usd-coin',
    name: 'USD Coin',
    symbol: 'USDC',
    icon: 'usdCoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    icon: 'xrp',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'ethereum2',
    name: 'Ethereum 2',
    symbol: 'ETH',
    icon: 'solana',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'CRD',
    icon: 'polkadot',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'dodge',
    name: 'Dodge Coin',
    symbol: 'DDG',
    icon: 'dogecoin',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'ETH',
    icon: 'maticNetwork',
    price: 19123.56,
    marketCap: 366730983878,
    totalSupply: 21000000,
    availableSupply: 19177118,
    priceChangeIn1hr: -0.16,
    priceChangeIn24hrs: -0.5,
    priceChangeIn1week: -0.5,
    priceChangeIn1month: 2.5,
    priceChangeIn1year: 2.67,
    volume: 56214521562,
  },
]

export const transactionSuccess: any = {
  buy: {
    text: 'Purchase is completed, please check your balance in your crypto wallet',
    button: 'BUY CRYPTO',
  },
  sell: {
    text: 'Sell is completed, please check your balance in your Rupee coin',
    button: 'SELL CRYPTO',
  },
}

export const compactFormat = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const BitcoinTransactionValues = [
  {
    name: 'Bitcoin',
    from: 'Badgley',
    date: 28,
    month: 'Feb',
    btcPrice: 0.001,
    dollarPrice: 900,
    status: 'pending',
  },
  {
    name: 'Bitcoin',
    from: 'Jane Cooper',
    date: 25,
    month: 'Feb',
    btcPrice: 0.023,
    dollarPrice: 1800,
    status: 'fail',
  },
  {
    name: 'Bitcoin',
    from: 'Leslie Alexander',
    date: 20,
    month: 'Feb',
    btcPrice: 0.003,
    dollarPrice: 1200,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Guy Hawkins',
    date: 18,
    month: 'Feb',
    btcPrice: 0.015,
    dollarPrice: 1000,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Jenny Wilson',
    date: 15,
    month: 'Feb',
    btcPrice: 0.065,
    dollarPrice: 3200,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Jacob Jones',
    date: 13,
    month: 'Feb',
    btcPrice: 0.009,
    dollarPrice: 9000,
    status: 'success',
  },
  {
    name: 'Bitcoin',
    from: 'Theresa Webb',
    date: 10,
    month: 'Feb',
    btcPrice: 0.002,
    dollarPrice: 1800,
    status: 'success',
  },
]

export const DELIVERY_TYPES = [
  { type: 'Instant : ', time: '2-5 minutes', fees: '0.001', values: 10 },
  { type: 'Faster : ', time: '4 hours', fees: '0.001', values: 20 },
  { type: 'Fast : ', time: '120 hours', fees: '0.001', values: 30 },
  { type: 'None', time: '', values: 40 },
]

export const roundValue = (number: number) => {
  return Math.round(number * 100000000) / 100000000
}