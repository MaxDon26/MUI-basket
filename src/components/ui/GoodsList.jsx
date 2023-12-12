import { Grid } from "@mui/material";
import React from "react";

import GoodsItem from "./GoodsItem";

const GoodsList = ({ goods }) => {
  return (
    <Grid container spacing={2}>
      {goods.length > 0 ? (
        goods.map((item) => <GoodsItem key={item.id} {...item} />)
      ) : (
        <h2>Товары отсутствуют</h2>
      )}
    </Grid>
  );
};

export default GoodsList;
