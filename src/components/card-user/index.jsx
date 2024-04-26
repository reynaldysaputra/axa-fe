import React from 'react'
import { Link } from 'react-router-dom';

function CardUser({user}) {
  const {id= 2, name, username, email } = user;

  return (
    <Link to={`user/${id}`}>
      <div className='w-auto p-10 shadow-md rounded-md bg-white m-5 cursor-pointer hover:shadow-sm transition'>
        <p className='font-bold text-1xl'>{name}</p>
        <p className='text-sm'>{username}</p>
        <p>{email}</p>
      </div>
    </Link>
  )
}

export default CardUser