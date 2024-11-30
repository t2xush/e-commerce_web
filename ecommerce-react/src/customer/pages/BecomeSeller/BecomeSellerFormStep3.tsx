import { TextField } from '@mui/material'
import React from 'react'

interface BecomeSellerFormStep2Props{formik:any}

const BecomeSellerFormStep3:React.FC<BecomeSellerFormStep2Props>= ({formik}) => {
  return (
    <div className='space-y-5'>
       <TextField
            fullWidth
            name="bankDetails.accountNumber"
            label="Acount Number"
            value={formik.values.bankDetails.accountNumber}
            onChange={formik.handleChange}
            error={formik.touched?.bankDetails?.accountNumber && Boolean(formik.errors?.bankDetails?.accountNumber)}
            helperText={formik.touched?.bankDetails?.accountNumber && formik.error?.bankDetails?.accountNumber}
          />
           <TextField
            fullWidth
            name="bankDetails.ifscCode"
            label="ifscCode"
            value={formik.values.bankDetails.ifscCode}
            onChange={formik.handleChange}
            error={formik.touched?.bankDetails?.ifscCode && Boolean(formik.errors?.bankDetails?.ifscCode)}
            helperText={formik.touched?.bankDetails?.ifscCode && formik.error?.bankDetails?.ifscCode}
          />
             <TextField
            fullWidth
            name="bankDetails.accountHolderName"
            label="Account Holde Name"
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            error={formik.touched?.bankDetails?.accountHolderName && Boolean(formik.errors?.bankDetails?.accountHolderName)}
            helperText={formik.touched?.bankDetails?.accountHolderName && formik.error?.bankDetails?.accountHolderName}
          />
           


    </div>
  )
}

export default BecomeSellerFormStep3