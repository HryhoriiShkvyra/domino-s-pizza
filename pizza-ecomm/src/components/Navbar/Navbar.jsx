import { LocationOn, Phone } from "@mui/icons-material";
// import { SideMenu } from "../SideMenu/SideMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="first">
        <div className="firstIn">
          <div className="phone">
            <Phone className="icon" />
            <span className="number">
              <h3>000 000 00 00</h3>
            </span>
          </div>
          <div className="geolocation">
            <LocationOn />
            <span>
              <h3>Kyiv</h3>
            </span>
          </div>
          <div></div>
          <div className="buttons">
            <button className="language">
              <h4>Eng</h4>
              <span className="icon">
                <KeyboardArrowDownIcon />
              </span>
            </button>
            <Link className="login" to="/user-container/">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
