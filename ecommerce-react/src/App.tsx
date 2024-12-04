import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Login, ThreeMpRounded } from '@mui/icons-material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashBoard from './seller/pages/SellerDashBoard/SellerDashBoard';
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import { fetchProduct } from './state/fetchProduct';
import { useAppDispatch, useAppSelector } from './state/store';
import { fetchSellerProfile } from './state/seller/sellerSlice';
import { useSelector } from 'react-redux';
import LoginForm from './customer/auth/LoginForm';
import Auth from './customer/auth/Auth';

function App() {
const dispatch=useAppDispatch();
const {seller}=useAppSelector(store=>store);
const navigate=useNavigate()



   useEffect(()=>{
  dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""))
   },[])

   useEffect(()=>{
   if(seller.profile){
    navigate("/seller")
   }
     },[seller.profile])




  return (

  <ThemeProvider theme={customeTheme}>
     <div>
      <Navbar />
    {/* <Home />  */}
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/become-seller' element={<BecomeSeller/>}/>
      <Route path='/seller/*' element={<SellerDashBoard/>}/>
      <Route path='/admin/*' element={<AdminDashboard/>}/>
      <Route path='/product-details/:categoryId/:name/:productId' element={ <ProductDetails />}/>
      <Route path='/products/:category' element={ <Product />}/>

     </Routes>

     </div>
   
  </ThemeProvider>    
 

  );
}

export default App;
