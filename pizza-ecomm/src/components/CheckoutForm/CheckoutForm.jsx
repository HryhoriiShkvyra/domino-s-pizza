import React from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDownOutlined, LocationOn } from "@mui/icons-material";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [firstAndLastName, setFirstAndLastName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [storeLocation, setStoreLocation] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [checkoutData, setCheckoutData] = React.useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    const paymentSubmit = { firstAndLastName, phoneNumber, email };

    console.log(paymentSubmit);

    const isConfirmed = window.confirm(
      "Excuse me, but this functionality is not available yet"
    );
    if (isConfirmed) {
      setCheckoutData(paymentSubmit);
      navigate("/checkout");
    }
  };

  React.useEffect(() => {
    console.log(checkoutData);
  }, [checkoutData]);

  const productsInCart = useSelector((state) => state.cart.cartItems);

  const totalPrice = () => {
    let total = 0;
    productsInCart.forEach(
      (product) => (total += product.quantity * product.price)
    );
    return total.toFixed(2);
  };

  return (
    <form className="second-block">
      <div className="second-block-info">
        <h2 className="second-block-info-title">Contacts</h2>
        <div className="second-block-info-wrapper">
          <input
            className="second-block-info-input"
            placeholder="First Name"
            type="text"
            name="firstName"
            value={firstAndLastName}
            onChange={(e) => setFirstAndLastName(e.target.value)}
            // onChange={handleChange}
          ></input>
          <input
            className="second-block-info-input"
            placeholder="Phone"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
          <input
            className="second-block-info-input"
            placeholder="E-mail"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="second-block-info">
        <h2 className="second-block-info-title">Store</h2>
        <div className="second-block-info-store-geolocation">
          <LocationOn style={{ color: "#A8A8A8" }} />
          <span className="second-block-info-store-geolocation-city">Kyiv</span>
        </div>

        <div className="second-block-info-store-inputs">
          <input
            className="second-block-info-choose-store"
            type="text"
            placeholder="Choose Store"
          />
          <KeyboardArrowDownOutlined className="second-block-info-choose-store-icon" />
          <textarea
            className="second-block-info-comments"
            type="text"
            rows="4"
            cols="50"
            placeholder="Comments"
          />
        </div>
      </div>

      <div className="second-block-info">
        <h2 className="second-block-info-title">Date and Time</h2>
        <div className="second-block-info-wrapper">
          <input
            className="second-block-info-input"
            type="text"
            placeholder="Today"
          />
          <input
            className="second-block-info-input"
            type="text"
            placeholder="Now"
          />
        </div>
      </div>

      <div className="second-block-info">
        <h2 className="second-block-info-title">Payment</h2>
        <div className="second-block-info-wrapper">
          <input
            className="second-block-info-input"
            type="text"
            placeholder="Use coupon"
          />
          <input
            className="second-block-info-input"
            type="text"
            placeholder="Change"
          />
          <span></span>
          <input
            className="second-block-info-input"
            type="text"
            placeholder="Payment type"
          />
        </div>
      </div>
      <div className="second-block-final-price-wrapper">
        <h2 className="second-block-final-price-total">Total</h2>
        <h2 className="second-block-final-price">
          <span className="second-block-final-price-count">{totalPrice()}</span>{" "}
          uah
        </h2>
        <button
          className="second-block-final-price-btn"
          onClick={handlePayment}
        >
          Checkout
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
