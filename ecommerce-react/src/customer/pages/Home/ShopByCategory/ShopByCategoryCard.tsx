import React from 'react'
import './ShopByCategory.css'
const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
       
       <div className='custome-border w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-full bg-primary-color'>
        <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 boject-cover object-top h-full w-full'
         src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
       </div>
       <h1>Kitchen & Table</h1>
    
    </div>
  )
}

export default ShopByCategoryCard