import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import {
  Button,
  dividerClasses,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { fetchUserCart } from "../../../state/customer/cartSlice";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store);

  const subtotal = cart.cart?.totalSellingPrice || 0;
  const discount = cart.cart?.discount || 0;
  const shipping = 0;
  const total = subtotal;
  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => <CartItemCard item={item} />)}
        </div>
        <div className="col-span-1 text-sm space-y-3">
          <div className="border rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              </div>
              <span>Apply Coupons</span>
            </div>
            {true ? (
              <div className="flex justify-between items-center">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="coupon code"
                  size="small"
                  variant="outlined"
                />
                <Button size="small">Apply</Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className="">Applied</span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className="border rounded-md">

       <PricingCard subtotal={subtotal} discount={discount} shipping={shipping} total={total}/>
            <div className="p-5">
              <Button
                onClick={() => navigate("/Checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
