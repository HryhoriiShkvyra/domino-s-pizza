import React from "react";
import "./CheckoutItem.scss";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../Hooks/useFetch";
import {
  handleAddToCartAndIncreaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/cartReducer";
import { Add, Remove } from "@mui/icons-material";

const CheckoutItem = React.memo(({ product }) => {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeItem({ id: product.id }));
    console.log("handleRemoveFromCart " + product.id);
  }

  function handleIncreaseQuantity() {
    dispatch(handleAddToCartAndIncreaseQuantity({ id: product.id }));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity({ id: product.id }));
  }

  return (
    <div className="right-product" key={product.id}>
      <div className="right-product-image-wrapper">
        <img
          className="right-product-image"
          src={process.env.REACT_APP_UPLOAD_URL + product.img}
          alt="#"
        />
      </div>
      <div className="right-product-text">
        <span className="right-product-title">{product.title}</span>
        <button
          className="right-product-remove-btn"
          onClick={() => handleRemoveFromCart()}
        >
          <Add />
        </button>
        <span className="right-product-ingredients">{product.description}</span>
        <span className="right-product-crust">{product.size}</span>
        <span className="right-product-price">
          {product.price}.00
          <span className="right-price-currency">uah</span>
        </span>
        <span className="right-product-quantity">
          <button
            className="quantity-btn"
            onClick={() => handleDecreaseQuantity()}
            style={{ marginLeft: "-1px" }}
          >
            <Remove />
          </button>
          <div className="count">{product.quantity}</div>
          <button
            className="quantity-btn"
            onClick={() => handleIncreaseQuantity()}
            style={{ margin: "-1px" }}
          >
            <Add />
          </button>
        </span>
      </div>
    </div>
  );
});

export default CheckoutItem;
