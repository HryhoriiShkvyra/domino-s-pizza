import React from "react";
import "./Checkout.css";
import NavbarSecond from "../Navbar/NavbarSecond";
import {
  DeliveryDiningOutlined,
  StorefrontOutlined,
  Add,
  Remove,
} from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import UseFetch from "../Hooks/useFetch";

export const Checkout = () => {
  const { data, loading, error } = UseFetch(`products?populate=*`);

  return (
    <div className="checkout">
      <NavbarSecond />
      <div className="container">
        <div className="checkout-wrapper">
          <div className="checkout-form">
            <div className="checkout-row">
              <div className="checkout-row-top-title">
                <h2>Checkout order</h2>
              </div>

              <div className="checkout-btns">
                <div className="checkout-btn-white active">
                  <div className="checkout-btn-icon">
                    <DeliveryDiningOutlined style={{ fontSize: "40px" }} />
                  </div>
                  <h3>Delivery</h3>
                </div>
                <div className="checkout-btn-white">
                  <div className="checkout-btn-icon">
                    <StorefrontOutlined style={{ fontSize: "40px" }} />
                  </div>
                  <h3>Carry out</h3>
                </div>
              </div>
            </div>
            <div className="checkout-form-main">
              <div className="checkout-row">
                <div className="checkout-row-title">
                  <h2>Contacts</h2>
                </div>

                {/* <div className="checkout-input"> */}

                <div className="checkout-input-wrapper">
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="phone"
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="mail"
                  />
                </div>
                {/* </div> */}
              </div>

              <div className="checkout-row">
                <div className="checkout-row-title">
                  <h2>Store</h2>
                </div>
                <div className="checkout-row-content">
                  <RoomIcon />
                  <div className="checkout-text-bold">
                    <h3>Kyiv</h3>
                  </div>
                </div>
                <div className="checkout-row-content">
                  <div className="checkout-text">
                    <h3>Mykhaila Drahomanova St, 44A, Kyiv, 02000</h3>
                  </div>
                </div>
              </div>

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
                  <h2>Checkout order</h2>
                </div>

                {/* <div className="checkout-input"> */}

                <div className="checkout-input-wrapper">
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    className="checkout-input"
                    type="text"
                    placeholder="name"
                  />
                </div>
                {/* </div> */}
              </div>

              <div className="checkout-payment-info">
                <div className="checkout-row-title">
                  <h2>Total</h2>
                </div>
                <div className="checkout-row-title">
                  <h2>0.00 uah</h2>
                </div>
                {/* <div className="checkout-payment-title"></div>
              <div className="checkout-payment-title"></div> */}
                <button className="checkout-payment-btn">
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
              <div
                className={
                  data?.length > 4
                    ? "checkout-items extended"
                    : "checkout-items"
                }
              >
                {error
                  ? "error"
                  : loading
                    ? "loading"
                    : data?.map((item) => (
                        <div className="checkout-item">
                          <div className="checkout-item-image-wrapper">
                            <img
                              className="checkout-item-image"
                              src={
                                process.env.REACT_APP_UPLOAD_URL + item.img.url
                              }
                              alt="#"
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
                                className="checkout-item-btn top"
                                // onClick={() => handleRemoveFromCart()}
                              >
                                <Add />
                              </button>
                            </div>

                            <div className="checkout-item-row">
                              <div className="checkout-item-column bottom">
                                <div className="checkout-item-text-wrapper">
                                  <span className="checkout-item-text-bold">
                                    <h5> {item.size_1}</h5>
                                  </span>
                                  {item.dough_1 ? (
                                    <span className="checkout-item-text-bold">
                                      <h5> {item.dough_1}</h5>
                                    </span>
                                  ) : null}
                                </div>
                                <div className="checkout-item-text-wrapper">
                                  <span className="checkout-item-text-bold">
                                    <h5> {item.price_1}</h5>
                                  </span>
                                  <span className="checkout-item-text-bold">
                                    <h5>uah</h5>
                                  </span>
                                </div>
                              </div>
                              <div className="checkout-item-btns">
                                <button
                                  className="checkout-item-btn left"
                                  // onClick={() => handleDecreaseQuantity()}
                                >
                                  <Remove />
                                </button>
                                <div className="checkout-item-count">0 </div>
                                <button
                                  className="checkout-item-btn right"
                                  // onClick={() => handleIncreaseQuantity()}
                                >
                                  <Add />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
