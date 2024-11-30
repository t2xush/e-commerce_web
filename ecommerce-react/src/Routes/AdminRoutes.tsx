import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerTable from '../admin/pages/Sellers/SellerTable'
import Dashboard from '../seller/pages/SellerDashBoard/Dashboard'
import Coupon from '../admin/pages/AdminDashboard/Coupon/Coupon'
import AddNewCoupon from '../admin/pages/AdminDashboard/Coupon/AddNewCoupon'
import GridTable from '../admin/pages/HomePage/GridTable'
import ElectronicTable from '../admin/pages/HomePage/ElectronicTable'
import { ShopByCategory } from '../admin/pages/HomePage/ShopByCategory'
import Deal from '../admin/pages/HomePage/Deal'


const AdminRoutes = () => {
  return (
    <div>
        <Routes>
      
        <Route path="/" element={<SellerTable/>} />
        <Route path="/coupon" element={<Coupon/>} />
        <Route path="/add-coupon" element={<AddNewCoupon/>} />
        <Route path="/home-grid" element={<GridTable/>} />
        <Route path="/electronics-category" element={<ElectronicTable/>} />
        <Route path="/shop-by-category" element={<ShopByCategory/>} />

        <Route path="/deals" element={<Deal/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes