import React from 'react'
import { Divider, useColorMode } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import { AiOutlineBulb } from "react-icons/ai"



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
                <FiSearch className='text-xl' />
                <div onClick={toggleColorMode} className="toggle_btn flex items-center flex-col cursor-pointer">
                    <AiOutlineBulb />
                    {colorMode === 'light' ? 'Dark' : 'Light'}


                </div>
            </div>

        </div>
    )
}

export default MobileNav