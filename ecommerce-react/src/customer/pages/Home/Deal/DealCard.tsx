import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top'
        src="https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
         <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>DW Watch</p>
            <p className='text-2xl font-bold'>20% OFF</p>
            <p className='text-balance text-lg'>shop now</p>
         </div>
    
    
    </div>
  )
}

export default DealCard