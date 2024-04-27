import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { editFormPost, openFormPost } from '../../state/post-slice';

function CardPost({post}) {
  const {id, title, body } = post;
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <Link to={`${location.pathname}/post/${id}`}>
      <div className='w-auto p-10 shadow-md rounded-md bg-white cursor-pointer hover:shadow-sm transition'>
        <div className='flex justify-between item-center mb-2'>
          <p className='font-bold text-1xl'>{title}</p>
          <div className='flex gap-2'>
            <MdOutlineModeEdit 
              size={16} 
              color="blue" 
              onClick={(e) => {
                e.preventDefault();
                dispatch(openFormPost(true));
                dispatch(editFormPost(true));
              }}
            />
            <AiOutlineDelete 
              size={16} 
              color="red" 
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </div>
        <p className='text-sm'>{body}</p>
      </div>
    </Link>
  )
}

export default CardPost