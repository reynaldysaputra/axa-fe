import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPageUserAlbum() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl'>No Album User Found!</h1>
      <button 
        className='mt-3 text-blue-400'
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  )
}

export default ErrorPageUserAlbum