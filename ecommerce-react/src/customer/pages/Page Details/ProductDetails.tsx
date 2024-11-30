import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import Add from '@mui/icons-material/Add';
import ReviewCard from '../Review/ReviewCard';
const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1)
  return (
    <div className='px-5 lg:px-20 pt-10'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className="flex flex-col lg:flex-row gap-5">
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {[1, 1, 1, 1].map((item, index) => <img className='lg:w-full w-[50px] cursor-pointer rounded-md' src='https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />)}
          </div>
          <div className='w-full lg:w-[85%]'>
            <img className='w-full rounded-md' src="https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">
            Gyx & Xsj</h1>
          <p className='text-gray-500 font-semibold'>women orange coat</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className='flex gap-1 items-center'>
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />

            </div>
            <Divider orientation='vertical' flexItem />
            <span>
              234 Ratings
            </span>
          </div>

          <div>
            <div className='price flex items-center gap-3 mt-5 text-2xl' >
              <span className='font-sans text-gray-800'>
                € 400.0
              </span>
              <span className='line-through text-gray-400'>
                € 666.6
              </span>
              <span className='text-primary-color font-semibold'>
                60%
              </span>

            </div>
            <p className='text-sm'>Tax Exemption</p>
          </div>

          <div className='mt-7 space-y-3'>
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>

          </div>

          <div className='mt-7 space-y-2'>
            <h1>
              QUANTITY
            </h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>

          </div>
          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant='contained'
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}>
              Add to Cart
            </Button>

            <Button
              fullWidth
              variant='outlined'
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}>
              wishlist
            </Button>
          </div>
          <div className='mt-5'>
            <p>The combination of double-faced cashmere fabric and exquisite single-face craftsmanship is understatedly luxurious, while the bold colour palette allows every woman to express her unique style.</p>
          </div>
          <div className='mt-7'>
            <ReviewCard />
          </div>

        </section>

      </div>

    </div>
  )
}
// similar product page 4:46:12
export default ProductDetails