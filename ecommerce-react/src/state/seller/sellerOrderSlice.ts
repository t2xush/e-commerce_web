import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../types/orderTypes";
import { api } from "../../config/Api";


export const fetchSellerOrders = createAsyncThunk<Order[], string>(
    "sellerOrders/fetchSellerOrders",
    async (jwt, { rejectWithValue }) => {
      try {
        const response = await api.get(`/api/seller/orders`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("fetch seller orders", response.data);
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response.data.error || "failed to fetch seller orders"
        );
      }
    }
  );


  export const updateOrdersStatus = createAsyncThunk<Order,
  {jwt:string,
    orderId:number,
    orderStatus:OrderStatus
  }
   >(
    "sellerOrders/updateOrdersStatus",
    async( {jwt,orderId,orderStatus}, { rejectWithValue }) => {
      try {
        const response = await api.patch(`/api/sellers/orders/${orderId}/status/${OrderStatus}`,null, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("order status updated", response.data);
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response.data.error || "failed to update order status"
        );
      }
    }
  );


  export const deleteOrder = createAsyncThunk<Order,
  {jwt:string,
    orderId:number,
   
  }
   >(
    "sellerOrders/deleteOrder",
    async( {jwt,orderId}, { rejectWithValue }) => {
      try {
        const response = await api.delete(`/api/sellers/orders/${orderId}/delete`,{
          headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("order deleted", response.data);
        return response.data;
      } catch (error: any) {
        console.log("error", error.response);
        return rejectWithValue(
          error.response.data.error || "failed to delete order"
        );
      }
    }
  );


  interface sellerOrderState{
    orders:Order[];
    loading:boolean;
    error:string|null;
  }

  const initialState:sellerOrderState={
    orders:[],
    loading:false,
    error:null,

  };

  const sellerOrderSlice = createSlice({
    name: "sellerOrders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSellerOrders.pending, (state) => {
          state.loading = true;
          state.error = null;
     
        })
        .addCase(
            fetchSellerOrders.fulfilled,
          (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
            state.loading = false;
          }
        )
        .addCase(fetchSellerOrders.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })


        .addCase(updateOrdersStatus.pending, (state) => {
            state.loading = true;
            state.error = null;
       
          })

        .addCase(
              updateOrdersStatus.fulfilled,
            (state, action: PayloadAction<Order>) => {
            
              state.loading = false;
              const index=state.orders.findIndex(order=>order.id===action.payload.id);
              if(index!==-1){
                  state.orders[index] = action.payload;
              }
            }
          )
          .addCase(updateOrdersStatus.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })



          .addCase(deleteOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
       
          })

        .addCase(
              deleteOrder.fulfilled,
            (state, action) => {
            
              state.loading = false;
             state.orders=state.orders.filter(order=>order.id!==action.meta.arg.orderId)
            }
          )
          .addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })
    }})


    export default sellerOrderSlice.reducer;