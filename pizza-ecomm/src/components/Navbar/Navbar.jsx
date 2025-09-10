import { LocationOn, Phone } from "@mui/icons-material";
// import { SideMenu } from "../SideMenu/SideMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CityTable from "../CityTable/CityTable";
import { useDispatch, useSelector } from "react-redux";
import { modalWindowActive } from "../Redux/CartReducer";

export default function Navbar() {
  const StoreCart = useSelector((state) => state.cart.city);
  const dispatch = useDispatch();

  function handleModalWindow() {
    dispatch(modalWindowActive());
  }

  return (
    <div className="navbar">
      <CityTable />

      <div className="first">
        <div className="firstIn">
          <div className="phone">
            <Phone className="icon" />
            <span className="number">
              <h3>000 000 00 00</h3>
            </span>
          </div>
          <div onClick={() => handleModalWindow()} className="geolocation">
            <LocationOn />
            <span>
              <h3>{StoreCart}</h3>
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
