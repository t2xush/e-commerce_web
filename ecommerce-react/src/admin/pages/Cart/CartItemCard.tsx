import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import { CartItem } from '../../../types/CartTypes'
import BusinessDetails from '../../../seller/pages/Account/BusinessDetails'
import { useAppDispatch } from '../../../state/store'
import { updateCartItem,deleteCartItem } from '../../../state/customer/cartSlice'


const CartItemCard = ({item}:{item:CartItem}) => {
  const dispatch=useAppDispatch()

  const handleUpdateQuantity = (value:number) =>()=> {
    dispatch(updateCartItem({jwt:localStorage.getItem("jwt"),
      cartItemId:item.id,
      cartItem:{quantity:item.quantity+value}
    }))

  }
  const handleRemoveItem = () => {
    dispatch(deleteCartItem({
      jwt: localStorage.getItem('jwt') || '',  // Pass the JWT token to the backend
      cartItemId: item.id,  // Pass the cartItemId to identify which item to remove
    }));
  };
  


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

            <Button onClick={handleUpdateQuantity(-1)} >
              <Remove />
            </Button>
            <span>
            {item.quantity}
              {/* {5} */}
            </span>
            <Button onClick={handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>

        </div>
        <div className='pr-5'>
          <p className="text-gray-700 font-medium">€{item.sellingPrice}</p>
        </div>
      </div>
     
      <div className='absolute top-1 right-1' >
        <IconButton color='primary' onClick={handleRemoveItem}>
          <Close />
        </IconButton>

      </div>
      

    </div>
  )
}

export default CartItemCard