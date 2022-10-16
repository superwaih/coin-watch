import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import {MoonLoader} from "react-spinners"



  
  const COLORS = [
    "#B57937",
    "#000000",
    "#808080",
    "#FFBA01",
    "#7EC8E3",
    "#F07DEA",
    
  
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
                ? colors[Math.floor((index / root.children.length) * 6)]
                : "none",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10)
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="brown"
            fontWeight={600}
            // transform='uppercase'
            fontSize={19}
          >
            {name.toUpperCase()}
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
        <ResponsiveContainer width="98%" aspect={2 / 1}>
    
        <Treemap
          width={400}
          height={300}
          data={marketDominance}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={COLORS} />}
        >
          <Tooltip />
        </Treemap>
        </ResponsiveContainer>
      )

    }
}

export default TreeMapComponent