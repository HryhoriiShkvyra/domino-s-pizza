import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import CardQuantity from "../CardQuantity/CardQuantity";
import CardSize from "../CardSize/CardSize";
import "./Card.scss";
import NewIcon from "../assets/icons/new.avif";
import AdultIcon from "../assets/icons/chili.avif";
import ChiliIcon from "../assets/icons/chili.avif";

export default function Card({ item, type, category }) {
  const inCart = true;
  const [isSize, setIsSize] = React.useState("standard-size");
  const [isCrust, setIsCrust] = React.useState("thick");
  const priceValue = [isSize, isCrust];

  // console.log(item);

  const weightCount = () => {
    if (category === "pizza") {
      if (`${priceValue}` === "standard-size,thick") {
        return item.attributes.weight_1;
      } else if (`${priceValue}` === "standard-size,thin") {
        return item.attributes.weight_2;
      } else if (`${priceValue}` === "standard-size,philadelphia") {
        return item.attributes.weight_3;
      } else if (`${priceValue}` === "standard-size,hot-dog") {
        return item.attributes.weight_4;
      } else if (`${priceValue}` === "large,thick") {
        return item.attributes.weight_5;
      } else if (`${priceValue}` === "large,thin") {
        return item.attributes.weight_6;
      } else if (`${priceValue}` === "large,philadelphia") {
        return item.attributes.weight_7;
      } else if (`${priceValue}` === "large,hot-dog") {
        return item.attributes.weight_8;
      } else if (`${priceValue}` === "extra,thick") {
        return item.attributes.weight_9;
      } else if (`${priceValue}` === "extra,thin") {
        return item.attributes.weight_10;
      } else if (`${priceValue}` === "extra,philadelphia") {
        return item.attributes.weight_11;
      } else if (`${priceValue}` === "extra,hot-dog") {
        return item.attributes.weight_12;
        // } else if (`${priceValue}` === 'xxl,thick') {
        //     return(
        //         (item.attributes.price_13)
        //     )
      } else if (`${priceValue}` === "xxl,thin") {
        return item.attributes.weight_14;
      } else if (`${priceValue}` === "xxl,philadelphia") {
        return item.attributes.weight_15;
      } else if (`${priceValue}` === "xxl,hot-dog") {
        return item.attributes.weight_16;
      }
    }

    if (category === "sides") {
      if (`${isSize}` === "standard-size") {
        return item.attributes.weight_1;
      } else if (`${isSize}` === "double") {
        return item.attributes.weight_2;
      } else if (item.attributes.size_2 == null) {
        return item.attributes.weight_1;
      }
    }

    if (category === "drinks") {
      if (`${isSize}` === "standard-size") {
        return item.attributes.weight_1;
      } else if (`${isSize}` === "large") {
        return item.attributes.weight_2;
      } else if (`${isSize}` === "extra") {
        return item.attributes.weight_3;
      }
    }

    if (category === "dessert") {
      if (`${isSize}` === "double") {
        return item.attributes.weight_2;
      } else {
        return item.attributes.weight_1;
      }
    }
  };

  const HandleCardCategory = () => {
    if (category === "pizza") {
      return HandlePizza();
    } else if (category === "drinks") {
      return HandleWaterAndDrinks();
    }
  };

  const HandlePizza = () => {
    return (
      <div className="card">
        <div className="card-block">
          <div className="img-container">
            <img
              className="img-product"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />

            {(() => {
              if (item.attributes.isAdult === true) {
                return (
                  <div className="type">
                    <img className="icon" src={AdultIcon} alt="AdultIcon" />
                  </div>
                );
              } else if (item.attributes.isNew === true) {
                return (
                  <div className="type">
                    <img className="icon" src={NewIcon} alt="NewIcon" />
                  </div>
                );
              } else if (item.attributes.isChili === true) {
                return (
                  <div className="type">
                    <img className="icon" src={ChiliIcon} alt="ChiliIcon" />
                  </div>
                );
              }
            })()}

            {/* {(() => {
                if (item.attribute.weight_1 === null) {
                  return(
                    null
                  )
                } else if (item.attribute.weight === )
                  
              })()} */}
            {item.attributes.weight_1 === null ? null : (
              <div className="weight">{weightCount()} g</div>
            )}

            {inCart === true ? null : (
              <div className="cart-status">
                <ShoppingCart style={{ fontSize: "20px" }} />
              </div>
            )}
          </div>

          <div className="product-about">
            <Link className="product-title" to="/product/:id">
              {item.attributes.title}
            </Link>
            {category === "pizza" ? (
              <div>
                <h5 className="product-description">
                  {item.attributes.description}
                </h5>
                <Link className="ingredients" to={`/product/${item.id}`}>
                  replace ingredients
                </Link>
              </div>
            ) : null}
          </div>

          <CardSize
            type={type}
            item={item}
            category={category}
            priceValue={priceValue}
            isSize={isSize}
            setIsSize={setIsSize}
            isCrust={isCrust}
            setIsCrust={setIsCrust}
          />

          <CardQuantity
            item={item}
            priceValue={priceValue}
            category={category}
            isSize={isSize}
            isCrust={isCrust}
          />
        </div>
      </div>
    );
  };

  const HandleWaterAndDrinks = () => {
    return (
      <div className="card">
        <div className="card-block">
          <div className="img-container">
            <img
              className="img-product"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />

            {(() => {
              if (item.attributes.isAdult === true) {
                return (
                  <div className="type">
                    <img className="icon" src={AdultIcon} alt="AdultIcon" />
                  </div>
                );
              } else if (item.attributes.isNew === true) {
                return (
                  <div className="type">
                    <img className="icon" src={NewIcon} alt="NewIcon" />
                  </div>
                );
              } else if (item.attributes.isChili === true) {
                return (
                  <div className="type">
                    <img className="icon" src={ChiliIcon} alt="ChiliIcon" />
                  </div>
                );
              }
            })()}

            {/* {(() => {
                if (item.attribute.weight_1 === null) {
                  return(
                    null
                  )
                } else if (item.attribute.weight === )
                  
              })()} */}
            {item.attributes.weight_1 === null ? null : (
              <div className="weight">{weightCount()} g</div>
            )}

            {inCart === true ? null : (
              <div className="cart-status">
                <ShoppingCart style={{ fontSize: "20px" }} />
              </div>
            )}
          </div>

          <div className="product-about">
            <Link className="product-title" to="/product/:id">
              {item.attributes.title}
            </Link>
            {category === "pizza" ? (
              <div>
                <h5 className="product-description">
                  {item.attributes.description}
                </h5>
                <Link className="ingredients" to={`/product/${item.id}`}>
                  replace ingredients
                </Link>
              </div>
            ) : null}
          </div>

          <CardSize
            type={type}
            item={item}
            category={category}
            priceValue={priceValue}
            isSize={isSize}
            setIsSize={setIsSize}
            isCrust={isCrust}
            setIsCrust={setIsCrust}
          />

          <CardQuantity
            item={item}
            priceValue={priceValue}
            category={category}
            isSize={isSize}
            isCrust={isCrust}
          />
        </div>
      </div>
    );
  };

  return <HandleCardCategory />;
}
