import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

import Product from "./Pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
