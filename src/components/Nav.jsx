import React from 'react'
import {FiSearch} from "react-icons/fi"
import {  Select } from '@chakra-ui/react'
import { currencies } from '../data/resource'
import { useColorMode } from '@chakra-ui/react'
import {AiOutlineBulb} from "react-icons/ai"
import { usePriceState } from '../context/priceContext'
import { Link } from 'react-router-dom'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const {setCurrency} = usePriceState()
  return (
       
       <div className={colorMode === 'light' ? "bg-[#b269ff] hidden md:block text-white font-bold" : "bg-[#b269ff] hidden md:block text-white font-bold"} >
     <div className=' p-4 w-[80%]  m-auto gap-4   flex items-center justify-center'>
      <div className="logo flex-1 flex items-center justify-between gap-2">
      <h2 className='text-3xl '>Coin Watch</h2>


      <div className='flex gap-4'>
            <Link to={"/"} >
              <p className='cursor-pointer '>Overview</p>

            </Link>
            <Link to={"/trending"}>
              <p className='cursor-pointer'>Trending</p>


            </Link>
        </div>
      </div>

       

      <div onClick={toggleColorMode} className="toggle_btn flex items-center flex-col cursor-pointer">
      <AiOutlineBulb />
       {colorMode === 'light' ? 'Dark' : 'Light'}
    

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
      <div className="searchbar p-2 border border-slate-500 hidden lg:flex gap-3 rounded items-center ">
      <FiSearch />
        <input className='border-none outline-none bg-transparent placeholder:text-gray-500' type="text" placeholder='Search' />
      </div>
      
    </div>
   </div>
  )
}

export default Nav