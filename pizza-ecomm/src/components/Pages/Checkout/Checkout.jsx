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
import CheckoutFormFill from "../../CheckoutFormFill/CheckoutFormFill";

const Checkout = React.memo(() => {
  const productsInCart = useSelector((state) => state.cart.cartItems);

  const [deliveryInfo, setDeliveryInfo] = React.useState("#");
  const [activeBtn, setActiveBtn] = React.useState("delivery");

  const [checkoutFormFilled, setCheckoutFormFilled] = React.useState(false);

  React.useEffect(() => {
    console.log(deliveryInfo);
  }, [deliveryInfo]);

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

  const CheckoutPage = () => {
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

            <CheckoutFormFill />
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
          </div>
        </div>
      </div>
    );
  };

  return <CheckoutPage />;
});

export default Checkout;
