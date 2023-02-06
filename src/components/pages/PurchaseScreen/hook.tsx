import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addTransaction,
  fetchAllCryptoCurrencies,
  fetchCrtptoCurrenicyById,
  fetchWallet,
  patchWallet,
} from "../../../apis/api";
import { TAX } from "../../../utils/constants";
import { CryptocurrencyType, Wallet } from "../../../utils/types";

export const usePurchaseCoin = (coinId:any) => {
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptocurrencyType[]>(
    []
  );
  const [balance, setBalance] = useState<number>(0);
  const [price, setPrice] = useState(1000);
  const [quantity, setQuantity] = useState(0);
  const [cashWallet, setCashWallet] = useState<Wallet>();
  const [cryptoWallet, setCryptoWallet] = useState<Wallet>();
  const [symbol, setSymbol] = useState<string>("");

  useEffect(() => {
    fetchAllCryptoCurrencies()
      .then((res) => {
        setCryptoCurrency(res);
      })
      .catch((err) => console.log(err));

    fetchWallet(1)
      .then((res) => {
        setBalance(res.balance);
        setCashWallet(res);
      })
      .catch((err) => console.log(err));

    fetchCrtptoCurrenicyById(coinId)
      .then((res) => {
        setPrice(res.price);
        setSymbol(res.symbol);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleCashWallet = (price: number, quantity: number) => {
    let updatedWallet = cashWallet;
    if (updatedWallet) {
      let amount = parseFloat((price * quantity + TAX).toFixed(2));
      updatedWallet.balance = updatedWallet.balance - amount;
      updatedWallet.investedAmount = updatedWallet.investedAmount + amount;
      patchWallet(cashWallet?.id as number, updatedWallet);
    }
  };

  const handleCryptoWallet = (price: number, quantity: number) => {
    let updatedCryptoWallet = cryptoWallet;
    if (updatedCryptoWallet) {
      let amount = parseFloat((price * quantity + TAX).toFixed(2));
      updatedCryptoWallet.balance = updatedCryptoWallet.balance + quantity;
      updatedCryptoWallet.investedAmount =
        updatedCryptoWallet.investedAmount + amount;
      patchWallet(cryptoWallet?.id as number, updatedCryptoWallet);
    }
  };

  const handleChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleClick = () => {
    if (balance - 999 >= price * quantity) {
      navigate("/paymentSuccess", {
        state: { quantity: quantity, transactionType: "buy" },
      });
      handleCashWallet(price, quantity);
      handleCryptoWallet(price, quantity);
      addTransaction({
        name: coinId,
        from: 'Guy Hawkins',
        date: new Date().getDate(),
        month: moment().format("MMM"),
        quantity: quantity,
        symbol: symbol,
        transactionType: "buy",
        price: price * quantity,
        status: "success",
      });
    }
  };

  return {
    cryptoCurrency,
    setCryptoCurrency,
    balance,
    setBalance,
    price,
    setPrice,
    quantity,
    setQuantity,
    symbol,
    setSymbol,
    cashWallet,
    setCashWallet,
    cryptoWallet,
    setCryptoWallet,
    navigate,
    handleChange,
    handleClick,
  };
};
