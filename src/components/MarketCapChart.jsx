import React, { useRef, useState } from 'react'
// import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {MoonLoader} from "react-spinners"
import { usePriceState } from '../context/priceContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  // Legend
);



const MarketCapChart = ({chartData, loading}) => {
  const ref = useRef()


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
      <>
            <Line
            ref={ref}
              data={{
                labels: chartData.map((coin) => {
                  return coin.Date
                }),

                datasets: [
                  {
                    fill: true,
                    data: chartData.map((coin) => coin.Cap),
                    label: `Crypto MarketCap `,
                    borderColor: "#A020F0",
                    yAxisID: 'y',
                  },
                  {
                    fill: true,
                    data: chartData.map((coin) => coin.Volume),
                    label: `Crypto Market Volume `,
                    borderColor: "#FFC0CB",
                    yAxisID: 'y1',
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                },
               
                interaction: {
                  mode: 'index',
                  intersect: false,
                },
                
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />

           
            
           
          </>
    )

  }
}

export default MarketCapChart



{/* <ResponsiveContainer width="98%" aspect={3 / 1}>
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
  <XAxis dataKey="Date" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="Volume" stroke="#888"  />
  <Area type="monotone" dataKey="Cap" stroke="#8884d8"  />


</AreaChart>
</ResponsiveContainer> */}