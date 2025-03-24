import {
  Facebook,
  Instagram,
  SmsOutlined,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div>
      <span className="disclaimer">
        * weight of just cooked product. The weight in delivery orders may
        differ due to dehydration of the product.
      </span>
      <div className="footer">
        <div className="footer-first">
          <div className="section">
            <h2>Domino's Pizza</h2>
            <Link className="link">Menu</Link>
            <Link className="link">Pizzerias</Link>
            <Link className="link">Franchising</Link>
            <Link className="link">
              Information about the content of allergens and nutritional value
            </Link>
            <Link className="link">Food safety policy</Link>
          </div>
          <div className="section">
            <h2>Services</h2>
            <Link className="link-tracker">
              <div>
                <SmsOutlined className="icon" /> Pizza Tracker
              </div>
            </Link>
          </div>
          <div className="section">
            <h2>Contacts</h2>
            <Link className="link">info@dominos.ua</Link>
            <Link className="link">Send complaint</Link>
            <Link className="link">044 222 11 11</Link>
          </div>
          <div className="section">
            <h2>
              <Link className="logo" to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png"
                  alt=""
                />
                <div className="logo-text">Domino's Pizza</div>
              </Link>
              <span>© 2023 Domino's Pizza Ukraine</span>
            </h2>
          </div>
        </div>

        <div className="footer-second">
          <div className="section">
            <div className="link-creator">site developed by fitel.io</div>
          </div>
          <div className="section-grid">
            <span>download application</span>
            <div className="section-app">
              <div className="application">
                <img
                  src="https://www.svgrepo.com/show/473543/apple.svg"
                  style={{ filter: "invert(1)" }}
                  alt=""
                  className="icon"
                />
                <div>
                  <span className="application-place">Download on the</span>
                  <span className="application-direction">App Store</span>
                </div>
              </div>
              <div className="application">
                <img
                  src="https://www.svgrepo.com/show/475863/play-store.svg"
                  alt=""
                  className="icon"
                />
                <div>
                  <span
                    className="application-place"
                    style={{ textTransform: "uppercase" }}
                  >
                    Get it on
                  </span>
                  <span className="application-direction">Google Play</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-grid">
            <span>supported payments</span>
            <div className="section-payment">
              <img
                src="https://www.svgrepo.com/show/473823/visa.svg"
                style={{ filter: "invert(1)" }}
                alt=""
                className="icon"
              />
              <img
                src="https://www.svgrepo.com/show/362011/mastercard.svg"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="section-grid">
            <span>follow</span>
            <div className="section-follow">
              <span>
                <Facebook />
              </span>
              <span>
                <YouTube />
              </span>
              <span>
                <Instagram />
              </span>
              <span>
                <Telegram />
                {/* style={{
                  width: '25px',
                  height: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: '1px',
                  fontSize: '10px',
                  color: 'black',
                  background: '#8d8d8d',
                  borderRadius: '20px',
                  transition: 'all .4s ease'
                }} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
