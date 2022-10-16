import React from 'react'
import { Divider, useColorMode } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import { AiOutlineBulb } from "react-icons/ai"
import { Link } from 'react-router-dom'

import { BiTrendingUp } from "react-icons/bi"
import { GrOverview } from "react-icons/gr"
import { FiSearch } from 'react-icons/fi'
import { usePriceState } from '../context/priceContext'
import millify from 'millify'

const MobileNav = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const { marketCapData } = usePriceState()
    return (
        <div className=' md:hidden '>
            <div className="first_row p-4 flex justify-between">

                <div>
                    <p className='uppercase' >Market Cap</p>
                    {marketCapData.cap === undefined ?
                        (<Skeleton>
                            <div>Hello</div>
                        </Skeleton>) :
                        <p className=' text-[18px] text-center font-semibold'>${millify(marketCapData?.cap)}</p>
                    }
                </div>
                <div className="">
                    <h4>Coin Watch</h4>
                </div>

                <div>
                    <p className='uppercase'>24h Volume</p>
                    {marketCapData.volume === undefined ?
                        (<Skeleton>
                            <div>Hello</div>
                        </Skeleton>) :
                        <p className=' text-[18px] text-center font-semibold'>${millify(marketCapData?.volume)}</p>
                    }
                </div>

            </div>
            <Divider />

            <div className="_second_row p-4 flex justify-between">
                {/* <FiSearch className='text-xl' />
                */}



                <Link to={"/"} >
                    <div className='flex gap-2 items-center'>
                        <p className='cursor-pointer'>Crypto Market Overview</p>
                        <GrOverview />
                        
                    </div>

                </Link>
                <Link to={"/trending"}>
                    <div className='flex gap-2 items-center'>
                    <BiTrendingUp />
                        <p className='cursor-pointer'>Trending</p>

                    </div>



                </Link>


                <div onClick={toggleColorMode} className="toggle_btn flex items-center flex-col cursor-pointer">
                    <AiOutlineBulb />
                    {colorMode === 'light' ? 'Dark' : 'Light'}


                </div>
            </div>

        </div>
    )
}

export default MobileNav