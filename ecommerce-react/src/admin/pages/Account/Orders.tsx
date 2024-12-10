import React, { useEffect } from 'react'
import OrderItem from './OrderItem'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import { fetchUserOrderHistory } from '../../../state/customer/orderSlice'

const Orders = () => {
  const dispatch=useAppDispatch()
  const {order}=useAppSelector(store=>store)


  useEffect(()=>{
    dispatch(fetchUserOrderHistory(localStorage.getItem('jwt')||""))
  },[])
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'>All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className='space-y-2'>

        {[1,1,1,1,1,1].map((item) => <OrderItem/>)}

      </div>

    </div>
  )
}

export default Orders