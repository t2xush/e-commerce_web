import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {

  const handleUpdateQuantity = () => {

  }
  return (
    <div className='border rounded-md relative'>

      <div className='p-5 flex gap-3'>

        <div>

          <img className='w-[90px] rounded-md' src="https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Women Wool Coat</h1>
          <p className='text-gray-600 font-medium text-sm'>Orange fabric three-dimensional cut women'coat</p>
          <p className='text-gray-400 text-xs'><strong>Sold by : </strong>G&X Products Private Limited</p>
          <p className='text-sm'>7 days replacement available</p>
          <p className='text-sm text-gray-500'><strong>quantity : </strong>5</p>
        </div>



      </div>
      <Divider />

      <div className='flex justify-between items-center'>
        <div className='px-5 py-2 flex justify-between items-center'>

          <div className='flex items-center gap-2 w-[140px] justify-between'>

            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>
              {5}
            </span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>

        </div>
        <div className='pr-5'>
          <p className="text-gray-700 font-medium">€400</p>
        </div>
      </div>
     
      <div className='absolute top-1 right-1'>
        <IconButton color='primary'>
          <Close />
        </IconButton>

      </div>
      

    </div>
  )
}

export default CartItem