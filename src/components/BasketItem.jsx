import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({ onRemove, id, quantity, price, name }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{quantity}
      </Typography>

      <IconButton onClick={() => onRemove(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
