import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CryptoMarketCap from '../components/CryptoMarketCap'
import { usePriceState } from '../context/priceContext'
import {CircleLoader} from "react-spinners"
import MarketCapChart from '../components/MarketCapChart'
import Footer from '../components/Footer'
import TreeMapComponent from '../components/Movers/TreeMap'
import { numberWithCommas } from '../helpers'
import millify from 'millify'
const YEAR_MILLISECONDS = 31536000000
const DAY_MILLISECONDS = 86400000
const D7_MILLISECONDS = 604800000
const D30_MILLISECONDS = 2592000000
const D90_MILLISECONDS = 7776000000
const Y3_MILLISECONDS = 94670856000



const url = 'https://api.livecoinwatch.com/overview/history'

const MarketPage = () => {
  const[startDate, setStartDate] = useState(DAY_MILLISECONDS)
  const[loading, setLoading] = useState(true)
  const[chartData, setChartData] = useState([])
  const{currency} = usePriceState()

  const fetchMarketCap = async() =>{
    let graphData = []
    try {
      setLoading(true)
      if(startDate === 86400000){
        let dateNow = Date.now()
        let start = dateNow - 86400000 
        let end = dateNow
        const {data} = await axios.post(url,
          {
            body: currency, start, end
          },

         {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
          }
         } 
       )
      
       const graphData = data.map((d) => {
        const {date, cap, volume} = d
        // let capp = millify(cap)
        const timestamp = new Date(date).toLocaleDateString("en-us")

        return {
          Date: timestamp,
          Cap: cap,
          Volume: volume
        }
       })
       
       setChartData(graphData)
       setLoading(false)

      }
      if(startDate === 604800000){
        let dateNow = Date.now()
        let start = dateNow - 604800000 
        let end = dateNow
        const {data} = await axios.post(url,
          {
            body: currency, start, end
          },
         {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
          }
         } 
       )
       const graphData = data.map((d) => {
        const [date, cap, volume, liquidity, btcDominance] = d
        let capp = millify(cap)
        const timestamp = new Date(date).toLocaleDateString("en-us")

        return {
          Date: timestamp,
          Cap: capp
        }
       })
       
       setChartData(graphData)
      
       setLoading(false)

      }
      if(startDate === 2592000000){
        let dateNow = Date.now()
        let start = dateNow - 2592000000 
        let end = dateNow
        const {data} = await axios.post(url,
          
          {
            body: currency, start, end
          },
         {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
          }
         } 
       )
       setChartData(data)
       setLoading(false)

      }
      if(startDate === 7776000000){
        let dateNow = Date.now()
        let start = dateNow - 7776000000 
        let end = dateNow
        const {data} = await axios.post(url,
          {
            body: currency, start, end
          },
         {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
          }
         } 
       )
       setChartData(data)
       setLoading(false)

      }
      if(startDate === 94670856000){
        let dateNow = Date.now()
        let start = dateNow - 94670856000 
        let end = dateNow
      
        const {data} = await axios.post(url,
          {
            body: currency, start, end
          },
         {
          headers: {
            "content-type": "application/json",
            "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
          }
         } 
       )
       setChartData(data)
       setLoading(false)

      }
     } catch (error) {
       console.log(error)
       
     }
  }
  useEffect(() => {
    fetchMarketCap()
  }, [currency, startDate])

  return (
    <div className='w-full md:w-[75%] border mb-4 bg-[#293143] mx-auto flex-col mt-32 gap-4 rounded-tr-xl rounded-tl-xl
      flex items-center justify-center'>
      <CryptoMarketCap setStartDate={setStartDate} startDate={startDate} />
      <MarketCapChart chartData={chartData} loading={loading} />
      <TreeMapComponent />



    {/* <Footer /> */}
    </div>
  )
}

export default MarketPage