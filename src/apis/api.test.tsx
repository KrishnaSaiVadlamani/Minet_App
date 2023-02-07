import React from "react";
import axios from "axios";
import { currencies } from "../utils/constants";
import { Transaction } from "../utils/types";
import {
  addWatchList,
  fetchAllCryptoCurrencies,
  fetchCrtptoCurrenicyById,
  fetchCryptoCurrencies,
  fetchWallet,
  fetchWatchList,
  patchWallet,
  removeWatchList,
  updateWallet,
  addTransaction
} from "./api";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const wallet = {
  id: 1,
  name: "Cash",
  balance: 67707.31,
  avgValue: 1,
  investedAmount: 67707.31,
  cryptoId: "coin",
};

const watchList = "bitcoin";

const transaction = {
  name: "bitcoin",
  transactionDateTime: new Date().toISOString(),
  quantity: 1,
  symbol: "BTC",
  transactionType: "sell",
  price: 18707.31,
  status: "success",
};

describe("fetching currencies", () => {
  beforeEach(() => jest.clearAllMocks());
  it("featched all curencies", async () => {
    mockedAxios.get.mockResolvedValue(currencies);
    await fetchAllCryptoCurrencies();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it("error in fetching currencies", async () => {
    mockedAxios.get.mockRejectedValue("data is not getting");
    let string;
    await fetchAllCryptoCurrencies().catch((error) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it("fetches currency by given id", async () => {
    mockedAxios.get.mockResolvedValue(currencies[0]);
    await fetchCrtptoCurrenicyById("bitcoin");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });
  it("error in fetching currrency by id", async () => {
    mockedAxios.get.mockRejectedValue("data is not getting");
    let string;
    await fetchCrtptoCurrenicyById("bitcoin").catch(
      (error) => (string = error)
    );
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

});

describe("fetching wallets", () => {
  beforeEach(() => jest.clearAllMocks());
  it("fetches wallet", async () => {
    mockedAxios.get.mockResolvedValue(wallet);
    await fetchWallet(1);
    expect(mockedAxios.get).toBeCalledTimes(1);
  });
  it("error in fetching wallet", async () => {
    mockedAxios.get.mockRejectedValue("data is not getting");
    let string;
    await fetchWallet(1).catch((error) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });
  it("updates wallet", async () => {
    mockedAxios.patch.mockResolvedValue(wallet);
    await updateWallet(1, wallet);
    expect(mockedAxios.patch).toBeCalledTimes(1);
  });
  it("error while updating wallet", async () => {
    mockedAxios.patch.mockRejectedValue("data is not getting");
    let string;
    await updateWallet(1, wallet).catch((error) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.patch).toBeCalledTimes(1);
  });
});

describe("patch wallet", () => {
  beforeEach(() => jest.clearAllMocks());
  it("patch wallet test", async () => {
    mockedAxios.patch.mockResolvedValue(wallet);
    await patchWallet(1, wallet);
    expect(mockedAxios.patch).toBeCalledTimes(1);
  });

  it("error while patching wallet", async () => {
    mockedAxios.patch.mockRejectedValue("data is not getting");
    let string;
    await patchWallet(1, wallet).catch((error: any) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.patch).toBeCalledTimes(1);
  });
});

describe("watchlist", () => {
  beforeEach(() => jest.clearAllMocks());
  it("fetchWatchList test", async () => {
    mockedAxios.get.mockResolvedValue(watchList);
    await fetchWatchList();
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it("fetchWatchList error", async () => {
    let data;
    await fetchWatchList().catch((error) => (data = error));
    expect(data).not.toEqual("data is not getting");
    expect(mockedAxios.get).toBeCalledTimes(1);
  });

  it("deletWatchlist test", async () => {
    mockedAxios.delete.mockResolvedValue(watchList);
    await removeWatchList("bitcoin");
    expect(mockedAxios.delete).toBeCalledTimes(1);
  });

  it("deletWatchlist error", async () => {
    mockedAxios.delete.mockRejectedValue("data is not getting");
    let string;
    await removeWatchList("bitcoin").catch((error) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.delete).toBeCalledTimes(1);
  });

  it("deletWatchlist test", async () => {
    mockedAxios.post.mockResolvedValue(watchList);
    await addWatchList(watchList);
    expect(mockedAxios.post).toBeCalledTimes(1);
  });

  it("deletWatchlist error", async () => {
    mockedAxios.post.mockRejectedValue("data is not getting");
    let string;
    await addWatchList(watchList).catch((error) => (string = error));
    expect(string).toEqual("data is not getting");
    expect(mockedAxios.post).toBeCalledTimes(1);
  });
});
describe('addTransaction', () => {
  const transaction: Transaction = {
    name: 'Test Transaction',
    from: 'Test Account',
    date: 1,
    month: 'Jan',
    quantity: 10,
    symbol: 'TST',
    transactionType: 'Buy',
    price: 100,
    status: 'Success'
  };

  it('sends a POST request to the correct URL with the correct data', async () => {
    const resolvedValue = {};
    (axios.post as jest.Mock).mockResolvedValue(resolvedValue);

    await addTransaction(transaction);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/transactions/',
      { ...transaction }
    );
  });

  it('throws an error if the request fails', async () => {
    const error = new Error('Request failed');
    (axios.post as jest.Mock).mockRejectedValue(error);

    await expect(addTransaction(transaction)).rejects.toThrow(error);
  });
});
describe('fetchCryptoCurrencies', () => {
  it('updates a cryptocurrency', async () => {
    const coin = { id: 1, name: 'Bitcoin', symbol: 'BTC' };
    const expectedData = { id: 1, name: 'Bitcoin', symbol: 'BTC' };

    axios.put.mockResolvedValue({ data: expectedData });

    const result = await fetchCryptoCurrencies(coin);
    expect(result).toEqual(expectedData);

    expect(axios.put).toHaveBeenCalledWith(`http://localhost:3000/cryptocurrencies/${coin.id}`, coin);
  });
});