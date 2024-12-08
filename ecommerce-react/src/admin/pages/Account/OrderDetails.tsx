import { Box, Button, Divider } from '@mui/material'
import PaymentsIcon from '@mui/icons-material/Payments';
import React from 'react'
import Orders from './Orders'
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';


const OrderDetails = () => {
    const navigate=useNavigate()
    return (
        <Box className="space-y-5">
            <section className='flex flex-col gap-5 justify-center items-center'>
                <img className='w-[100px]' src={/*orders.orderItem?.product.images[0]*/"https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
                <div className='text-sm space-y-1 text-center'>
                    <h1 className="font-bold">{/*orders.orderItem?.product.seller?.businessDetails.businessName*/"Orange Women Coat"}</h1>
                    <p>{/*orders.orderItem?.product.title*/"Women clothing | Three-dimensional Cutting | Cashmere | Orange"}</p>
                    <p><strong>Size:</strong>M</p>
                </div>
                <div>
                    <Button onClick={() => navigate(`/reviews/${/*orders.orderItem?.product.id*/5}/create`)}>Write Review</Button>
                </div>
            </section>

            <section className='border p-5'>
                <OrderStepper orderStatus={/*orders.currentOrder?.orderStatus}*/"PENDING"} />

            </section>

            <div className='border p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2'>
                    <div className='flex gap-5 font-medium'>
                        <p>{/*orders.currentOrder?.shippingAddress.name*/"Gao"}</p>
                        <Divider flexItem orientation='vertical' />
                        <p>{/*orders.currentOrder?.shippingAddress.mobile*/123456789}</p>
                    </div>

                    <p>
                        {/* {orders.currentOrder?.shippingAddress.address},{orders.currentOrder?.
                        shippingAddress.city},{orders.currentOrder?.shippingAddress.state} - 
                        {orders.currentOrder?.shippingAddress.pinCode} */}Finland Oulu OAMK 
                    </p>
                </div>
            </div>

            <div className='border space-y-4'>

                <div className='flex justify-between text-sm pt-5 px-5'>
                    <div className='space-y-1'>
                        <p className='font-bold'>Total Item Price</p>
                        <p>You saved <span className='text-green-500 font-medium text-xs'>€
                            {/*orders.orderItem?.mrpPrice - orders.orderItem?.sellingPrice*/499}.00</span>
                            on thin item</p>
                    </div>
                    <p className='font-medium'>€{/*orders.orderItem?.sellingPrice*/800}.00</p>
                </div>
                <div className='px-5'>
                    <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                        <PaymentsIcon />
                        <p>Pay On Delivery</p>
                    </div>
                </div>

                <Divider />
                <div className='px-5 pb-5'>
                    <p className="text-xs"><strong>Sold by : </strong>{/*orders.orderItem.product.
                    seller?.businessDetails.businessName*/"Orange Coat"}</p>
                </div>

                <div className='p-10'>
                    <Button
                    disabled={/*orders.currentOrder?.orderStatus === "CANCELLED"*/true}
                    // onClick={handleCancelOrder}
                    color='error' sx={{py:"0.7rem"}} className='' variant='outlined'
                    fullWidth>
                        {/*orders.currentOrder?.orderStatus === "CANCELLED"*/true ? "order cancelled" : "Cancel Order"}

                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default OrderDetails