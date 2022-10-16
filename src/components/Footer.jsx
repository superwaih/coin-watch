import { Divider, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {colorMode} = useColorMode()
  return (
    <footer className='mt-20 mb-6'>
      <Divider />
    
    <div className={colorMode === 'light' ? "bg-slate-200" : "bg-[#293143]" } >
    <div className={colorMode === 'light' ? 'p-4 grid w-full m-auto md:w-[75%]  grid-cols-2 md:grid-cols-3 gap-4' : 'p-4 grid w-full m-auto md:w-[75%]  grid-cols-2 md:grid-cols-3 gap-4'} >
       <div className="first flex flex-col gap-2">
        <h5 className='text-[#8699b8] font-semibold text-xl'>Menu</h5>
        <div className="menu_items flex flex-col gap-2">
          <Link to="/">
          <p>Crypto Market Overview</p>
          </Link>

          <Link to="/trending">
          <p>Trending</p>
          </Link>
         

        </div>
       </div>
       <div className="second flex flex-col gap-2">
       <h5 className='text-[#8699b8] font-semibold text-xl'>Coin Watch</h5>
        {/* <div className="menu_items flex flex-col gap-2">
          <p>Conversion Tool</p>
          <p>All Coins</p>
          <p>Request a coin</p>
          <p>Request an Exchange</p>
          <p>Report a bug</p>
          <p>Contact us</p>
        </div> */}
       </div>
       <div className="third second flex flex-col gap-2">
        <h5 className='text-[#8699b8] font-semibold text-xl'>About us</h5>
        {/* <p>Complete cryptocurrency market coverage with live coin prices, charts and crypto market cap featuring 19606 coins on 532 exchanges.</p> */}
       </div>

    </div>

    </div>
    </footer>
  )
}

export default Footer