import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'



const BankDetails= () => {
    
  const formik=useFormik({
    initialValues:{
     
       
            accountNumber: "",
            ifscCode: "",
            accountHolderName: "",
      
     
    },
    onSubmit:(values)=>{
        console.log(values,"formik submitted");
    },
  })

  return (
    <div className='space-y-5'>
           <TextField
            fullWidth
            name="bankDetails.accountHolderName"
            label="Account Holde Name"
            value={formik.values.accountHolderName}
            onChange={formik.handleChange}
            error={formik.touched?.accountHolderName && Boolean(formik.errors?.accountHolderName)}
            helperText={formik.touched?.accountHolderName && formik.errors?.accountHolderName}
          />
       <TextField
            fullWidth
            name="bankDetails.accountNumber"
            label="Acount Number"
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
            error={formik.touched?.accountNumber && Boolean(formik.errors?.accountNumber)}
            helperText={formik.touched?.accountNumber && formik.errors?.accountNumber}
          />
           <TextField
            fullWidth
            name="bankDetails.ifscCode"
            label="ifscCode"
            value={formik.values.ifscCode}
            onChange={formik.handleChange}
            error={formik.touched?.ifscCode && Boolean(formik.errors?.ifscCode)}
            helperText={formik.touched?.ifscCode && formik.errors?.ifscCode}
          />
        
           
           <Button  fullWidth variant="contained">
            Submit
          </Button>


    </div>
  )
}

export default BankDetails