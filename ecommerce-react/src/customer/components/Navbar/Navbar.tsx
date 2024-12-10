import { Box, Button, IconButton, TextField, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import {
  AddShoppingCart,
  Category,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import CategorySheet from "./CategorySheet";
import zIndex from "@mui/material/styles/zIndex";
import { mainCategory } from "../../data/category/mainCategory";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { searchProduct } from "../../../state/customer/ProductSlice";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("women");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAppSelector((store) => store);
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchProduct(query)); 
    }
  };

  return (
    <div>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl text-primary-color"
              >
                CAF
              </h1>
              <ul className="flex items-center font-medium text-gray-800">
                {mainCategory.map((item) => (
                  <li
                    onMouseLeave={() => {
                      setShowCategorySheet(false);
                    }}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    className="mainCategory hover:text-primary-color
               hover:border-b-2 h-[70px] px-4 border-primary-color
               flex items-center"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            {/* <IconButton>
              <SearchIcon />
            </IconButton> */}
             {/* Search Bar */}
             <div className="search-container flex">
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                value={query}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger on Enter
              />
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </div>



            <div>
              {auth.isLoggedIn ? (
                <Button
                  // onClick={()=>navigate("/seller")}
                  className="flex items-center gap-2"
                  onClick={() => navigate("/account")}
                >
                  <Avatar
                    sx={{ width: 29, height: 29 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGJjQE6IYjUPC2nxSFbDnEqIjMKR03q97Sg&s"
                  />
                  <h1 className="font-semibold hidden lg:block">
                    {auth.user?.fullName}
                  </h1>
                </Button>
              ) : (
                <Button onClick={() => navigate("/login")} variant="contained">
                  Login
                </Button>
              )}
            </div>

            <div>
              {auth.isLoggedIn ? (
                <IconButton onClick={() => navigate("/wishlist")}>
                  <FavoriteBorder sx={{ fontSize: 29 }} />
                </IconButton>
              ) : (
                <IconButton onClick={() => navigate("/login")}>
                  <FavoriteBorder sx={{ fontSize: 29 }} />
                </IconButton>
              )}
            </div>

            <div>
              {auth.isLoggedIn ? (
                <IconButton onClick={() => navigate("/Cart")}>
                  <AddShoppingCart
                    className="text-gray-700"
                    sx={{ fontSize: 29 }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => navigate("/login")}>
                  <AddShoppingCart
                    className="text-gray-700"
                    sx={{ fontSize: 29 }}
                  />
                </IconButton>
              )}
            </div>

            {isLarge && (
              <Button
                onClick={() => navigate("/become-seller")}
                startIcon={<Storefront />}
                variant="outlined"
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
