import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";
import { useGoods, useSnake } from "../../store/store";

const GoodsItem = (props) => {
  const { id, name, price, poster } = props;

  const addBasket = useGoods((state) => state.addBasket);
  // const { setOpen } = useSnake();

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          image={poster}
          component="img"
          alt={name}
          title={name}
          sx={{ height: 140 }}
        ></CardMedia>
        <CardContent>
          <Typography variant="h6" component={"h3"}>
            {name}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            onClick={() => {
              addBasket(id);
              // setOpen(true);
            }}
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
