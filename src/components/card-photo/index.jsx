import React, { useState } from 'react'
import Modal from 'react-modal';

function CardPhoto({photo}) {
  const {title, thumbnailUrl, url} = photo;
  const [openModal, setOpenModal] = useState(false);

  return (
    <div 
      className='relative w-full md:w-auto cursor-pointer shadow-lg hover:shadow-sm transition-all'
      onClick={() => setOpenModal(true)}
    >
      <img src={thumbnailUrl} className='bg-contain w-full' />
      <div className='absolute w-full bottom-0 bg-blue-400/70 text-center p-1'>
        <p className='truncate'>{title}</p>
      </div>

      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        className="w-full h-screen bg-black/60 flex justify-center items-center"
      >
        <div className='w-[90%] lg:w-[50%] bg-white p-10'>
          <div className='flex justify-between'>
            <h2>{title}</h2>
            <p className='cursor-pointer' onClick={e => {
              e.stopPropagation();
              setOpenModal(false)
            }}>X</p>
          </div>
          <div className='mt-5'>
            <img src={url} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CardPhoto