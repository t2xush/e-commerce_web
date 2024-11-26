import React from 'react';

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
function App() {
  return (

  <ThemeProvider theme={customeTheme}>
     <div>
      <Navbar />
    {/* <Home />  */}
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/become-seller' element={<BecomeSeller/>}/>
      <Route path='/seller/*' element={<SellerDashBoard/>}/>

     </Routes>

     </div>
   
  </ThemeProvider>    
 

  );
}

export default App;
