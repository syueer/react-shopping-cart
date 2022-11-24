import { useState, useEffect } from "react";

import "./App.css";
import Shoplist from "./components/Home/Shoplist";
import Banner from "./components/Home/Banner";
import Footer from "./components/Home/Footer";
import Card from "./components/UI/Card";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [items, setItems] = useState(null);
  const [cartIsShown, setCartIsShown] = useState(false);

  const getItems = async () => {
    const url = "/shopitems";
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Banner onShowCart={showCartHandler} />
      <Card>{items && <Shoplist items={items} />}</Card>
      <Footer />
    </CartProvider>
  );
}

export default App;
