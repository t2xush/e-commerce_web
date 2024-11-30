import React from 'react';
import './index.css';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThreeMpRounded } from '@mui/icons-material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
function App() {
  return (

  <ThemeProvider theme={customeTheme}>
     <div>
     <Navbar />
     {/* <Home /> */}
     {/* <Product /> */}
     <ProductDetails />
     </div>
  </ThemeProvider>    
 

  );
}

export default App;
