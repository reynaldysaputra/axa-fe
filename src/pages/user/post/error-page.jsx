import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPageUserPost() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl'>No Post User Found!</h1>
      <button 
        className='mt-3 text-blue-400'
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  )
}

export default ErrorPageUserPost