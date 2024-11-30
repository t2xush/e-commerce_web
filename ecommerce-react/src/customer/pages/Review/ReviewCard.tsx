import { Avatar, Box, Grid, Grid2 } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
    <Grid2 container spacing={2}>
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
                <p className='opacity-70'></p>

            </div>

          </div>
        </Grid2>
    </Grid2>

    </div>
  )
}

export default ReviewCard