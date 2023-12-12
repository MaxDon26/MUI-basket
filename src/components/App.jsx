import { useEffect, useState } from "react";
import GoodsList from "./ui/GoodsList";
import Search from "./common/Search";
import Header from "./ui/Header";
import { Container } from "@mui/material";
import Basket from "./ui/Basket";
import Snack from "./common/Snack";
import { useGoods } from "../store/store";

const App = () => {
  const [search, setSearch] = useState("");
  const products = useGoods((state) => state.goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const loadGoods = useGoods((state) => state.loadGoods);

  useEffect(() => {
    loadGoods();
  }, []);

  const filtredProducts = search
    ? products.filter((good) =>
        good.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} />
      <Container sx={{ mt: "1rem" }}>
        <Search
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <GoodsList goods={filtredProducts} />
      </Container>
      <Basket cartOpen={isCartOpen} closeCart={() => setCartOpen(false)} />
      <Snack />
    </>
  );
};

export default App;
