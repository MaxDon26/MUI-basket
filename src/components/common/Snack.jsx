import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Snack = ({ isOpen, setClose }) => {
  return (
    <Snackbar open={isOpen} onClose={setClose} autoHideDuration={3000}>
      <Alert severity="success">Товар добавлен в корзину</Alert>
    </Snackbar>
  );
};

export default Snack;
