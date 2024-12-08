import React, { useEffect } from 'react'
import WishlistProductCard from './WishlistProductCard'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import { getWishlistByUserId } from '../../../state/customer/wishlistSlice'

const Wishlist = () => {
    const dispatch=useAppDispatch()
    const {wishlist}=useAppSelector(store=>store)


    useEffect(()=>{
        dispatch(getWishlistByUserId())
    },[])
  return (
    <div className='h-[85vh] p-5 lg:p-20'>
    <section>
        <h1><strong>My wishlist</strong> {wishlist.wishlist?.products.length} items</h1>
        <div className='pt-10 flex flex-wrap gap-5'>
            {wishlist.wishlist?.products.map((item)=><WishlistProductCard item={item}/>)}
        </div>
    </section>
</div>
  )
}

export default Wishlist