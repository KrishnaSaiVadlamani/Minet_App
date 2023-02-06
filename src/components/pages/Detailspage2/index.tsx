import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCrtptoCurrenicyById } from "../../../apis/api";
import HomeTemplate from "../../templates/HomeTemplate";
import Footer from "../../molecules/Footer";
import Header from "../../organisms/Header";
import SideNavComponentLocation from "../../organisms/SideNav";
import DetailPage from '../../pages/DetailsPage'

const DetailsPage2 = () => {
    let {coinId} = useParams();
    const [coinData, setCoinData] = useState<any>("");
    console.log(coinId+"Details page");
    console.log(coinData)

    useEffect(()=>{
        fetchCrtptoCurrenicyById(coinId!).then(data=>{
            console.log(data)
            setCoinData(data)});
    },[]       
    )
  return (
    <HomeTemplate
                  children={<DetailPage />}
                  header={<Header pageName={"Trade"} coinId={coinId} />}
                  footer={<Footer />}
                  sideNav={<SideNavComponentLocation />}
    />
    )
};

export default DetailsPage2