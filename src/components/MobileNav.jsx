import React from 'react'
import { useColorMode } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'
import { usePriceState } from '../context/priceContext'
import millify from 'millify'

const MobileNav = () => {
    const {marketCapData} = usePriceState()
  return (
    <div className=' md:hidden '>
        <div className="first_row p-4 flex justify-between">
            <div>
                <p className='uppercase' >Market Cap</p>
                <p className='text-purple-600 font-bold text-[18px]'>${millify(marketCapData?.cap)}</p>
            </div>
            <div className="">
                <h4>Coin Watch</h4>
            </div>

            <div>
                <p className='uppercase'>24h Volume</p>
                <p className='text-purple-600 font-bold text-[18px]'>${millify(marketCapData?.volume)}</p>
            </div>

        </div>
        
        <div className="_second_row p-4">


            <FiSearch className='' />
        </div>

    </div>
  )
}

export default MobileNav