import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellersignin=createAsyncThunk<any,any>("/auth/sellersignin",
    async(loginRequest,{rejectWithValue})=>{
        try{
            const response=await api.post("/sellers/login",loginRequest)
            console.log("login", response.data)
            const jwt=response.data.jwt;
            localStorage.setItem("jwt",jwt);

        }catch(error:any){
            console.log("error:",error)
            return rejectWithValue(error.response.data);
        }
    }
)