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
import { makeRequest } from "../../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutItem from "../../CheckoutItem/CheckoutItem";
import CheckoutForm from "../../CheckoutForm/CheckoutForm";

const Checkout = React.memo(() => {
  const productsInCart = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart]);

  // const [deliveryInfo, setDeliveryInfo] = React.useState([
  //   {
  //     orderInfo: {
  //       firstName: "",
  //     },
  //   },
  // ]);

  const [deliveryInfo, setDeliveryInfo] = React.useState("#");

  React.useEffect(() => {
    console.log(deliveryInfo);
  }, [deliveryInfo]);

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

  // const productsInCart = [
  //   {
  //     title: "pizza",
  //     description: "pizza with tomato, mozzarella and pesto sauce",
  //   },
  // ];

  // const stripePromise = loadStripe(
  //   "pk_test_51MboeJJnoHW1zmgYv34JTHBK2VKAApu7IyeYnFs5vxVPpb4Ch6h0V01OPRKXU56n1UhQoq5ilr13NhIEKzEMu95Q00hZ3jCIYF"
  // );
  const handlePayment = async (ctx) => {
    alert(" Sorry but this function does not available in your country ");
    // try {
    //   const stripe = await stripePromise;
    //   const res = await makeRequest.post("/orders", {
    //     productsInCart,
    //   });
    //   await stripe.redirectToCheckout({
    //     sessionId: res.data.stripeSession.id,
    //   });
    //   console.error("Incoming order request:", ctx.request.body);
    // } catch (error) {
    //   console.log(error);
    //   console.error("Full error details:", error);
    //   console.error("Error name:", error.name);
    //   console.error("Error message:", error.message);
    //   console.error("Error stack:", error.stack);

    //   ctx.status = 500;
    //   ctx.body = {
    //     error: "Payment processing failed",
    //     details: error.message,
    //   };
    // }
  };

  // const stripePromise = loadStripe(
  //   "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  // );
  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {
  //       productsInCart,
  //     });
  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handlePayment = () => {
  //   console.log("payment button works");
  // };

  const search = (event, formData) => {
    alert("here");
    event.preventDefault();
    // const query = formData.get("query");
    // alert(`You searched for "${query}"`);
  };

  const CheckoutWrapper = () => {
    return (
      <div className="checkout">
        <NavbarSecondPart />
        <div className="checkout-wrapper">
          <div className="checkout-order">
            <div className="first-block">
              <h1 className="block-title">Checkout order</h1>
              <div className="first-block-btns-wrapper">
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
            {/* <form onSubmit={search} >
              <input name="query" type="text" />
              <button type="submit">Search</button>
            </form> */}
            <CheckoutForm />
            {/* <form className="second-block">
              <div className="second-block-info">
                <h2 className="second-block-info-title">Contacts</h2>
                <div className="second-block-info-wrapper">
                  <input
                    className="second-block-info-input"
                    placeholder="First Name"
                    type="text"
                    // value={deliveryInfo}
                    // onChange={(e) => setDeliveryInfo(e.target.value)}
                  ></input>
                  <button type="submit"></button>
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
            </form> */}
          </div>
          <div className="right">
            <div className="order-info">
              <span className="block-title">Your order</span>
              <div className="right-container">
                <div
                  className="right-product-wrapper"
                  style={{ height: `${productLength()}px` }}
                >
                  {productsInCart.map((product, index) => (
                    <CheckoutItem
                      key={product.id + `${index}`}
                      product={product}
                    />
                  ))}
                </div>
                <div className="right-price-wrapper">
                  <span className="right-price">
                    {totalPrice()}
                    <h5 className="right-price-currency">uah</h5>
                  </span>
                </div>
              </div>
            </div>
            <div className="delivery-info">
              <div className="block-title">Delivery info</div>

              <div className="delivery-info-cols">
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">First Name: </div>
                  <div className="delivery-info-col-text">Hryhorii</div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Phone: </div>
                  <div className="delivery-info-col-text">0006661877</div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">E-Mail: </div>
                  <div className="delivery-info-col-text">
                    hryhorii@gmail.com
                  </div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Store: </div>
                  <div className="delivery-info-col-text">
                    {" "}
                    city: Kyiv, street: Verhovnoyi radu
                  </div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">comments: </div>
                  <div className="delivery-info-col-text">no comments</div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Date and Time: </div>
                  <div className="delivery-info-col-text">
                    12/15/2004, 8:29 pm
                  </div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Payment: </div>
                  <div className="delivery-info-col-text">card</div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Your order: </div>
                  <div className="delivery-info-col-text">
                    {" "}
                    <div
                      className="right-product-wrapper"
                      style={{ height: `${productLength()}px` }}
                    >
                      {productsInCart.map((product, index) => (
                        <CheckoutItem
                          key={product.id + `${index}`}
                          product={product}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="delivery-info-col">
                  <div className="delivery-info-col-title">Total</div>
                  <div className="delivery-info-col-text">
                    {" "}
                    <div className="right-price-wrapper">
                      <span className="right-price">
                        {totalPrice()}
                        <h5 className="right-price-currency">uah</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <CheckoutWrapper />;
});

export default Checkout;
