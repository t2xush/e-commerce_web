import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, Grid2, Icon, IconButton, Rating } from '@mui/material'
import React from 'react'
import { color } from '../../data/Filter/color'
import { red } from '@mui/material/colors'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
    <Grid2 container spacing={9}>
        <Grid2 size={ { xs: 1}}>
            <Box>
                <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                    G
                </Avatar>
            </Box>
        </Grid2>
        <Grid2 size={ { xs: 9}}>
          <div className="space-y-2">
            <div>
                <p className='font-semibold text-lg'>Gao</p>
                <p className='opacity-70'>09-12-2024 T:22:28:07</p>

            </div>

          </div>
          <Rating 
          value={4.5} 
          readOnly
          precision={.5} />
          <p>value for money product, great product</p>

          <div>
            <img className='w-24 h-24 object-cover' src="https://images.pexels.com/photos/19381569/pexels-photo-19381569/free-photo-of-portrait-of-a-young-woman-wearing-braided-pigtails-smiling-at-the-camera.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </div>
        </Grid2>
       

    </Grid2>
   <div>
   <IconButton> 
          <Delete sx={{color:red[700]}} />
        </IconButton>
   </div>
    </div>
  )
}

export default ReviewCard