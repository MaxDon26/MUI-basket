import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSnake } from "../../store/store";

const Snack = () => {
  const { setOpen, open } = useSnake();
  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={3000}
    >
      <Alert severity="success">Товар добавлен в корзину</Alert>
    </Snackbar>
  );
};

export default Snack;
