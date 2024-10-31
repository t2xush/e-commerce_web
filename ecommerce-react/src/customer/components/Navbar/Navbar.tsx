import { Box, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div>
      <Box>
        <div>
          <div>
            <div>
<IconButton>
    <MenuIcon/>
</IconButton>
<h1 className="logo cursor-pointer text-lg md:text-2xl text-[#00927a]">XAG</h1>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Navbar;


//branch rename. 