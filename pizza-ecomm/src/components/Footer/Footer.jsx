import {
  Facebook,
  Instagram,
  SmsOutlined,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const FirstColumn = [
    "Menu",
    "Pizzerias",
    "Franchising",
    "Information about the content of allergens and nutritional value",
    "Food safety policy",
  ];

  return (
    <div>
      <div className="disclaimer">
        * weight of just cooked product. The weight in delivery orders may
        differ due to dehydration of the product.
      </div>
      <div className="footer">
        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Domino's Pizza</h2>
          </div>
          {FirstColumn.map((item) => (
            <Link className="footer-item" key={item}>
              <h3>{item}</h3>
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Services</h2>
          </div>
          <Link className="footer-item">
            <div className="footer-icon">
              <SmsOutlined />
            </div>
            <h2>Pizza Tracker</h2>
          </Link>
        </div>

        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Contacts</h2>
          </div>
          <Link className="footer-item">info@dominos.ua</Link>
          <Link className="footer-item">Send complaint</Link>
          <Link className="footer-item">044 222 11 11</Link>
        </div>

        <div className="footer-column">
          <Link className="footer-item" to="/">
            <img
              className="logo-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png"
              alt=""
            />
            <div className="footer-column-title">
              <h2>Domino's Pizza</h2>
            </div>
          </Link>
          <h3>© 2023 Domino's Pizza Ukraine</h3>
        </div>

        <div className="footer-column">
          <div className="footer-item">
            <div className="footer-column-title">
              <h2>Site developed by fitel.io</h2>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Download application</h2>
          </div>
          <div className="footer-btns">
            <div className="footer-btn">
              <img
                src="https://www.svgrepo.com/show/473543/apple.svg"
                style={{ filter: "invert(1)" }}
                alt=""
                className="logo-icon"
              />
              <div className="footer-store">
                <h5>Download on the</h5>
                <h5>App Store</h5>
              </div>
            </div>
            <div className="footer-btn">
              <img
                src="https://www.svgrepo.com/show/475863/play-store.svg"
                alt=""
                className="logo-icon"
              />
              <div className="footer-store">
                <h5>Get it on</h5>
                <h5>Google Play</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Supported payments</h2>
          </div>
          <div className="section-payment">
            <img
              src="https://www.svgrepo.com/show/473823/visa.svg"
              style={{ filter: "invert(1)" }}
              alt=""
              className="big-logo"
            />
            <img
              src="https://www.svgrepo.com/show/362011/mastercard.svg"
              alt=""
              className="big-logo"
            />
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-column-title">
            <h2>Follow</h2>
          </div>
          <div className="footer-row">
            <Link className="footer-item">
              <Facebook />
            </Link>
            <Link className="footer-item">
              <YouTube />
            </Link>
            <Link className="footer-item">
              <Instagram />
            </Link>
            <Link className="footer-item">
              <Telegram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
