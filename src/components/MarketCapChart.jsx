import React, { useState } from 'react'
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {MoonLoader} from "react-spinners"
import { usePriceState } from '../context/priceContext';



const MarketCapChart = ({chartData, loading}) => {


  if(loading){
    return (
      <>
      <div className='flex w-100% h-[40vh] items-center justify-center'>
      <MoonLoader color="#d636d0" />


      </div>
      </>
    )
  }else{
    return(
      <ResponsiveContainer width="98%" aspect={3 / 1}>
      <AreaChart
        width={500}
        height={250}
        data={chartData}
        margin={{
          top: 5,
          right: 15,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Volume" stroke="#888"  />
        <Area type="monotone" dataKey="Cap" stroke="#8884d8"  />

        {/* <Area type="monotone" dataKey="Volume" stroke="#88888" fill="#8884d8" /> */}

      </AreaChart>
    </ResponsiveContainer>
    )

  }
}

export default MarketCapChart