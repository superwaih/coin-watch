import React from 'react'

const NewCoin = ({coin}) => {
  return (
    <div className='cursor-pointer flex gap-2'>
        <img className='h-8 w-8' src={coin.png32} alt="" />
        <div className="">
            <p>{coin.name}</p>
            <p>{coin.date}</p>
        </div>
    </div>
  )
}

export default NewCoin