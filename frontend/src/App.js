import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory />} />
          <Route path="/women" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
