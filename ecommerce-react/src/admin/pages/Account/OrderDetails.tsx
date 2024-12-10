import { Box, Button, Divider } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import React, { useEffect } from "react";
import Orders from "./Orders";
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import {
  fetchOrderById,
  fetchOrderItemById,
} from "../../../state/customer/orderSlice";

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { orderId, orderItemId } = useParams();
  const { order } = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchOrderById({
        orderId: Number(orderId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
    dispatch(
      fetchOrderItemById({
        orderItemId: Number(orderItemId),
        jwt: localStorage.getItem("jwt") || "",
      })
    );
  }, []);

  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src={
            order.orderItem?.product.images[0]
            // "https://images.pexels.com/photos/2821107/pexels-photo-2821107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </h1>
          <p>
            {
              order.orderItem?.product.title
              // "Women clothing | Three-dimensional Cutting | Cashmere | Orange"
            }
          </p>
          <p>
            <strong>Size:</strong>
            {order.orderItem?.size}
          </p>
        </div>
        <div>
          <Button
            onClick={() =>
              navigate(`/reviews/${/*orders.orderItem?.product.id*/ 5}/create`)
            }
          >
            Write Review
          </Button>
        </div>
      </section>

      <section className="border p-5">
        <OrderStepper
          orderStatus={
            order.currentOrder?.orderStatus
            // "PENDING"
          }
        />
      </section>

      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{order.currentOrder?.shippingAddress.name}</p>
            <Divider flexItem orientation="vertical" />
            <p>{order.currentOrder?.shippingAddress.mobile}</p>
          </div>

          <p>
            {order.currentOrder?.shippingAddress.address},
            {order.currentOrder?.shippingAddress.city},
            {order.currentOrder?.shippingAddress.state} -
            {order.currentOrder?.shippingAddress.pinCode}
          </p>
        </div>
      </div>

      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              {/* You saved{" "} */}
              <span className="text-green-500 font-medium text-xs">
                {/* € */}
                { /*orders.orderItem?.mrpPrice - orders.orderItem?.sellingPrice*/ }
                {/* .00 */}
              </span>
              {/* on thin item */}
            </p>
          </div>
          <p className="font-medium">€{order.orderItem?.sellingPrice}.00</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <PaymentsIcon />
            <p>Pay On Delivery</p>
          </div>
        </div>

        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by : </strong>
            {order.orderItem?.product.seller?.businessDetails.businessName}
          </p>
        </div>

        <div className="p-10">
          <Button
            disabled={/*orders.currentOrder?.orderStatus === "CANCELLED"*/ true}
            // onClick={handleCancelOrder}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {
              /*orders.currentOrder?.orderStatus === "CANCELLED"*/ true
                ? "order cancelled"
                : "Cancel Order"
            }
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
