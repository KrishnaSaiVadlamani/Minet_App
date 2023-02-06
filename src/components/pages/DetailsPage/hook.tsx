// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import {
//   addWatchList,
//   fetchCryptoCurrencies,
//   fetchWatchList,
//   removeWatchList,
// } from "../../../apis/api";
// import { CryptocurrencyType } from "../../../utils/types";

// export const useHooks = (id: string) => {
//   const [cryptoCurrency, setCryptoCurrency] = useState<CryptocurrencyType>();
//   const [watchListId, setWatchListId] = useState<string>("");
//   const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
//   let { coinId } = useParams();

//   useEffect(() => {
//     setIsAddedToWatchList(watchListId ? true : false);
//   }, [watchListId]);

//   useEffect(()=>{
//     fetchWatchList()
//     .then(async (data) => {
//       data.includes(id) ? setWatchListId(id) : setWatchListId(coinId);
//     })
//     .catch((error) => console.log(error));

//   })
  
//   const handleClick = async () => {
//     setIsAddedToWatchList((prevstate) => !prevstate);
//     fetchCryptoCurrencies(coinData)
//   };

//   return {
//     isAddedToWatchList,
//     handleClick
//   };
// };
