import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";
import { useGoods } from "../../store/store";

const Basket = ({ cartOpen, closeCart }) => {
  const order = useGoods((state) => state.getBasketItems)();
  const { getQuantity } = useGoods();

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />

        {order?.length === 0 ? (
          <ListItem>Корзина пуста</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem key={item.name} {...item} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }} variant="body1">
                {" "}
                Общая стоимость:{" "}
                {order.reduce((acc, item) => {
                  return acc + item.price * getQuantity(item.id);
                }, 0)}{" "}
                рублей.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
