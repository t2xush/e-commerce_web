import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { Order, OrderItem } from '../../../types/orderTypes'
import { useNavigate } from 'react-router-dom'

const OrderItemCard = ({item,order}:{item:OrderItem,order:Order}) => {
  const navigate=useNavigate()


  return (
    <div 
    onClick={()=>navigate(`/account/order/${order.id}/${item.id}`)}
    className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes='small' sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By {order.deliverDate}</p>
        </div>

      </div>
      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]' src={item.product.images[0]} alt="" />
          {/* "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" */}
        </div>
         <div className='w-full space-y-2'>
          <h1 className='font-bold'>
            {/* Orange Women Coat */}
            {item.product.title}

            </h1>
          <p>
            {/* Women clothing | Three-dimensional Cutting | Cashmere | Orange */}
            {item.product.seller?.businessDetails.businessName}

          </p>
          <p>
            <strong>size : </strong>
            {item.product.sizes}
          </p>
         </div>

      </div>
    </div>
  )
}

export default OrderItemCard