import { Box, Button, IconButton, useMediaQuery,} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const theme = useTheme();
  const isLarge=useMediaQuery(theme.breakpoints.up("lg"));
  const navigate=useNavigate()

  return (
    <div>
      <Box>
        <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
          <div className='flex items-center gap-9'>
            <div className='flex items-center gap-2'>
             {!isLarge && <IconButton>
                <MenuIcon />
                </IconButton>}
              <h1 className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>
                G&X
              </h1>
              <ul className='flex items-center font-medium text-gray-800'>
               {["Women", "Men", "Home & Furniture", "Electronics"].map((item) => 
               <li className='mainCategory hover:text-primary-color
               hover:border-b-2 h-[70px] px-4 border-primary-color
               flex items-center'>
                {item}
                </li>)}
              </ul>
            </div>
          </div>
          <div className='flex gap-1 lg:gap-6 items-center'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {
             true ? <Button className='flex items-center gap-2'>
            <Avatar 
            sx={{ width: 29, height: 29 }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGJjQE6IYjUPC2nxSFbDnEqIjMKR03q97Sg&s' />
              <h1 className='font-semibold hidden lg:block'>Gao</h1>
              </Button> : <Button variant='contained'>Login</Button>
            }
            <IconButton>
              <FavoriteBorder sx={{fontSize:29}}/>
            </IconButton>
            <IconButton>
              <AddShoppingCart className='text-gray-700' sx={{fontSize:29}}/>
            </IconButton>
           {isLarge && <Button onClick={()=>navigate("/become-seller")}startIcon={
              <Storefront/>}
             variant='outlined'>Become Seller</Button>
             }
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Navbar