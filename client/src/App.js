import "./App.css";
import Shoplist from "./components/Home/Shoplist";
import Banner from "./components/Home/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Shoplist />
      <Footer />
    </div>
  );
}

export default App;
