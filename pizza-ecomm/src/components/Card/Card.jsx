import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const [itemSize, setItemSize] = React.useState("standard");
  const [itemFeature, setItemFeature] = React.useState("thick");

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-placeholder-img">
          <div className="img"></div>
        </div>
        <div className="card-title">
          <h3>{item.title}</h3>
        </div>
        <div className="card-about">
          <h5>{item.about}</h5>
        </div>

        <div className="card-size">
          <div className="card-size-state-wrapper">
            <div
              onClick={(e) => setItemSize("standard")}
              className={`card-size-state ${
                itemSize === "standard" ? "active" : ""
              }`}
            >
              <h5>Standard</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            <div
              onClick={(e) => setItemSize("large")}
              className={`card-size-state ${
                itemSize === "large" ? "active" : ""
              }`}
            >
              <h5>Large</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            <div
              onClick={(e) => setItemSize("extra")}
              className={`card-size-state ${
                itemSize === "extra" ? "active" : ""
              }`}
            >
              <h5>Extra</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            <div
              onClick={(e) => setItemSize("xxl")}
              className={`card-size-state ${
                itemSize === "xxl" ? "active" : ""
              }`}
            >
              <h5>Xll</h5>
            </div>
          </div>
        </div>

        <div className="card-size">
          <div className="card-size-state-wrapper">
            {" "}
            <div
              onClick={(e) => setItemSize("standard")}
              className={`card-size-state ${
                itemSize === "standard" ? "active" : ""
              }`}
            >
              <h5>Standard</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            {" "}
            <div
              onClick={(e) => setItemSize("large")}
              className={`card-size-state ${
                itemSize === "large" ? "active" : ""
              }`}
            >
              <h5>Large</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            <div
              onClick={(e) => setItemSize("extra")}
              className={`card-size-state ${
                itemSize === "extra" ? "active" : ""
              }`}
            >
              <h5>Extra</h5>
            </div>
          </div>
          <div className="card-size-state-wrapper">
            {" "}
            <div
              onClick={(e) => setItemSize("xxl")}
              className={`card-size-state ${
                itemSize === "xxl" ? "active" : ""
              }`}
            >
              <h5>Xll</h5>
            </div>
          </div>
        </div>

        <div className="card-additional-info">
          <div className="card-price">
            <h3>0</h3>
          </div>
          <div className="card-quantity-number">
            <div className="card-quantity-btn">
              <h3>+</h3>
            </div>
            <div className="card-quantity">
              <h3>0</h3>
            </div>
            <div className="card-quantity-btn">
              <h3>-</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
