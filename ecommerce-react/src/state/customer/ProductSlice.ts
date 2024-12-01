import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

const API_URL="http://localhost:5555";


export const fetchProductById=createAsyncThunk("products/fetchProductById",
    async(productId,{rejectWithValue})=>{
        try{
            const response=await api.get(`${API_URL}/${productId}`);
            const data=response.data;
            console.log("data: " +data)
            return data
        }
        catch (error:any){
            console.log("error:" +error)
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
            console.log("search product data: " +data)
            return data
        }
        catch (error:any){
            console.log("error:" +error)
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
            console.log("all  products data: " +data)
            return data
        }
        catch (error:any){
            console.log("error:" +error)
            rejectWithValue(error.message)

        }

    }
)




