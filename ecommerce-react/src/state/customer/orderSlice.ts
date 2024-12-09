import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderState } from "../../types/orderTypes";
import { api } from "../../config/Api";
import { Address } from "../../types/userTypes";

const initialState: OrderState = {
  orders: [],
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  loading: false,
  error: null,
  orderCanceled: false,
};

const API_URL = "/api/orders";
export const fetchUserOrderHistory = createAsyncThunk<Order[], string>(
  "orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch order history success", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue(
        error.response.data.error || "failed to fetcg order history"
      );
    }
  }
);

export const fetchOrderById = createAsyncThunk<
  Order,
  { orderId: number; jwt: string }
>("orders/fetchOrderById", async ({ orderId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.get(`${API_URL}/${orderId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("order fetched", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error", error.response);
    return rejectWithValue("failed to fetch order");
  }
});

export const createOrder = createAsyncThunk<
  any,
  {
    address: Address;
    jwt: string;
    paymentGateway: string;
  }
>(
  "orders/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
      const response = await api.post(API_URL, address, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentMethod: paymentGateway },
      });
      console.log("order created", response.data);
      console.log("payment gateway", paymentGateway);
      if (response.data.payment_link_url) {
        window.location.href = response.data.payment_link_url;
      }
      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue("failed to create order");
    }
  }
);

export const fetchOrderItemById = createAsyncThunk<
  OrderItem,
  {
    orderItemId: number;
    jwt: string;
  }
>(
  "orders/fetchOrderItemById",
  async ({ orderItemId, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/item/${orderItemId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("order item fetched", response.data);

      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue("failed to fetch order item");
    }
  }
);

export const paymentSuccess = createAsyncThunk<
  any,
  {
    paymentId: string;
    jwt: string;
    paymentLinkId: string;
  }
>(
  "orders/paymentSuccess",
  async ({ paymentId, jwt, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentLinkId },
      });
      console.log("payment success", response.data);

      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue("failed to process payment");
    }
  }
);

export const cancelOrder = createAsyncThunk<Order, any>(
  "orders/cancelOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/${orderId}/cancel`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        }
      );
      console.log("order cancelled", response.data);

      return response.data;
    } catch (error: any) {
      console.log("error", error.response);
      return rejectWithValue("failed to cancel order");
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(
        fetchUserOrderHistory.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.orders = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOrderById.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.currentOrder = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action: PayloadAction<any>) => {
        state.paymentOrder = action.payload;
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchOrderItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderItemById.fulfilled, (state, action) => {
        state.orderItem = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrderItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(paymentSuccess.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentSuccess.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payment success", action.payload);
      })
      .addCase(paymentSuccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orderCanceled = false;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        );
        state.orderCanceled = true;
        state.currentOrder = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
