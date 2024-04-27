import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { editFormComment, openFormComment } from '../../state/comment-slice';

function CardComments({comment}) {
  const {email, name, body} = comment;
  const dispatch = useDispatch();

  return (
    <div className='w-auto p-10 my-5 shadow-md rounded-md bg-white cursor-pointer hover:shadow-sm transition'>
      <div className='flex justify-between item-center mb-2'>
          <p className='font-bold text-1xl'>{email}</p>
          <div className='flex gap-2'>
            <MdOutlineModeEdit 
              size={16} 
              color="blue" 
              onClick={(e) => {
                e.preventDefault();
                dispatch(openFormComment(true));
                dispatch(editFormComment(true));
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
      <p className='text-md font-thin'>{name}</p>
      <p className='text-sm'>{body}</p>
    </div>
  )
}

export default CardComments