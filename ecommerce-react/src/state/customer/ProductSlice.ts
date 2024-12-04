import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";
import { stat } from "fs";
import { act } from "react";

const API_URL="/products";


export const fetchProductById=createAsyncThunk("products/fetchProductById",
    async(productId:number,{rejectWithValue})=>{
        try{
            const response=await api.get(`${API_URL}/${productId}`);
            const data=response.data;
            console.log("data: " ,data)
            return data
        }
        catch (error:any){
            console.log("error:" ,error)
            rejectWithValue(error.message)

        }

    }
)



export const searchProduct=createAsyncThunk("products/searchProduct",
    async(query,{rejectWithValue})=>{
        try{
            const response=await api.get(`${API_URL}/search`,{
                params:{
                    query,
                }
            });
            const data=response.data;
            console.log("search product data: " ,data)
            return data
        }
        catch (error:any){
            console.log("error:" ,error)
            rejectWithValue(error.message)

        }

    }
)


export const fetchAllProducts=createAsyncThunk<any,any>("products/fetchAllProducts",
    async(params,{rejectWithValue})=>{

        try{
            const response=await api.get(`${API_URL}`,{
                params:{
                    ...params,
                    pageNumber:params.pageNumber||0

                }
            });
            const data=response.data;
            console.log("all  products data: " ,data)
            

            return data
        }
        catch (error:any){
            console.log("error:" ,error)
            rejectWithValue(error.message)

        }

    }
)


interface ProductState{
    product:Product | null;
    products:Product[];
    totalPages:number;
    loading:boolean;
    error:string|null |undefined|any;
    searchProduct:Product[]
}

const initialState:ProductState={
    product:null,
    products:[],
    totalPages:1,
    loading:false,
    error:null,
    searchProduct:[]

}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductById.pending,(state)=>{
            state.loading=true;

        })
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload;
        })
        builder.addCase(fetchProductById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            

        })
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.loading=true;

        })
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload.content;
        })
        builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            
        })


        builder.addCase(searchProduct.pending,(state)=>{
            state.loading=true;

        })
        builder.addCase(searchProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.searchProduct=action.payload;
        })
        builder.addCase(searchProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            
        })
    }

})


export default productSlice.reducer;


