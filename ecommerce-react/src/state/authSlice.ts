import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../types/userTypes";



export const sendLoginSignupOtp=createAsyncThunk("/auth/sendLoginSignupOtp",
    async({email}:{email:string},{rejectWithValue})=>{
        try{
            const response=await api.post("/auth/sent/login-signup-otp",{email})
            console.log("login otp",response)

        }catch(error){
            console.log("error:",error)
        }
    }
)

export const signin=createAsyncThunk<any,any>("/auth/signin",
    async(loginRequest,{rejectWithValue})=>{
        try{
            const response=await api.post("/auth/signing",loginRequest)
            console.log("login success", response.data)
            localStorage.setItem("jwt",response.data.jwt)
            return response.data.jwt;

        }catch(error:any){
            console.log("error:",error)
            return rejectWithValue(error.response.data);
        }
    }
)

export const signup=createAsyncThunk<any,any>("/auth/signup",
    async(signupRequest,{rejectWithValue})=>{
        try{
            const response=await api.post("/auth/signup",signupRequest)
            console.log("signup success", response.data)
            localStorage.setItem("jwt",response.data.jwt)
            return response.data.jwt;

        }catch(error:any){
            console.log("error:",error)
            return rejectWithValue(error.response.data);
        }
    }
)

export const fetchUserProfile=createAsyncThunk<any,any>("/auth/fetchUserProfile",
    async({jwt},{rejectWithValue})=>{
        console.log("jwt ----",jwt)
        try{
            const response=await api.get("/api/users/profile",{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
             })
            console.log("fetch customer profile  success", response.data)
            // localStorage.setItem("jwt",response.data.jwt)
            return response.data;

        }catch(error:any){
            console.log("error:",error)
            return rejectWithValue(error.response.data);
        }
    }
)




export const logout=createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue})=>{
        try{
            localStorage.clear()
            console.log("logout")
            navigate("/")

        }catch(error:any){
            console.log("error:",error)
          
        }
    }
)

interface AuthState{
    jwt:string |null,
    otpSent:boolean,
    isLoggedIn:boolean,
    user:User |null,
    loading:boolean

}

const initialState:AuthState={
    jwt:null,
    otpSent:false,
    isLoggedIn:false,
    user:null,
    loading:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendLoginSignupOtp.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(sendLoginSignupOtp.fulfilled,(state)=>{
            state.loading=false;
            state.otpSent=true
        })
        builder.addCase(sendLoginSignupOtp.rejected,(state)=>{
            state.loading=false
        })



        builder.addCase(signin.fulfilled,(state,action)=>{
            state.jwt=action.payload
            state.isLoggedIn=true
        })
        builder.addCase(signup.fulfilled,(state,action)=>{
            state.jwt=action.payload
            state.isLoggedIn=true
        })

        builder.addCase(fetchUserProfile.fulfilled,(state,action)=>{
            state.user=action.payload
            state.isLoggedIn=true
        })




        


    }
})



export default authSlice.reducer;