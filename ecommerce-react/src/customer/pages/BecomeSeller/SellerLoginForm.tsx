import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../state/store'
import { sendLoginSignupOtp } from '../../../state/authSlice'
import { sellersignin } from '../../../state/seller/sellerAuthSlice'
import { useNavigate } from 'react-router-dom'


const SellerLoginForm = () => {
const dispatch=useAppDispatch();
const [sellerLoggedIn, setSellerLoggedIn] = useState(false);
const navigate=useNavigate()
const [signinError, setSigninError] = useState(false);

    const formik=useFormik({
        initialValues:{
            email:"",
            otp:""
        },
        onSubmit:async(values)=>{
          try {
            console.log('form data ', values);
            const response = await    dispatch(sellersignin({email:values.email,otp:values.otp}))
            .unwrap(); // Wait for the action to complete and unwrap the result
            
            if (response.jwt) { 
              setSellerLoggedIn(true);
              setSigninError(false);
              setTimeout(() => navigate('/seller'), 2000);
            } else {
              setSigninError(true);
            }
          } catch (error) {
            console.error('Signin failed:', error);
            setSigninError(true);
          }

      //       console.log("form data ",values)
      //       dispatch(sellersignin({email:values.email,otp:values.otp}))
      //       setSellerLoggedIn(true);
      // setTimeout(() => navigate("/seller"), 2000);
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
          {sellerLoggedIn && (
          <p className="text-green-500 mt-2 text-center">Seller login successful! Redirecting...</p>
        )}
        {signinError && (
          <p className="text-red-500 mt-2 text-center">Something went wrong. Please try again.</p>
        )}
      


   
    </div>
    </div>
  )
}

export default SellerLoginForm