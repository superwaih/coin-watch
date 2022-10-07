import React, { createContext, useContext, useEffect, useState } from 'react'
import App from '../App'
import axios from 'axios'
import { TrendingCoins } from '../confiq/api'

const dataContext = createContext()

export const usePriceState = () => useContext(dataContext)






const url = 'https://api.livecoinwatch.com/overview';


const PriceContextProvider = ({children}) => {
    const [currency, setCurrency] = useState("usd")
    
    
    const[marketCapData, setMarketCapData] = useState([])

    const fetchMarketData = async () =>{
      try {
       const {data} = await axios.post(url,
        { body:  currency },
       {
        headers: {
          "content-type": "application/json",
          "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
        }
       } 
     )
       setMarketCapData(data)

        
      } catch (error) {
        console.log(error)
        
      }
    }

    useEffect(()=>{

      fetchMarketData()
    }, [currency])

    
  return (
    <dataContext.Provider
    value={{
        currency,
        setCurrency,
        marketCapData

    }}
    >
       {children}
    </dataContext.Provider>
  )
}

export default PriceContextProvider