import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch } from '../../../state/store'
import { sendLoginSignupOtp } from '../../../state/authSlice'
import { sellersignin } from '../../../state/seller/sellerAuthSlice'


const SellerLoginForm = () => {
const dispatch=useAppDispatch();

    const formik=useFormik({
        initialValues:{
            email:"",
            otp:""
        },
        onSubmit:(values)=>{
            console.log("form data ",values)
            dispatch(sellersignin({email:values.email,otp:values.otp}))
        }

    })
    const handleSendOtp=()=>{
      dispatch(sendLoginSignupOtp({email:formik.values.email}))
    }
    const handleLoginButton=()=>{
      // dispatch(signin({email:formik.values.email}))
    }




  return (
    <div>
        <h1 className="text-center font-bold text-xl text-primary-color pb-5">Login as Seller</h1>
        <div className="space-y-5">
        <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
           
       {true &&
       <div className="space-y-2">  
       <p className="font-medium text-sm opacity-60">Enter OTP sent to your email</p>
       <TextField
            fullWidth
            name="otp"
            label="Otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
          </div>}
          <Button onClick={handleSendOtp}fullWidth variant='contained' sx={{py:"10px"}}>
           Send Otp
          </Button>

          <Button onClick={()=>formik.handleSubmit()}
           fullWidth variant='contained' sx={{py:"10px"}}>
            Login
          </Button>
      


   
    </div>
    </div>
  )
}

export default SellerLoginForm