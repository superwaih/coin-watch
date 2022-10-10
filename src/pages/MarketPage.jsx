import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CryptoMarketCap from '../components/CryptoMarketCap'
import { usePriceState } from '../context/priceContext'
import MarketCapChart from '../components/MarketCapChart'
import Footer from '../components/Footer'
import TreeMapComponent from '../components/Movers/TreeMap'
import { useColorMode } from '@chakra-ui/react'
import LiquidityChart from '../components/Movers/LiquidityChartContainer'
const ALL_MILLISECONDS = 126230400000



const url = 'https://api.livecoinwatch.com/overview/history'

const MarketPage = () => {
  const {colorMode} = useColorMode()
  const[startDate, setStartDate] = useState(ALL_MILLISECONDS)
  const[loading, setLoading] = useState(true)
  const[chartData, setChartData] = useState([])
  const{currency} = usePriceState()

  const fetchMarketCap = async() =>{
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
        const {date, cap, volume} = d
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
       const graphData = data.map((d) => {
        const {date, cap, volume} = d
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
       const graphData = data.map((d) => {
        const {date, cap, volume} = d
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
      if(startDate === 31557600000){
        let dateNow = Date.now()
        let start = dateNow - 31557600000 
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
      if(startDate === 126230400000){
        let dateNow = Date.now()
        let start = dateNow - 126230400000 
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
     } catch (error) {
       console.log(error)
       
     }
  }
  useEffect(() => {
    fetchMarketCap()
  }, [currency, startDate])

  return (
    <div>
    <div className='w-full mx-auto md:w-[75%] mt-32'>
    <div className={colorMode === 'light' ? 
    ' border mb-4   flex-col  gap-4 rounded-tr-xl rounded-tl-xl flex items-center justify-center' : 
    ' border mb-4 bg-[#293143]  flex-col gap-4 rounded-tr-xl rounded-tl-xl flex justify-center'} >
      <CryptoMarketCap setStartDate={setStartDate} startDate={startDate} />
      <MarketCapChart chartData={chartData} loading={loading} />
      <LiquidityChart />

      
    </div>

    <div>
      <h2 className='text-2xl font-semibold md:text-left text-center py-4'>Crypto Market Cap Breakdown</h2>
      <TreeMapComponent />
    </div>


    </div>
    <Footer />

    </div>
  )
}

export default MarketPage