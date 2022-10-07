import { Divider } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Gainers from '../components/Movers/Gainers'
import NewestCoins from '../components/NewestCoins'
import TrendingTable from '../components/TrendingTable'
import { AllCoins, TrendingCoins } from '../confiq/api'
import { usePriceState } from '../context/priceContext'

const TrendingPage = () => {
  const {currency} = usePriceState()
  const[loading, setLoading] = useState(false)
  const[trendingData, setTrendingData] = useState([])
  const[losers, setLosers] = useState([])
  const[gainers, setGainers] = useState([])
  const[isloading, setIsloading] = useState(false)

  const fetchTrendingCoins = async() =>{
      setLoading(true)
      const {data} = await axios.get(TrendingCoins(currency))
      setTrendingData(data)
      setLoading(false)
  }
  const biggestLosers = async() =>{
    let sortLosersPrices = [];    
    const {data} = await axios.get(AllCoins(currency));
   sortLosersPrices = data.sort((a,b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
  
   setLosers(sortLosersPrices.slice(0,10))
  }
  const biggestGainers = async() =>{
    setIsloading(true)
    let sortGainersPrices = []
    
    const {data} = await axios.get(AllCoins(currency));
  sortGainersPrices = data.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
  setGainers(sortGainersPrices.slice(0,10))
  setIsloading(false)
  }

  useEffect(() =>{
    fetchTrendingCoins()
  }, [currency])

  useEffect(() => {
    biggestLosers()
  }, [currency])

  useEffect(() => {
    biggestGainers()
  }, [currency])
 
  return (
    <>
    <div className='w-full md:w-[70%] mt-20 p-2  rounded-md mx-auto flex flex-col '>
      <div className='border p-4 '>
        <h3 className='py-4 text-3xl font-bold'> Trending Coins</h3>
        <Divider />
        <TrendingTable trendingData={trendingData} loading={loading} />
      </div>

      <div className="mt-5 w-full border p-4">
        <h4 className='font-semibold text-2xl pt-6 pb-3 px-2'>Cryptocurrency Movers</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <div >
        <h5 className='font-semibold text-2xl pt-6 pb-3 px-2'>Biggest Gainers</h5>
        <Divider />
       <Gainers gainData={gainers} type={"gain"} loading={loading} />
       </div>
       <div c>
        <h5 className='font-semibold text-2xl pt-6 pb-3 px-2'>Biggest Losers</h5>
        <Divider />
       <Gainers gainData={losers} type={"lose"} loading={isloading} />


       </div>
        </div>

      </div>
      <NewestCoins />
      
     
    </div>
    <Footer />
    </>
  )
}

export default TrendingPage