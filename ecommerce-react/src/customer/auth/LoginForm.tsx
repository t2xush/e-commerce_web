import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@mui/material';
import { sendLoginSignupOtp, signin } from '../../state/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch=useAppDispatch();
    const {auth}=useAppSelector(store=>store)
    const navigate = useNavigate();

    const formik=useFormik({
        initialValues:{
            email:"",
            otp:""
        },
        onSubmit:(values)=>{
            console.log("form data ",values)
           dispatch(signin(values))
          if(auth.isLoggedIn){
            navigate('/')
          }
        }

    })

    useEffect(()=>{
      if(auth.isLoggedIn){
        navigate('/')
      }
    },[auth.isLoggedIn])

   

    const handleSendOtp=()=>{
        dispatch(sendLoginSignupOtp({email:formik.values.email}))
      }
  return (
    <div>
        <h1 className='text-center font-bold text-xl text-primary-color pb-5'>
            Login
        </h1>
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
       <div className="space-y-3">  
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

          {auth.otpSent?  <Button onClick={()=>formik.handleSubmit()}
           fullWidth variant='contained' sx={{py:"10px"}}>
            Login
          </Button> : <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{py:"10px"}}>
           {auth.loading? <CircularProgress/> :  "Send Otp"}
          
          
          </Button> }
          {/* <Button onClick={handleSendOtp}fullWidth variant='contained' sx={{py:"10px"}}>
           {auth.loading? <CircularProgress/> :  "Send Otp"}
          
          
          </Button>

          <Button onClick={()=>formik.handleSubmit()}
           fullWidth variant='contained' sx={{py:"10px"}}>
            Login
          </Button> */}
      


   
    </div>
    </div>
  )
}

export default LoginForm