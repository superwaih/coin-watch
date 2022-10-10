import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {MoonLoader} from "react-spinners"



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DepthChart = ({ liquidityData, loading }) => {

    if (loading) {
        return (
            <>
                <div className='flex w-100% h-[40vh] items-center justify-center'>
                    <MoonLoader color="#d636d0" />


                </div>

            </>
        )

    } else {

        return (
            <>
                <Bar

                    data={
                        {
                            labels: liquidityData.map((d) => {
                                const {date} = d
                                const timestamp = new Date(date).toLocaleDateString("en-us")
                                return(
                                    timestamp
                                )
                            }),
                            datasets: [
                              {
                                label: 'Ask',
                                data: liquidityData.map((d) => d.ask),
                                backgroundColor: 'rgb(255, 99, 132)',
                              },
                              {
                                label: 'Bid',
                                data: liquidityData.map((d) => d.bid),
                                backgroundColor: 'rgb(75, 192, 192)',
                              },
                             
                            ],
                          }
                    }
                    options={{
                        plugins: {
                          title: {
                            display: false,
                            
                          },
                        },
                        responsive: true,
                        scales: {
                          x: {
                            stacked: true,
                            ticks:{
                                autoSkip: true,
                                maxRotation: 0,
                                stepSize: 2
                                
                            }

                          },
                          y: {
                            stacked: true,
                            ticks:{
                                display: false
                            }
                          },
                        },
                      }

                    }


                />


            </>
        )

    }
}

export default DepthChart