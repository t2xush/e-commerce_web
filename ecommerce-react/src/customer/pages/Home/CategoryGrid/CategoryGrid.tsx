import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
       {/* left top one */}
        <div className='col-span-3 row-span-12 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/6983021/pexels-photo-6983021.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
        {/* middle top one  */}
        <div className='col-span-2 row-span-6 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/13234226/pexels-photo-13234226.png?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
        {/* right top one */}
        <div className='col-span-4 row-span-6 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/586958/pexels-photo-586958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        {/* right top two, the long one */}
        <div className='col-span-3 row-span-12 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/3769148/pexels-photo-3769148.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        </div>
        {/* middle bottom one */}
        <div className='col-span-4 row-span-6 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/15613452/pexels-photo-15613452/free-photo-of-close-up-of-diamonds-brooch.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        </div>
        {/* middle bottom two */}
        <div className='col-span-2 row-span-6 text-white'>
          <img
          className='w-full h-full object-cover object-top rounded-md'
          src="https://images.pexels.com/photos/2584278/pexels-photo-2584278.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        </div>

    </div>
  )
}

export default CategoryGrid