import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'



const BusinessDetails = () => {


  
  const formik=useFormik({
    initialValues:{ 
        businessName: "",
        GSTIN: "",
        accountStatus:""
   

    },
    onSubmit:(values)=>{
        console.log(values,"formik submitted");
    },
  })

  return (
    <div className='space-y-5'>

<TextField
            fullWidth
            name="businessDetails.businessName"
            label="Business Name"
            value={formik.values.businessName}
            onChange={formik.handleChange}
            error={formik.touched?.businessName && Boolean(formik.errors?.businessName)}
            helperText={formik.touched?.businessName && formik.errors?.businessName}
          />
             <TextField 
        fullWidth
        name='GSTIN'
        label="GSTIN"
        value={formik.values.GSTIN}
        onChange={formik.handleChange}
        error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
        helperText={formik.touched.GSTIN && formik.errors.GSTIN}
        />
  
  <Button  fullWidth variant="contained">
            Submit
          </Button>
      
    </div>
  )
}


export default BusinessDetails