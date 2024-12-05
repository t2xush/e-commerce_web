import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { number } from "yup";
import { Cart } from "../../types/CartTypes";
import { api } from "../../config/Api";
import Coupon from "../../admin/pages/AdminDashboard/Coupon/Coupon";
import { error } from "console";
import { CouponState } from "../../types/couponTypes";

const API_URL="/api/coupons";

export const applyCoupon=createAsyncThunk<Cart,
{apply:string;
    code:string;
    orderValue:number;
    jwt:string;
},
{rejectValue:string}>
("coupon/applyCoupon",
    async({apply,code,orderValue,jwt},{rejectWithValue})=>{
        try{
            const response=await api.post(`${API_URL}/apply`,null,{
                params:{apply,code,orderValue},
                headers:{Authorization:`Bearer ${jwt}`}
            })
            console.log("apply coupon",response.data);
            return response.data;
        }catch(error:any){
            console.log("error",error)
            return rejectWithValue(error.response?.data.error || "failed to apply coupon");
        }

    })

    const initialState:CouponState={
        coupons:[],
        cart:null,
        loading:false,
        error:null,
        couponCreated:false,
        couponApplied:false,
    }

    const couponSlice=createSlice({
        name:"coupon",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(applyCoupon.pending,(state)=>{
                state.loading=true;
                state.error=null;
                state.couponApplied=false;
            })
            .addCase(applyCoupon.fulfilled,(state,action)=>{
                state.loading=false;
                state.cart=action.payload;
                
                if (action.meta.arg.apply=="true"){
                    state.couponApplied=true
                }
            })
            .addCase(applyCoupon.rejected,
                (state, action:PayloadAction<string |undefined>)=>{
                    state.loading=false;
                    state.error=action.payload ||"failed to apply coupon";
                    state.couponApplied=false;
                }
            )


        }
        
    })

    export default couponSlice.reducer