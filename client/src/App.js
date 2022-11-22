import { useState, useEffect } from "react";

import "./App.css";
import Shoplist from "./components/Home/Shoplist";
import Banner from "./components/Home/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [items, setItems] = useState(null);

  const getItems = async () => {
    const url = "/shopitems";
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      {items && <Shoplist items={items} />}
      <Footer />
    </div>
  );
}

export default App;
