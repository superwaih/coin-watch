import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { usePriceState } from '../../context/priceContext'
import { timeframes } from '../../data/resource'
import TimeButton from "../TimeButton"
import DepthChart from './DepthChart'


const ALL_MILLISECONDS = 126230400000

const LiquidityChart = () => {
    const { currency} = usePriceState()
    const [endDate, setEndDate] = useState(ALL_MILLISECONDS)
    const[liquidityData, setLiquidityData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchExchangeLiquidity = async () =>{
        let end = Date.now()
        setLoading(true)
        if (endDate === 126230400000) {
            let startDate = end - 126230400000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }  
        if (endDate === 31557600000) {
            let startDate = end - 31557600000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }
        if (endDate === 7776000000) {
            let startDate = end - 7776000000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }
        if (endDate === 2592000000) {
            let startDate = end - 2592000000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }
        if (endDate === 604800000) {
            let startDate = end - 604800000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }
        if (endDate === 86400000) {
            let startDate = end - 86400000
            const { data } = await axios.get(`https://http-api.livecoinwatch.com/overview/liq?currency=USD&start=${startDate}&end=${end}`)
            setLiquidityData(data.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchExchangeLiquidity()
    }, [currency, endDate])
    




    return (
        <div className='p-4'>
                <h4 className='text-start text-2xl font-semibold md:text-left py-4'>Exchange Orderbook Liquidity</h4>
                <div className="flex gap-2">
                {timeframes.map((d) => {
                    return(
                        <TimeButton key={d.id} time={d} startDate={endDate} setStartDate={setEndDate} />
                    )
                } )}
                </div>

                <DepthChart liquidityData={liquidityData} loading={loading} />
            

        </div>
    )
}

export default LiquidityChart