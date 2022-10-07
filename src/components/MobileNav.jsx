import { MenuButton } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { usePriceState } from '../context/priceContext'

const MobileNav = () => {
    const {} = usePriceState()
  return (
    <div>
        <div className="first_row">
            <div>
                <p>Market Cap</p>
                <p>{}</p>
            </div>

            <div className="">
                <h4>Coin Watch</h4>
            </div>

        </div>
        <div>
                <p>Market Cap</p>
                <p>{}</p>
            </div>
        <div className="_second_row">
            <MenuButton />

            <FiSearch className='' />
        </div>

    </div>
  )
}

export default MobileNav