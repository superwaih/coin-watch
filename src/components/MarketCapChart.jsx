import React, { useRef } from 'react'
// import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {MoonLoader} from "react-spinners"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,

  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import millify from 'millify';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  TimeScale,
  Title,
  Filler,
  Tooltip,
  Legend
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
                    
                    data: chartData.map((coin) => coin.Cap),
                    label: `Crypto MarketCap `,
                    borderColor: "#A020F0",
                    yAxisID: 'y',
                    tension: 0.3
                  },
                  {
                    fill: true,
                    data: chartData.map((coin) => coin.Volume),
                    label: `Crypto Market Volume `,
                    borderColor: "rgba(0, 0, 0, 0.5)",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    yAxisID: 'y1',
                  },
                ],
              }}
              options={{
               
                interaction: {
                  mode: 'nearest',
                },

                scales: {
                  x: {
                   
                  ticks:{
                    autoSkip: true,  
                  maxRotation: 0,
                    stepSize:2,
                    major:{
                      enabled: true
                    },
                    callback: function(val, index) {
                      // Hide every 2nd tick label
                      return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    },
                    
                  },
                  time:{
                    unit: "day"
                  },
                  
                  },
                  y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks:{
                      color: "pink",
                      callback: function(value, index, ticks){
                        return "$" + millify(value)
                      }
                    }
                    
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                      color: 'rgb(153, 102, 255)',
                        callback: function(value, index, ticks){
                          return "$" +millify(value)
                        }
                    },
                    
                    grid: {
                      drawOnChartArea: true,
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


