import {
  Add,
  DeleteOutline,
  DeliveryDiningOutlined,
  KeyboardArrowDownOutlined,
  LocationOn,
  Remove,
  StorefrontOutlined,
} from "@mui/icons-material";
import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import { useSelector } from "react-redux";
import "./Checkout.scss";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutItem from "../../CheckoutItem/CheckoutItem";

export default function Checkout() {
  const productsInCart = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart]);

  const [activeBtn, setActiveBtn] = React.useState("delivery");

  const totalPrice = () => {
    let total = 0;
    productsInCart.forEach(
      (product) => (total += product.quantity * product.price)
    );
    return total.toFixed(2);
  };

  function productLength() {
    if (productsInCart.length === 0) {
      return 0;
    } else if (productsInCart.length === 1) {
      return 140;
    } else if (productsInCart.length === 2) {
      return 280;
    } else {
      return 420;
    }
  }

  // const stripePromise = loadStripe(
  //   "pk_test_51MboeJJnoHW1zmgYv34JTHBK2VKAApu7IyeYnFs5vxVPpb4Ch6h0V01OPRKXU56n1UhQoq5ilr13NhIEKzEMu95Q00hZ3jCIYF"
  // );
  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {
  //       products,
  //     });
  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handlePayment = () => {
    console.log("payment button works");
  };

  return (
    <div className="checkout">
      <NavbarSecondPart />
      <div className="checkout-wrapper">
        <div className="checkout-order">
          <div className="first-block">
            <h1 className="block-title">Checkout order</h1>
            <div className="first-block-btns-wrapper">
              {/* for btn which one clicked in moment need add border
                do this late, cuz right now I have not idea how to do this  */}
              <button
                className={
                  activeBtn === "delivery"
                    ? "first-block-btn-active"
                    : "first-block-btn"
                }
                onClick={() => setActiveBtn("delivery")}
              >
                <DeliveryDiningOutlined style={{ fontSize: "40px" }} />
                Delivery
              </button>
              <button
                className={
                  activeBtn === "carry"
                    ? "first-block-btn-active"
                    : "first-block-btn"
                }
                onClick={() => setActiveBtn("carry")}
              >
                <StorefrontOutlined style={{ fontSize: "40px" }} />
                Carry out
              </button>
            </div>
          </div>
          <div className="second-block">
            <div className="second-block-info">
              <h2 className="second-block-info-title">Contacts</h2>
              <div className="second-block-info-wrapper">
                <input
                  className="second-block-info-input"
                  placeholder="First Name"
                  type="text"
                ></input>
                <input
                  className="second-block-info-input"
                  placeholder="Phone"
                  type="text"
                ></input>
                <input
                  className="second-block-info-input"
                  placeholder="E-mail"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="second-block-info">
              <h2 className="second-block-info-title">Store</h2>
              <div className="second-block-info-store-geolocation">
                <LocationOn style={{ color: "#A8A8A8" }} />
                <span className="second-block-info-store-geolocation-city">
                  Kyiv
                </span>
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
                <span className="second-block-final-price-count">
                  {totalPrice()}
                </span>{" "}
                uah
              </h2>
              <button
                className="second-block-final-price-btn"
                onClick={handlePayment}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <span className="block-title">Your order</span>
          <div className="right-container">
            <div
              className="right-product-wrapper"
              style={{ height: `${productLength()}px` }}
            >
              {productsInCart.map((product, index) => (
                <CheckoutItem key={product.id + `${index}`} product={product} />
              ))}
            </div>
            <div className="right-price-wrapper">
              <span className="right-price">
                {/* {totalPrice()} */}
                <h5 className="right-price-currency">uah</h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
