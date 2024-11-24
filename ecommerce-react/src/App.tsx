import React from 'react';

import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThreeMpRounded } from '@mui/icons-material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
function App() {
  return (

  <ThemeProvider theme={customeTheme}>
     <div>
     <Navbar />
     <Home />
     </div>
  </ThemeProvider>    
 

  );
}

export default App;
