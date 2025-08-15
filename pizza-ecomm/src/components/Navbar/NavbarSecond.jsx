import { Dehaze, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarSecond.css";
import { SideMenu } from "../SideMenu/SideMenu";
import { useSelector } from "react-redux";

export default function NavbarSecond({ pageState }) {
  const [sideBarActive, setSideBarActive] = React.useState(false);
  const [navbarActive, setNavbarActive] = React.useState(pageState);

  const NavbarLinks = ["pizza", "drinks", "sides", "desserts"];

  const ItemsQuantityInCart = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  function CartTotalQuantity() {
    if (ItemsQuantityInCart) {
      return (
        <>
          <div className="cart-wrapper">
            <div className="cart">
              <h4>{ItemsQuantityInCart}</h4>
              <ShoppingCart className="icon-quantity" />
            </div>
            <Link className="checkout-btn" to="/checkout">
              checkout
            </Link>
          </div>
        </>
      );
    } else
      return (
        <div className="cart-wrapper-not-allowed">
          <div className="cart-not-allowed">
            <ShoppingCart className="icon" />
          </div>
          <div className="checkout-btn" to="/checkout">
            checkout
          </div>
        </div>
      );
  }

  return (
    <>
      <div className="second">
        <div className="secondIn">
          <Link
            onClick={() => setNavbarActive("pizza")}
            className="logo"
            to="/"
          >
            <img
              className="logo-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png"
              alt=""
            />
            <span>
              <h2>Domino's Pizza</h2>
            </span>
          </Link>
          <nav className="nav">
            {NavbarLinks.map((item, index) => (
              <Link
                onClick={() => setNavbarActive(`${item}`)}
                className={
                  navbarActive === item ? "nav-link-active" : "nav-link"
                }
                to={`/${item}`}
                key={item + "_" + index}
              >
                <h3>{item}</h3>
              </Link>
            ))}
          </nav>

          <CartTotalQuantity />

          <div
            onClick={() => setSideBarActive((prev) => !prev)}
            className="bar-menu"
          >
            <Dehaze />
          </div>
        </div>
      </div>
      <div className="side-menu">
        <SideMenu sideBarActive={sideBarActive} />
      </div>
    </>
  );
}
