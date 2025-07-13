import React from "react";
import "./Card.css";
import {
  CardWeightLogic,
  CardPriceLogic,
  CardSizeLogic,
} from "../CardAdd-ons/CardAdd-ons";
// import { getCardSize } from "../CardStore/CardStore";

const Card = ({ card, category }) => {
  const [cardSize, setCardSize] = React.useState("standard");
  const [cardDough, setCardDough] = React.useState("thick");

  const pizzaSize = ["standard", "large", "extra", "xxl"];
  const pizzaDough = ["thick", "thin", "cheesy", "hot-dog"];
  const priceValue = [`${cardSize},${cardDough}`];

  const CardWeight = () => {
    if (card.type === "drinks") {
      return null;
    } else
      return (
        <div className="card-weight">
          <h4>
            <CardWeightLogic
              card={card}
              priceValue={priceValue}
              cardSize={cardSize}
            />
          </h4>
          <h4>g*</h4>
        </div>
      );
  };

  const CardImgLogic = () => {
    if (card.img) {
      return (
        <div className="img">
          <img
            className="card-img"
            src={process.env.REACT_APP_UPLOAD_URL + card?.img?.url}
            alt=""
          />
          <CardWeight />
        </div>
      );
    } else
      return (
        <div className="img">
          <div className="card-weight">
            <h4>
              <CardWeightLogic
                card={card}
                priceValue={priceValue}
                cardSize={cardSize}
              />
            </h4>
            <h4>g*</h4>
          </div>
        </div>
      );
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-placeholder-img">
          <CardImgLogic />
        </div>

        <div className="card-title">
          <h3>{card.title}</h3>
        </div>

        <div className="card-description">
          <h5>{card.description}</h5>
        </div>

        <CardSizeLogic
          card={card}
          setCardSize={setCardSize}
          setCardDough={setCardDough}
        />

        <div className="card-additional-info">
          <div className="card-price">
            <CardPriceLogic
              card={card}
              cardSize={cardSize}
              priceValue={priceValue}
            />
            {/* <h3>{card.price_1}</h3> */}
            <h3>uah</h3>
          </div>
          <div className="card-quantity-number">
            <div className="card-quantity-btn">
              <h2>+</h2>
            </div>
            <div className="card-quantity">
              <h3>0</h3>
            </div>
            <div className="card-quantity-btn">
              <h2>-</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
