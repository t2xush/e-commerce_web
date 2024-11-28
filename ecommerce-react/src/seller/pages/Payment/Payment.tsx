import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Payment = () => {
  return (
    <div className='space-y-5'>
      <Card className='rounded-md space-y-4 p-5'>
        <h1 className='text-gray-600 font-medium'>Total Earning</h1>
        <h1 className='font-bold text-xl pb-1'>€80</h1>
        <Divider/>
        <p className='to-gray-600 font-medium pt-1'>Last Payment: <strong>€80</strong></p>
        
      </Card>
           <div className='pt-20 space-y-3'>
          <Button variant='contained'>Transaction</Button>
          <Transaction/>
        </div>

    </div>
  )
}

export default Payment