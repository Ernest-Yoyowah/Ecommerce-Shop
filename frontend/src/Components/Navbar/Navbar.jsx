import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu === "shop" ? <hr /> : <></>}
          <hr />
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          Men
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="login-cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
