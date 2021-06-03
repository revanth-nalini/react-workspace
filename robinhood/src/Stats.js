import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Stats.css'
import StatRow from './StatRow'
import { db } from './firebase'

function Stats() {

    const token = "bvlmgvv48v6vvdqt1o9g";
    const url = 'https://finnhub.io/api/v1/quote'    

    const[stockData,setStockData] = useState([])
    const[myStocks,setMyStocks] = useState([])

    useEffect(() => {
        getMyStocks()
        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let promises = [];
        stocksList.map((stock)=>{
            promises.push(
                getStockData(stock)
                .then((res)=>{
                    tempStocksData.push({
                        name:stock,
                        ...res.data
                    })
                })
            )
        })
        Promise.all(promises).then(()=>{
            setStockData(tempStocksData);
        })
    },[])

    const getStockData = (stock) => {
        return axios
            .get(`${url}?symbol=${stock}&token=${token}`)
            .catch((error)=>{
                console.error("Error",error.message)
            })
    }

    const getMyStocks = () => {
        db.collection('myStocks').onSnapshot(snapshot=>{
            let tempMyStocksData = []
            let promises = [];
            snapshot.docs.map((doc)=>{
                promises.push(
                    getStockData(doc.data().ticker)
                    .then(res=>{
                        tempMyStocksData.push({
                            id: doc.id,
                            data: doc.data(),
                            info: res.data
                        })
                    })
                )
            })
            Promise.all(promises).then(()=>{
                setMyStocks(tempMyStocksData);
            })
        })
    }

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>        
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {
                            myStocks.map((stock)=>(
                                <StatRow 
                                    key={stock.data.ticker}
                                    name={stock.data.ticker}
                                    shares={stock.data.shares}
                                    openPrice={stock.info.o}
                                    price={stock.info.c}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="stats__header stats__lists">
                    <p>Lists</p>        
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {
                            stockData.map((stock)=>(
                                <StatRow 
                                    key={stock.name}
                                    name={stock.name}
                                    openPrice={stock.o}
                                    price={stock.c}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
