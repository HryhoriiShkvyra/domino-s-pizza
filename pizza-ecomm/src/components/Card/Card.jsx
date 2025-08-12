import React from "react";
import "./Card.css";
import {
  CardWeightLogic,
  CardPriceLogic,
  CardSizeLogic,
} from "../CardAdd-ons/CardAdd-ons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  handleAddToCartAndIncreaseQuantity,
  increaseQuantity,
} from "../Redux/CartReducer";

const Card = ({ card, category }) => {
  const [cardSize, setCardSize] = React.useState(card?.size_1);
  const [cardDough, setCardDough] = React.useState(card?.dough_1);

  const priceValue = `${cardSize},${cardDough}`;

  const CurrentPrice = CardPriceLogic({ card, priceValue, cardSize });
  const CurrentSize = CardSizeLogic({ card, setCardSize, setCardDough });

  const CartState = useSelector((state) => state.cart.cartItems);
  const CartAmount = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();

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

  const QuantityLogic = () => {
    const findCard = CartState.find(
      (item) => item.id === card.id && item.size === priceValue
    );

    if (findCard) {
      return (
        <div className="card-quantity-number">
          <div
            onClick={(e) => HandleIncreaseQuantity(e)}
            className="card-quantity-btn"
          >
            <h2>+</h2>
          </div>
          <div className="card-quantity">
            <h3>{findCard.quantity}</h3>
          </div>
          <div
            onClick={(e) => HandleDecreaseQuantity(e)}
            className="card-quantity-btn"
          >
            <h2>-</h2>
          </div>
        </div>
      );
    } else
      return (
        <div
          onClick={(e) => HandleAddingToCart()}
          className="card-quantity-zero"
        >
          <div className="card-quantity-icon">
            <ShoppingCartIcon />
          </div>
          <h2>Add</h2>
        </div>
      );
  };

  const HandleAddingToCart = (e) => {
    const newItem = {
      id: card.id,
      title: card.title,
      img: card.img.url,
      description: card.description,
      size: priceValue,
      // dough: cardDough,
      price: CurrentPrice,
      quantity: 1,
    };

    dispatch(handleAddToCartAndIncreaseQuantity(newItem));
  };

  const HandleIncreaseQuantity = (e) => {
    const item = {
      id: card.id,
      size: priceValue,
    };

    dispatch(increaseQuantity(item));
  };

  const HandleDecreaseQuantity = (e) => {
    e.preventDefault();

    const item = {
      id: card.id,
      size: priceValue,
    };

    dispatch(decreaseQuantity(item));
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

        {CurrentSize}

        <div className="card-additional-info">
          <div className="card-price">
            {CurrentPrice}
            <h3>uah</h3>
          </div>
          <QuantityLogic />
        </div>
      </div>
    </div>
  );
};

export default Card;
