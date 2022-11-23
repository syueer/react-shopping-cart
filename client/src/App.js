import { useState, useEffect, Fragment } from "react";

import "./App.css";
import Shoplist from "./components/Home/Shoplist";
import Banner from "./components/Home/Banner";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
import Card from "./components/UI/Card";

function App() {
  const [items, setItems] = useState(null);

  const getItems = async () => {
    const url = "/shopitems";
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Card>{items && <Shoplist items={items} />}</Card>
      <Footer />
    </Fragment>
  );
}

export default App;
