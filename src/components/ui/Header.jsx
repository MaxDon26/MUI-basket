import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useGoods } from "../../store/store";

const Header = ({ handleCart }) => {
  const { getBasketItems } = useGoods();
  const orderLen = getBasketItems().length;
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton onClick={handleCart} color="inherit">
          <Badge color="secondary" badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
