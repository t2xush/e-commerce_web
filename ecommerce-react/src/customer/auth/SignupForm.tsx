import React, { useState } from 'react'
import { useAppDispatch } from '../../state/store';
import { useFormik } from 'formik';
import { sendLoginSignupOtp, signup } from '../../state/authSlice';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const dispatch=useAppDispatch();
    const [isSignup, setIsSignup] = useState(false);
const navigate=useNavigate()
const [signupError, setSignupError] = useState(false);


    const formik=useFormik({
        initialValues:{
            email:"",
            otp:"",
            fullName:""
        },
        onSubmit:async(values)=>{
          try {
            console.log('form data ', values);
            const response = await dispatch(
              signup({ email: values.email, otp: values.otp, fullName: values.fullName })
            ).unwrap(); // Wait for the action to complete and unwrap the result
            
            if (response.success) { // Assuming the action returns a "success" flag
              setIsSignup(true);
              // setSignupError(false);
              setTimeout(() => navigate('/'), 2000);
            } else {
              setSignupError(true);
            }
          } catch (error) {
            console.error('Signup failed:', error);
            setSignupError(true);
          }
            // console.log("form data ",values)
            // dispatch(signup({email:values.email,otp:values.otp,fullName:values.fullName}))
            // setIsSignup(true);
            // setTimeout(() => navigate("/seller"), 2000);
        }

    })

    const handleSendOtp=()=>{
        dispatch(sendLoginSignupOtp({email:formik.values.email}))
      }
  return (
    <div>
        <h1 className='text-center font-bold text-xl text-primary-color pb-5'>
            Sign up
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
               <TextField
            fullWidth
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
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
          <Button onClick={handleSendOtp}fullWidth variant='contained' sx={{py:"10px"}}>
           Send Otp
          </Button>

          <Button onClick={()=>formik.handleSubmit()}
           fullWidth variant='contained' sx={{py:"10px"}}>
            Sign up
          </Button>
          {isSignup && (
          <p className="text-green-500 mt-2 text-center">Seller login successful! Redirecting...</p>
        )}
        {signupError && (
          <p className="text-red-500 mt-2 text-center">Something went wrong. Please try again.</p>
        )}
      


   
    </div>
    </div>
  )
}

export default SignupForm