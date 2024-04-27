import React from 'react'

function DetailUser({label, value}) {
  return (
    <h2 className='font-bold flex'>
      {label}: &nbsp; 
      <p className="font-normal">{value}</p>        
    </h2>
  )
}

export default DetailUser