import React from 'react'
import {MoonLoader} from "react-spinners"
import millify from 'millify'
import {AiFillCaretDown, AiFillCaretUp, AiOutlineHeart} from "react-icons/ai"

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { numberWithCommas } from '../helpers'

const TrendingTable = ({loading, trendingData}) => {
  return (
    <div className='w-full flex font-[18px]  min-h-[70vh]'>
      {
        loading ?
        ( 
        <div className='flex w-full item-center justify-center'>
          <MoonLoader
          color="#c936d6"
          size={100}
        />
          </div>
        )
        :

      (<TableContainer>
         <Table size='lg'>
           <Thead>
             <Tr>
               <Th>Rank</Th>
               <Th>Coin</Th>
               <Th>Price</Th>
               <Th>Market Cap</Th>
               {/* <Th> 1h</Th> */}

               <Th>Price change 24h</Th>
               {/* <Th>24h</Th> */}
              
             </Tr>
           </Thead>
           <Tbody>
            {
              trendingData.map((coin) => {
                const profit = coin.price_change_percentage_24h > 0
                return(
                  <Tr className='cursor-pointer text-[17px] w-full hover:bg-purple-600' key={coin.id}>
                  <Td >
                  <p className='flex flex-col items-center'><AiOutlineHeart />
                    {coin.market_cap_rank}</p>
                    
                  </Td>
                  <Td>
                    <div className='flex gap-4'>
                      <img className='h-10 w-10' src={coin.image} alt="" />
                      <div>
                        <p>{coin.symbol.toUpperCase()}</p>
                        {coin.name}
                      </div>
                    </div>
                    
                  </Td>
                  <Td>${numberWithCommas(coin.current_price)}</Td>
                  <Td>${millify(coin.market_cap)}</Td>
                  <Td  >
                    {profit ? (<p className='text-green-400 flex gap-2 items-center'>
                      <span >+{coin.price_change_percentage_24h.toFixed(2)}%</span>
                      <AiFillCaretUp />

                    </p>) : (<p className='text-red-600 flex gap-2 items-center'>
                      <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                      <AiFillCaretDown />
                    </p>)}
                    
                    
                    </Td>
                  {/* <Td>${numberWithCommas(coin.ath)}</Td> */}
          </Tr>
                )
              })}

           </Tbody>
         </Table>
       </TableContainer>)
      }



    </div>
   
  )
}

export default TrendingTable