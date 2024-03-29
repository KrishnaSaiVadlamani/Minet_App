import axios from "axios";
import { useEffect, useState } from "react";
import { fetchCryptoCurrencies } from "../../../apis/api";
import { coinTypes, CryptocurrencyType } from "../../../utils/types";

export const useCoinDataHook = (filterValue: string, tableType: string) => {
  const [coinData, setCoinData] = useState<CryptocurrencyType[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("descending");

  const compare_marketCap_descending = (
    a: CryptocurrencyType,
    b: CryptocurrencyType
  ) => {
    if (a.marketCap > b.marketCap) {
      return -1;
    } else if (a.marketCap < b.marketCap) {
      return 1;
    } else {
      return 0;
    }
  };

  const compare_marketCap_ascending = (
    a: CryptocurrencyType,
    b: CryptocurrencyType
  ) => {
    if (a.marketCap < b.marketCap) {
      return -1;
    } else if (a.marketCap > b.marketCap) {
      return 1;
    } else {
      return 0;
    }
  };

  const getCoinData = async () => {
    if (sortOrder === "descending") {
      await axios
        .get("http://localhost:3000/cryptocurrencies")
        .then((response: any) => {
          let data = response.data;
          data.sort(compare_marketCap_descending);

          if (filterValue !== "") {
            let coinData = data;
            coinData = coinData.filter((data: CryptocurrencyType) =>
              data.name.toLowerCase().includes(filterValue.toLowerCase())
            );

            if (tableType == "watchlist") {
              coinData = coinData.filter(
                (data: CryptocurrencyType) => data.isWatchlist == true
              );
            }
            setCoinData(coinData);
          } else {
            if (tableType == "watchlist") {
              response.data = response.data.filter(
                (data: CryptocurrencyType) => data.isWatchlist == true
              );
            }
            setCoinData(response.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .get("http://localhost:3000/cryptocurrencies")
        .then((response: any) => {
          let data = response.data;
          data.sort(compare_marketCap_ascending);
          if (filterValue !== "") {
            let coinData = data;
            coinData = coinData.filter((data: CryptocurrencyType) =>
              data.name.toLowerCase().includes(filterValue.toLowerCase())
            );
            setCoinData(coinData);
          } else {
            setCoinData(response.data);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getCoinData();
  }, [sortOrder, filterValue]);

  const handleMarketCapClick = () => {
    if (sortOrder === "descending") {
      setSortOrder("ascending");
    } else {
      setSortOrder("descending");
    }
  };

  return {
    coinData,
    setCoinData,
    sortOrder,
    setSortOrder,
    handleMarketCapClick,
  };
};

export const useWatchlistHook = () => {
  const [watchlistData, setWatchlistData] = useState<string[]>([]);
  const [change, setChange] = useState<boolean>(true);


  const handleWatchlistDelete = async (coin: CryptocurrencyType) => {
    coin.isWatchlist = false;
    fetchCryptoCurrencies(coin)

    setChange(!change);
  };

  const handleWatchlistInsert = async (coin: CryptocurrencyType) => {
    coin.isWatchlist = true;

    fetchCryptoCurrencies(coin)

    setChange(!change);
  };

  useEffect(() => {
  }, [change]);

  

  return {
    watchlistData,
    setWatchlistData,
    change,
    setChange,
    handleWatchlistDelete,
    handleWatchlistInsert,
  };
};
