import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function CardComments({comment}) {
  const {email, body} = comment;

  return (
    <div className='w-auto p-10 my-5 shadow-md rounded-md bg-white cursor-pointer hover:shadow-sm transition'>
      <p className='font-bold text-1xl'>{email}</p>
      <p className='text-sm'>{body}</p>
    </div>
  )
}

export default CardComments