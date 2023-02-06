import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Tab from "../../organisms/Tabs/index";
import DetailCard from "../../organisms/CurrencyDetailCard/index";
import { useParams } from "react-router-dom";
import { fetchCrtptoCurrenicyById, fetchTransaction } from "../../../apis/api";
import { pictures } from "../../../utils/constants";
import { Transaction } from "../../../utils/types";

const DetailsPage = () => {
    let {coinId} = useParams();
    const [coinData, setCoinData] = useState<any>("");
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
  return (
    <Grid container>
      <Grid item xs={12}>
        <DetailCard coinIcon={pictures[coinData.icon]} coinName={coinId!} coinSymbol={coinData.coinSymbol} percentageChange={coinData.percentageChange} isAddedtoWishList={true} marketCap={coinData.marketCap} volumeIn24H={coinData.volume} circulatingSupply={coinData.totalSupply} handleClickForWatchListButton={function (arg: any): void {
                  throw new Error("Function not implemented.");
              } }/>

      </Grid>
      <Grid item xs={12}>
        <Tab investedAmount={coinData.investedAmount} currencyData={coinData.currencyData} percentageChange={coinData.percentageChange ?? 0} categories={coinData.categories} coinBalance={coinData.coinBalance} currentValue={coinData.currentValue} coinName={coinId!} transactions={transactions}/>
      </Grid>
    </Grid>
  );
};

export default DetailsPage