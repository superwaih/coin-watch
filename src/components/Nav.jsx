import React from 'react'
import {FiSearch} from "react-icons/fi"
import {  Select } from '@chakra-ui/react'
import { currencies } from '../data/resource'
import { useColorMode } from '@chakra-ui/react'
import {AiOutlineBulb} from "react-icons/ai"
import { usePriceState } from '../context/priceContext'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const {setCurrency} = usePriceState()
  return (
   <div className="bg-[#b269ff] hidden md:block">
     <div className=' p-4 w-[80%]  m-auto gap-4   flex items-center justify-center'>
      <div className="logo flex-1">
      <h2 className='text-3xl '>Coin Watch</h2>
      </div>

      <div onClick={toggleColorMode} className="toggle_btn flex items-center flex-col cursor-pointer">
      <AiOutlineBulb />
       {colorMode === 'light' ? 'Dark' : 'Light'}
    

      </div>
      <div className="refresh_btn">
        <Select 
        // onChange={(e) => setCurrency(e.target.value)}
        >
          <option>2s</option>
          <option>4s</option>
          <option>5s</option>
          <option>20s</option>

        </Select>

      </div>
      <div className="select_coin">
        <Select
        onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c.id} value={c.name} >{c.name + " " + c.Symbol}</option>
          ))}
        </Select>

      </div>
      <div className="searchbar p-2 border hidden md:flex gap-3 rounded items-center ">
      <FiSearch />
        <input className='border-none outline-none bg-transparent' type="text" placeholder='Search' />
      </div>
      
    </div>
   </div>
  )
}

export default Nav