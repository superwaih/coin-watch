import React from 'react'

const TimeButton = ({ time, startDate, setStartDate}) => {
  return (
    <button onClick={() => setStartDate(time.value)} 
    className={startDate === time.value ? 'border-slate-500 hover: border rounded-md bg-[#c936d6]  p-[5px]' : 'border-slate-500 hover: border rounded-md p-[5px]' }  >
        {time.label}
    </button>
  )
}

export default TimeButton