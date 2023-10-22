import { useState } from "react";
import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/men">Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">
          <img src={cart_icon} alt="login-cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
