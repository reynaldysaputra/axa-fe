import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function CardPost({post}) {
  const {id, title, body } = post;
  const location = useLocation();

  return (
    <Link to={`${location.pathname}/post/${id}`}>
      <div className='w-auto p-10 shadow-md rounded-md bg-white cursor-pointer hover:shadow-sm transition'>
        <p className='font-bold text-1xl'>{title}</p>
        <p className='text-sm'>{body}</p>
      </div>
    </Link>
  )
}

export default CardPost