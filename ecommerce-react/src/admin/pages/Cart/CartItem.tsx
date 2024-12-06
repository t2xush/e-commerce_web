import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import { CartItem } from '../../../types/CartTypes'
import BusinessDetails from '../../../seller/pages/Account/BusinessDetails'

const CartItemCard = ({item}:{item:CartItem}) => {

  const handleUpdateQuantity = () => {

  }
  return (
    <div className='border rounded-md relative'>

      <div className='p-5 flex gap-3'>

        <div>

          <img className='w-[90px] rounded-md' src={item.product.images[0]} alt="" />

        </div>

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">{item.product.title}</h1>
          <p className='text-gray-600 font-medium text-sm'>{item.product.category?.categoryId}</p>
          <p className='text-gray-400 text-xs'><strong>Sold by : </strong>{item.product.seller?.businessDetails.businessName}</p>
          <p className='text-sm'>7 days replacement available</p>
          <p className='text-sm text-gray-500'><strong>quantity : </strong>{item.quantity}</p>
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
            {item.quantity}
              {/* {5} */}
            </span>
            <Button onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>

        </div>
        <div className='pr-5'>
          <p className="text-gray-700 font-medium">€{item.sellingPrice}</p>
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

export default CartItemCard