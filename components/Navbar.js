import React, { useContext } from "react";
import CartContext from "./cartContext";

const Navbar = (props) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <h3>
        <a href="/">2shop</a>
      </h3>
      <a href="/cart" className="btn btn-outline-primary my-2 my-sm-0">
        Cart {cart.length}
      </a>
    </nav>
  );
};
export default Navbar;
