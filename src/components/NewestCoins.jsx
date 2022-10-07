import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { usePriceState } from '../context/priceContext';
import {MoonLoader} from "react-spinners"
import NewCoin from './NewCoin';

const sort = "age"
const order = "ascending"
const offset = 0
const limit = 70
const meta = true

const url = 'https://api.livecoinwatch.com/coins/list';
const NewestCoins = () => {
    const [newData, setNewData] = useState([])
    const {currency} = usePriceState()
    const[loading, setLoading] = useState(false)

    const fetchCoin = async ()=>{
       const {data} = await axios.post(url, 
        { body: currency, sort, order, offset, limit, meta },
        {
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.REACT_APP_LIVECOIN_TOKEN,
            }})
        setNewData(data)
    }
   


    
    useEffect(() => {
       fetchCoin()
    }, [currency, sort, order, meta])


  return (
    <div className='mt-20 border rounded-md   p-4'>
        <h3 className='font-semibold text-2xl py-6' >Newest CryptoCurrencies</h3>
       
       <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
       {newData?.map((coin) => {
        return(
            <NewCoin key={coin.code} coin={coin} />
            
        )
       })}
       </div>
    </div>
  )
}

export default NewestCoins