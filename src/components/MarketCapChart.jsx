import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
      <ResponsiveContainer width="100%" height="500px">
      <AreaChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Cap" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    )

  }
}

export default MarketCapChart