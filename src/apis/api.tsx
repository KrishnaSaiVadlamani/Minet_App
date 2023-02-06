import axios from "axios";
import { CryptocurrencyType, Transaction, Wallet } from "./../utils/types";

export const fetchAllCryptoCurrencies = async (): Promise<CryptocurrencyType[]> => {
  try {
    const response = await axios.get("http://localhost:3000/cryptocurrencies/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCrtptoCurrenicyById = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/cryptocurrencies/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCryptoCurrencies = async(coin)=>{
  await axios
  .put(`http://localhost:3000/cryptocurrencies/${coin.id}`, coin)
  .then((response: any) => response.data)
  .catch((err) => console.log(err));
}

export const fetchWatchList = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/watchlist/"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addWatchList = async (coin: string) => {
  await axios
    .post(`http://localhost:3000/watchlist/`, coin, {
      headers: { "Content-Type": "text/plain" },
    })
    .catch((error) => {
      throw error;
    });
};

export const removeWatchList = async (coin_id: string) => {
  return await axios
    .delete(`http://localhost:3000/watchlist/${coin_id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const addTransaction = async (transaction: Transaction) => {
  await axios
    .post(`http://localhost:3000/transactions/`, { ...transaction })
    .catch((error) => {
      throw error;
    });
};

export const fetchWallet = async (id: number) => {
  return await axios
    .get(`http://localhost:3000/wallet/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const updateWallet = async (id: number, wallet: Wallet) => {
  return await axios
    .patch(`http://localhost:3000/wallet/${id}`, { ...wallet })
    .catch((error) => {
      throw error;
    });
};

export const patchWallet = async (id: number, wallet: Wallet) => {
  return await axios
    .patch(`http://localhost:3000/wallet/${id}`, { ...wallet })
    .catch((error) => {
      throw error;
    });
};



export const fetchTransaction = async (id: string) => {
  console.log("Entered fetch Trans")
  try {
    const response = await axios.get(
      `http://localhost:3000/transactions/`
    );
    console.log("responsee",response.data);
    return response.data.filter(value=>value.name==id);
  } catch (error) {
    throw error;
  }
};
