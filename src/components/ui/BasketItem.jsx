import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { useGoods } from "../../store/store";

const BasketItem = ({ id, price, name }) => {
  const removeBasket = useGoods((state) => state.removeBasket);
  const quantity = useGoods((state) => state.getQuantity)(id);
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{quantity}
      </Typography>

      <IconButton onClick={() => removeBasket(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
