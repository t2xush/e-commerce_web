import { TextField } from '@mui/material'
import React from 'react'

interface BecomeSellerFormStep2Props{formik:any}

const BecomeSellerFormStep4 = ({formik}:BecomeSellerFormStep2Props) => {
  return (
    <div className='space-y-5'>
       <TextField
            fullWidth
            name="businessDetails.businessName"
            label="Business Name"
            value={formik.values.businessDetails.businessName}
            onChange={formik.handleChange}
            error={formik.touched?.businessDetails?.businessName && Boolean(formik.errors?.businessDetails?.businessName)}
            helperText={formik.touched?.businessDetails?.businessName && formik.error?.businessDetails?.businessName}
          />
            <TextField
            fullWidth
            name="sellerName"
            label="Seller Name"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.sellerName && formik.error.sellerName}
          />
            <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.error.email}
          />
          <TextField
            fullWidth
            name="password"
            label="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.error.password}
          />
      
    </div>
  )
}

export default BecomeSellerFormStep4