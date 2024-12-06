import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice"
import sellerProductSlice from "./seller/sellerProductSlice"
import productSlice from './customer/productSlice'
import authSlice from "./authSlice";
import cartSlice from "./customer/cartSlice"
import orderSlice from './customer/orderSlice'
 

const rootReducer=combineReducers({
    seller:sellerSlice,
    sellerProduct:sellerProductSlice,
    product:productSlice,
    auth:authSlice,
    cart:cartSlice,
    order:orderSlice


})

const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof rootReducer>;
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
export default store;