import { Dashboard } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../seller/pages/Products/Products";
import AddProducts from "../seller/pages/Products/AddProducts";
import Orders from "../seller/pages/Orders/Orders";
import Profile from "../seller/pages/Account/Profile";
import Payment from "../seller/pages/Payment/Payment";
import Transaction from "../seller/pages/Payment/Transaction";

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;
