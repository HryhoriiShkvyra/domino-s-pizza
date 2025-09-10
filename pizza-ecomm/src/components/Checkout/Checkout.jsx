import React from "react";
import "./Checkout.css";
import NavbarSecond from "../Navbar/NavbarSecond";
import {
  DeliveryDiningOutlined,
  StorefrontOutlined,
  Add,
  Remove,
} from "@mui/icons-material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import RoomIcon from "@mui/icons-material/Room";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  modalWindowActive,
} from "../Redux/CartReducer";
import { selectCartTotal } from "../Redux/CartSelector";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

export const Checkout = () => {
  const StoreCart = useSelector((state) => state.cart.cartItems);
  const StoreCartCity = useSelector((state) => state.cart.city);
  const StoreCartModalWindow = useSelector((state) => state.cart.modalWindow);

  const dispatch = useDispatch();

  const [paymentTypeBtn, setPaymentTypeBtn] = React.useState(false);
  const [paymentType, setPaymentType] = React.useState("");
  const [deliveryType, setDeliveryType] = React.useState("delivery");
  const [formData, setFormData] = React.useState({});
  const CartTotal = useSelector(selectCartTotal);

  const stripePromise = loadStripe(
    "pk_test_51MboeJJnoHW1zmgYv34JTHBK2VKAApu7IyeYnFs5vxVPpb4Ch6h0V01OPRKXU56n1UhQoq5ilr13NhIEKzEMu95Q00hZ3jCIYF"
  );

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const stripe = await stripePromise;

      console.log("Sending StoreCart:", StoreCart);

      const res = await makeRequest.post("/orders", { StoreCart });

      console.log("Backend response:", res.data);

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession,
      });
    } catch (err) {
      console.error("HandleSubmit error:", err);
    }
  };

  function DeliveryBtns() {
    return (
      <div className="checkout-btns">
        <div
          onClick={() => setDeliveryType("delivery")}
          className={`checkout-btn-white ${deliveryType === "delivery" ? "active" : ""}`}
        >
          <div className="checkout-btn-icon">
            <DeliveryDiningOutlined style={{ fontSize: "40px" }} />
          </div>
          <h3>Delivery</h3>
        </div>
        <div
          onClick={() => setDeliveryType("carry out")}
          className={`checkout-btn-white ${deliveryType === "carry out" ? "active" : ""} `}
        >
          <div className="checkout-btn-icon">
            <StorefrontOutlined style={{ fontSize: "40px" }} />
          </div>
          <h3>Carry out</h3>
        </div>
      </div>
    );
  }

  function handleCityUpdate() {
    const modalState = StoreCartModalWindow;
    console.log(modalState);
    dispatch(modalWindowActive());
  }

  function StoreOrCarryOut() {
    if (deliveryType === "delivery") {
      return (
        <div className="checkout-row">
          <div className="checkout-row-title">
            <h2>Store</h2>
          </div>
          <div
            onClick={() => handleCityUpdate()}
            className="checkout-row-content"
          >
            <RoomIcon />
            <div className="checkout-text-bold">
              <h3>{StoreCartCity}</h3>
            </div>
          </div>
          <div className="checkout-row-content">
            <div className="checkout-text">
              <h3>Mykhaila Drahomanova St, 44A, Kyiv, 02000</h3>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="checkout-row">
          <div className="checkout-row-title">
            <h2>Address</h2>
          </div>
          <div
            onClick={() => handleCityUpdate()}
            className="checkout-row-content"
          >
            <RoomIcon />
            <div className="checkout-text-bold">
              <h3>Kyiv</h3>
            </div>
          </div>
          <div className="checkout-row-content">
            <div className="checkout-text">
              <input
                className="checkout-input"
                type="text"
                placeholder="enter you address"
              />
              {/* <h3>Mykhaila Drahomanova St, 44A, Kyiv, 02000</h3> */}
            </div>
          </div>
        </div>
      );
  }

  const SetPaymentMethod = () => {
    return (
      <div className="checkout-input-wrapper">
        <input
          className="checkout-input"
          type="text"
          placeholder="use coupon"
        />
        <div className="checkout-select">
          {paymentType ? (
            <div
              onClick={() => setPaymentTypeBtn(true)}
              className="checkout-select-title"
            >
              {paymentType.newState}
            </div>
          ) : (
            <div
              onClick={() => setPaymentTypeBtn(true)}
              className="checkout-select-title"
            >
              payment type
            </div>
          )}

          <div className={`checkout-options ${paymentTypeBtn ? "active" : ""}`}>
            <div
              onClick={() => HandlePaymentType("card")}
              className="checkout-option"
            >
              card
            </div>
            <div
              onClick={() => HandlePaymentType("cash")}
              className="checkout-option"
            >
              cash
            </div>
          </div>
        </div>
        {paymentType.newState === "card" ? (
          <input
            className="checkout-input-disabled"
            disabled
            type="text"
            placeholder="change"
          />
        ) : (
          <input className="checkout-input" type="text" placeholder="change" />
        )}
      </div>
    );
  };

  function HandlePaymentType(type) {
    setPaymentTypeBtn(false);
    setPaymentType((prev) => {
      return { ...prev, newState: type };
    });
  }

  function HandleCollapsePaymentTypeBtn() {
    if (paymentTypeBtn) {
      return setPaymentTypeBtn(false);
    }
  }

  const RenderStoreCart = () => {
    if (StoreCart) {
      return (
        <div
          className={
            StoreCart?.length > 4 ? "checkout-items extended" : "checkout-items"
          }
        >
          {StoreCart.map((item, index) => (
            <div className="checkout-item" key={item.id + "_" + index}>
              <div className="checkout-item-image-wrapper">
                <img
                  className="checkout-item-image"
                  src={process.env.REACT_APP_UPLOAD_URL + item.img}
                  alt={item.title}
                />
              </div>
              <div className="checkout-item-info">
                <div className="checkout-item-row">
                  <div className="checkout-item-column top">
                    <span className="checkout-item-title">
                      <h3> {item.title}</h3>
                    </span>

                    {item.description ? (
                      <span className="checkout-item-text">
                        <h5>{item.description}</h5>
                      </span>
                    ) : null}
                  </div>
                  <button
                    onClick={(e) => RemoveItem(item)}
                    className="checkout-item-btn top"
                  >
                    <DeleteForeverRoundedIcon />
                  </button>
                </div>

                <div className="checkout-item-row">
                  <div className="checkout-item-column bottom">
                    <div className="checkout-item-text-wrapper">
                      <span className="checkout-item-text-bold">
                        <h5> {item.size}</h5>
                      </span>
                    </div>
                    <div className="checkout-item-text-wrapper">
                      <span className="checkout-item-text-bold">
                        <h5> {item.price}</h5>
                      </span>
                      <span className="checkout-item-text-bold">
                        <h5>uah</h5>
                      </span>
                    </div>
                  </div>
                  <div className="checkout-item-btns">
                    <button
                      className="checkout-item-btn left"
                      onClick={(e) => DecreaseQuantity(item)}
                    >
                      <Remove />
                    </button>
                    <div className="checkout-item-count">{item.quantity}</div>
                    <button
                      className="checkout-item-btn right"
                      onClick={(e) => IncreaseQuantity(item)}
                    >
                      <Add />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else return;
  };

  function IncreaseQuantity(item) {
    dispatch(increaseQuantity(item));
  }

  function DecreaseQuantity(item) {
    dispatch(decreaseQuantity(item));
  }

  function RemoveItem(item) {
    dispatch(removeItem(item));
  }

  const HandleInputsValues = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const isConfirmed = window.confirm(
  //   `Excuse me, but this functionality is not available yet. Press "ok" to redirect further`
  // );

  // return isConfirmed;

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form onClick={() => HandleCollapsePaymentTypeBtn()} className="checkout">
      <NavbarSecond />
      <div className="container">
        <div className="checkout-wrapper">
          <div className="checkout-form">
            <div className="checkout-row">
              <div className="checkout-row-top-title">
                <h2>Checkout order</h2>
              </div>
              <DeliveryBtns />
            </div>
            <div className="checkout-form-main">
              <div className="checkout-row">
                <div className="checkout-row-title">
                  <h2>Contacts</h2>
                </div>

                <div className="checkout-input-wrapper">
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={HandleInputsValues}
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={HandleInputsValues}
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="mail"
                    name="mail"
                    value={formData.mail}
                    onChange={HandleInputsValues}
                  />
                </div>
              </div>

              <StoreOrCarryOut />

              <div className="checkout-row">
                <div className="checkout-row-title">
                  <h2>Date and time</h2>
                </div>
                <div className="checkout-row-content">
                  <div className="checkout-text">
                    <h3>2/16/2025 4:26 PM</h3>
                  </div>
                </div>
              </div>

              <div className="checkout-row">
                <div className="checkout-row-title">
                  <h2>Payment</h2>
                </div>
                <SetPaymentMethod />
              </div>

              <div className="checkout-payment-info">
                <div className="checkout-total">
                  <div className="checkout-row-title">
                    <h2>Total</h2>
                  </div>
                  <div className="checkout-row-title">
                    <h2>{CartTotal}.00 uah</h2>
                  </div>
                </div>

                <button
                  onClick={(e) => HandleSubmit(e)}
                  className="checkout-payment-btn"
                >
                  <h2>Checkout</h2>
                </button>
              </div>
            </div>
          </div>

          <div className="checkout-info">
            <div className="checkout-row">
              <div className="checkout-row-title">
                <h2> Your order</h2>
              </div>
              <RenderStoreCart />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
