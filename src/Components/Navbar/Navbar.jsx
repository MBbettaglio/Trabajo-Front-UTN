import React from "react";
import "./Navbar.css";
import Logo from "../../assets/d10.svg";
import Home from "../../assets/home.svg";
import ShoppingCart from "../../assets/shoppingCart.svg";
import Search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
          <h2>
            Candy <br /> Tabletop
          </h2>
        </div>

        <div className="input">
          <input
            type="text"
            className="iconoPlaceholder"
            placeholder=" Buscar Mini ..."
          />
        </div>

        <nav className="icons">
            <NavLink to="/contact">Contacto</NavLink>
            <NavLink to="/">
              <img src={Home} alt="" />
            </NavLink>
            <NavLink to="/cart">
              <img src={ShoppingCart} alt="" />
            </NavLink>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;