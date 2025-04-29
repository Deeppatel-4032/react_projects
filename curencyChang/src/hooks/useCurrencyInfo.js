import { useEffect, useState } from "react";


// auto fetch thy jase API useEffect thi
function useCurrencyInfo(currency) {
    // console.log("Currecy: ", currency);
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // json ma data convet kara
        .then((res) => {
            // console.log("res ==> ",res[currency])
            setData(res[currency])
        })
        .catch((err) => console.log("fetch is faild", err))       
    }, [currency]);
    console.log("Data", data);
    return data;
}


export default useCurrencyInfo;