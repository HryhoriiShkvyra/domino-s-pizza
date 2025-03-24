import React from "react";
import "./CheckoutFormFill.css";
import { KeyboardArrowDownOutlined, LocationOn } from "@mui/icons-material";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    city: "",
    storeLocation: "",
    comments: "",
  });

  const [postProcessingPayment, setPostProcessingPayment] =
    React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    setFormData({
      firstName: payload.firstName,
      phoneNumber: payload.phoneNumber,
      email: payload.email,
      city: payload.city,
      storeLocation: payload.storeLocation,
      comments: payload.comments,
    });

    console.log(payload);
    console.log(formData);

    // if (
    //   !formData.firstName ||
    //   !formData.phoneNumber ||
    //   !formData.email ||
    //   !formData.city ||
    //   !formData.storeLocation ||
    //   !formData.comments
    // ) {
    //   alert("Please fill in all required fields");
    //   return;
    // }

    const isConfirmed = window.confirm(
      "Excuse me, but this functionality is not available yet"
    );

    if (isConfirmed) {
      setPostProcessingPayment(true);
    }
  };

  const productsInCart = useSelector((state) => state.cart.cartItems);

  const totalPrice = () => {
    let total = 0;
    productsInCart.forEach(
      (product) => (total += product.quantity * product.price)
    );
    return total.toFixed(2);
  };

  const CheckoutFormState = () => {
    if (postProcessingPayment === false) {
      return <CheckoutFormWrapper />;
    } else {
      return <PostProcessingPaymentInfo />;
    }
  };

  const PostProcessingPaymentInfo = () => {
    return (
      <div className="postProcessingPaymentInfo">
        <h1>Payment is being processed</h1>
        <h2>Thank you for your order</h2>

        <h2>Here you can see order details</h2>

        <div className="orderInfoWrapper">
          <div className="orderFields">
            <div className="orderFiled">
              <div className="orderTitle">Contacts Info</div>
              <div className="orderText">
                <div className="orderInfo">{formData.firstName}</div>
                <div className="orderInfo">{formData.phoneNumber}</div>
                <div className="orderInfo">{formData.email}</div>
              </div>
            </div>

            <div className="orderFiled">
              <div className="orderTitle">Store</div>

              <div className="orderText">
                <div className="orderInfo">
                  {formData.city}
                  <LocationOn style={{ color: "#A8A8A8" }} />
                </div>
                <div className="orderInfo">{formData.storeLocation}</div>
                <div className="orderInfo">{formData.comments}</div>
              </div>
            </div>

            <div className="orderFiled">
              <div className="orderTitle">Date and Time</div>
              <div className="orderText">
                <div className="orderInfo">When</div>
                <div className="orderInfo">Time</div>
              </div>
            </div>
            <div className="orderFiled">
              <div className="orderTitle">Payment</div>
              <div className="orderText">
                <div className="orderInfo">Coupon</div>
                <div className="orderInfo">Charge</div>
                <div className="orderInfo">Payment Type</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CheckoutFormWrapper = () => {
    return (
      <form onSubmit={submitForm} className="second-block">
        <div className="second-block-info">
          <h2 className="second-block-info-title">Contacts</h2>
          <div className="second-block-info-wrapper">
            <input
              className="second-block-info-input"
              placeholder="First Name"
              type="text"
              name="firstName"
            ></input>
            <input
              className="second-block-info-input"
              placeholder="Phone"
              type="text"
              name="phoneNumber"
            ></input>
            <input
              className="second-block-info-input"
              placeholder="E-mail"
              type="text"
              name="email"
            ></input>
          </div>
        </div>
        <div className="second-block-info">
          <h2 className="second-block-info-title">Store</h2>
          <div className="second-block-info-store-geolocation">
            <LocationOn style={{ color: "#A8A8A8" }} />
            <span className="second-block-info-store-geolocation-city">
              <div name="city" value="Kyiv">
                Kyiv
              </div>
            </span>
          </div>

          <div className="second-block-info-store-inputs">
            Mykhaila Drahomanova St, 44A, Kyiv, 02000
            {/* <input
              className="second-block-info-choose-store"
              type="text"
              name="storeLocation"
              placeholder="Choose Store"
            />
            <KeyboardArrowDownOutlined className="second-block-info-choose-store-icon" />
            <textarea
              className="second-block-info-comments"
              type="text"
              rows="4"
              cols="50"
              placeholder="Comments"
              name="comments"
            /> */}
          </div>
        </div>

        <div className="second-block-info">
          <h2 className="second-block-info-title">Date and Time</h2>
          <div className="second-block-info-wrapper-CART">
            <div
              className="second-block-info-store-inputs"
              type="text"
              placeholder="Today"
              name="date"
            >
              2/16/2025
            </div>
            <div
              className="second-block-info-store-inputs"
              type="text"
              placeholder="Now"
              name="time"
            >
              4:26 PM
            </div>
            {/* <input
              className="second-block-info-input"
              type="text"
              placeholder="Today"
              name="date"
            />
            <input
              className="second-block-info-input"
              type="text"
              placeholder="Now"
              name="time"
            /> */}
          </div>
        </div>

        <div className="second-block-info">
          <h2 className="second-block-info-title">Payment</h2>
          <div className="second-block-info-wrapper">
            <input
              className="second-block-info-input"
              type="text"
              placeholder="Use coupon"
              name="coupon"
            />
            <input
              className="second-block-info-input"
              type="text"
              placeholder="Change"
              name="change"
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
            <span className="second-block-final-price-count">
              {totalPrice()}
            </span>{" "}
            uah
          </h2>
          <button className="second-block-final-price-btn" type="submit">
            Checkout
          </button>
        </div>
      </form>
    );
  };

  return <CheckoutFormState />;
};

export default CheckoutForm;
