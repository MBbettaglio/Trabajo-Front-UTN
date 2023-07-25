import React, { useContext } from "react";
import "./Navbar.css";
import Logo from "../../assets/d10.svg";
import Home from "../../assets/home.svg";
import ShoppingCart from "../../assets/shoppingCart.svg";
import { NavLink } from "react-router-dom"
import { useCustomContext } from "../../ContextManager/ContextProvider";

const Navbar = () => {
  const  {cart}  = useCustomContext(useContext)
  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);


  return (
    <>
      <header>
      <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="" />
            <h2>
              Candy <br /> Tabletop
            </h2>
          </NavLink>
        </div>

  

        <nav className="icons">
            <NavLink to="/contact">Contacto</NavLink>
            <NavLink to="/">
              <img src={Home} alt="" />
            </NavLink>
            <NavLink to="/cart">
              <img src={ShoppingCart} alt="" />
              {cartItemCount > 0 && <span className="cartItemCount">{cartItemCount}</span>}
            </NavLink>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default Navbar;