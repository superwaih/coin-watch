import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { usePriceState } from '../context/priceContext'
import {timeframes} from "../data/resource"
import TimeButton from './TimeButton'
import millify from "millify";
import {covertPercent} from "../helpers/index"


const CryptoMarketCap = ({setStartDate, startDate}) => {
    
    const {colorMode} = useColorMode()
    const {marketCapData} = usePriceState()
  return (
    <div className={colorMode === "light" ? 'flex flex-col w-full space-y-5 p-8  '
    : 'flex flex-col w-full bg-[#293143] space-y-5 p-8  ' }
    >
        <h2 className='text-2xl font-semibold md:text-left text-center'>Cryptocurrency Market Overview</h2>
        <div className="stats flex justify-between">
            <div className="market_cap ">
                <p className='text-[13px]  text-[#8699b8] font-semibold' >MARKET CAP</p>
                <p className=' text-[18px] text-center font-semibold'>${millify(marketCapData?.cap)}</p>
            </div>
            <div className="market_cap">
                <p className='text-[13px]  text-[#8699b8] font-semibold'>24H VOLUME</p>
                <p className=' text-[18px]'>${millify(marketCapData?.volume)}</p>
            </div>
            <div className="market_cap">
                <p className='text-[13px]  text-[#8699b8] font-semibold'>BTC DOMINANCE</p>
                <p className=' text-[18px]'>{covertPercent(marketCapData?.btcDominance)}%</p>
            </div>
        </div>

        <h4 className='text-2xl font-semibold md:text-left text-center' >Crypto Market Cap & Volume</h4>
       <div className="btns flex space-y-6 md:flex-row flex-col justify-between">
       <div className='flex gap-4  items-center'>
            <p className='text-[#8699b8]]'>Zoom</p>
              <div className='flex gap-2'>
                  {timeframes.map((t) => {
                      return (
                       <TimeButton startDate={startDate} setStartDate={setStartDate} key={t.id} time={t} />
                      )

                  })}
              </div>
        </div>

        <div className="flex gap-5">
                  <p>Scale</p>
                  <div className="btns">
                    <button>Linear</button>
                    <button>Log</button>
        </div>
        </div>
       </div>

    </div>
  )
}

export default CryptoMarketCap