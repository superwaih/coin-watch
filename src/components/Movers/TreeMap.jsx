import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import {MoonLoader} from "react-spinners"



// const COLORS = [
//   "#8889DD",
//   "#9597E4",
//   "#8DC77B",
//   "#A5D297",
//   "#E2CF45",
//   "#F8C12D"
// ];
  const COLORS = [
    "#B27836",
    "#000000",
    "#A8B3B9",
    "#FFBA01",
    "#7EC8E3",
    "#ACA58F",
    "#2459A6",
    "#A51369",
    "#B55319",
    "#46679C"


  ];

  const CustomizedContent = (props) => {
    const { root, depth, x, y, width, height, index, colors, name } = props;
  
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ?
                colors[index]
                  // index === 0 ? colors[0] : index === 1 ? colors[1] : index === 2 ? colors[2] : index === 3 ? colors[3] : index === 4 ? colors[4] : index === 5 ? colors[5] : index === 6 ? colors[6] : "none"
                
                // colors[Math.floor((index / root.children.length) * 6)]
                : "none",
            // stroke: "#fff",
            strokeWidth: 3 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10)
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            
            className={name === "btc" ? "text-[20px] text-[#7D5425] opacity-80 sm:text-2xl md:text-[30px] lg:text-5xl font-bold" : "text-[9px] opacity-80 text-[#7D5425] sm:text-xl md:text-[20px] lg:text-2xl md:font-bold" }  
            // transform='uppercase'
            // fontSize={25}
          >
            {/* {name === "btc" ? name.toUpperCase().slice(0, 3) : name.toUpperCase()} */}
            {name.toUpperCase() }
          </text>
        ) : null}
      
      </g>
    );
  };

const TreeMapComponent = () => {

  const [marketDominance, setMarketDominance] = useState([])
  const[loading, setLoading] = useState(false)

    const fetchGlobalData = async() =>{
      setLoading(true)
        const {data} = await axios.get("https://api.coingecko.com/api/v3/global")
       
        let keys = Object.entries(data.data.market_cap_percentage)

        const marketData = keys.map((d) => {
          return{
            name: d[0],
            children: [
              {name: d[0], size: d[1]}
            ]
          }
        })
        setMarketDominance(marketData)
      setLoading(false)

    }
    useEffect(() =>{
        fetchGlobalData()
    }, [])
    console.log(marketDominance);
   
    if(loading){
      return (
        <>
        <div className='flex w-100% h-[40vh] items-center justify-center'>
        <MoonLoader color="#d636d0" />
  
  
        </div>
        </>
      )
    }else{
      return (
        <ResponsiveContainer width="100%" aspect={4 / 1}>
    
        <Treemap
          width={400}
          height={200}
          data={marketDominance}
          dataKey="size"
          // stroke="#fff"
          fill="#8884d8"
          // style={{ margin: "0 auto" }}
          content={<CustomizedContent colors={COLORS} />}
        >
          <Tooltip />
        </Treemap>
        </ResponsiveContainer>
      )

    }
}

export default TreeMapComponent