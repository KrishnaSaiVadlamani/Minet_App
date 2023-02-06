import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Tab from "../../organisms/Tabs/index";
import CurrencyDetailCardComponent from "../../organisms/CurrencyDetailCard/index";
import { useParams } from "react-router-dom";
import { fetchCrtptoCurrenicyById, fetchCryptoCurrencies, fetchTransaction, fetchWatchList } from "../../../apis/api";
import { pictures } from "../../../utils/constants";
import { Transaction } from "../../../utils/types";
import { useHooks } from "./hook";

const DetailsPage = () => {
    let {coinId} = useParams();
    const [coinData, setCoinData] = useState<any>("");
    const [watchListId, setWatchListId] = useState<string>("");
    const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
   
    console.log(coinId+"Details page");
    console.log(coinData)

    const [transactions,setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        console.log("Inside Use effect")
        fetchCrtptoCurrenicyById(coinId!).then(data=>{
            console.log(data)
            setCoinData(data)});

        fetchTransaction(coinId!).then(data=>setTransactions(data));
    },[]       
    )
    useEffect(() => {
      setIsAddedToWatchList(watchListId ? true : false);
    }, [watchListId]);
  
    useEffect(()=>{
      fetchWatchList()
      .then(async (data) => {
        data.includes(coinId!) ? setWatchListId(coinId!) : setWatchListId(coinId!);
      })
      .catch((error) => console.log(error));
  
    })
    
    const handleClick = async () => {
      setIsAddedToWatchList((prevstate) => !prevstate);
      coinData.isWatchlist = !coinData.isWatchlist
      fetchCryptoCurrencies(coinData)
    };
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <CurrencyDetailCardComponent coinIcon={pictures[coinData.icon]} coinName={coinId!} coinSymbol={coinData.coinSymbol} percentageChange={coinData.percentageChange} isAddedtoWishList={coinData.isWatchlist} marketCap={coinData.marketCap} volumeIn24H={coinData.volume} circulatingSupply={coinData.totalSupply} handleClickForWatchListButton={handleClick}/>
      </Grid>
      <Grid item xs={12}>
        <Tab investedAmount={coinData.investedAmount} currencyData={coinData.currencyData} percentageChange={coinData.percentageChange ?? 0} categories={coinData.categories} coinBalance={coinData.coinBalance} currentValue={coinData.currentValue} coinName={coinId!} transactions={transactions}/>
      </Grid>
    </Grid>
  );
};

export default DetailsPage