import "./App.css";
import Nabvar from "./Component/Nav/Nabvar";
import Nav from "./Component/Nav/Nav";
import { useState } from "react";

import StoreList from "./Component/Storelist/StoreList";
import { Data } from "./Data";
import Footer from "./Component/Footer/Footer";
import OurPartners from "./Component/OurPartners/OurPartners";

function App() {
  const [clothes, setClothes] = useState(Data);
  const [textSearch, setTextSearch] = useState("");
  const [quality, setQuality] = useState(5);
  const handleAdd = ({ name, price, image, quality }) => {
    setClothes(
      clothes.concat({ id: Math.random(), name, price, image, quality })
    );
    console.log(clothes);
    console.log(name);
  };
  return (
    <div className="App">
      <Nav setTextSearch={setTextSearch} setQuality={setQuality} />
      <Nabvar handleAdd={handleAdd} />
      <h1>
        <b>Our Collection</b>
      </h1>
      <StoreList clothes={clothes} textSearch={textSearch} quality={quality} />
      <h1>our partners</h1>
      <OurPartners />
      <Footer></Footer>
    </div>
  );
}

export default App;
