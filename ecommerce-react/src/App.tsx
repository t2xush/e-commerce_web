import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThreeMpRounded } from '@mui/icons-material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashBoard from './seller/pages/SellerDashBoard/SellerDashBoard';
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import { fetchProduct } from './state/fetchProduct';
import { useAppDispatch } from './state/store';
import { fetchSellerProfile } from './state/seller/sellerSlice';

function App() {
const dispatch=useAppDispatch();


   useEffect(()=>{
  dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""))
   },[])


  return (

  <ThemeProvider theme={customeTheme}>
     <div>
      <Navbar />
    {/* <Home />  */}
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/become-seller' element={<BecomeSeller/>}/>
      <Route path='/seller/*' element={<SellerDashBoard/>}/>
      <Route path='/admin/*' element={<AdminDashboard/>}/>
      <Route path='/productDetails' element={ <ProductDetails />}/>
      <Route path='/product' element={ <Product />}/>

     </Routes>

     </div>
   
  </ThemeProvider>    
 

  );
}

export default App;
