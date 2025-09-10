import React from "react";
import "./CityTable.css";
import PlaceIcon from "@mui/icons-material/Place";
import { useDispatch, useSelector } from "react-redux";
import { modalWindowActive, updateCity } from "../Redux/CartReducer";

export default function CityTable() {
  const StoreCartCity = useSelector((state) => state.cart.city);
  const StoreCartModal = useSelector((state) => state.cart.modalWindow);
  const dispatch = useDispatch();

  const bigCity = ["Kyiv", "Vinnitsa", "Lviv", "Odesa", "Zhytomyr"];

  const countrySide = [
    "Novosilky",
    "Brovary",
    "Bucha",
    "Vyshneve",
    "Hatne",
    "Hostomel",
    "Irpin",
    "Kriukivshchyna",
    "Svyatopetrivske",
    "Sofiivska Borshchagivka",
    "Chornomorsk",
  ];

  const handleCitySelect = (title) => {
    dispatch(updateCity(title));
    dispatch(modalWindowActive());
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(modalWindowActive());
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`city-table-wrapper ${StoreCartModal ? "active" : ""}`}
    >
      <div className="city-table">
        <div className="city-table-btns">
          {bigCity.map((city) => (
            <>
              {city === StoreCartCity ? (
                <div
                  className="city-btn active"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="city-btn-icon active">
                    <PlaceIcon />
                  </div>{" "}
                  <h3>{city}</h3>
                </div>
              ) : (
                <div
                  className="city-btn"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="city-btn-icon">
                    <PlaceIcon />
                  </div>{" "}
                  <h3>{city}</h3>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="city-table-blanc"></div>
        <div className="city-table-btns">
          {countrySide.map((city) => (
            <>
              {city === StoreCartCity ? (
                <div
                  className="city-btn active"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="city-btn-icon active">
                    <PlaceIcon />
                  </div>{" "}
                  <h3>{city}</h3>
                </div>
              ) : (
                <div
                  className="city-btn"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="city-btn-icon">
                    <PlaceIcon />
                  </div>{" "}
                  <h3>{city}</h3>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
