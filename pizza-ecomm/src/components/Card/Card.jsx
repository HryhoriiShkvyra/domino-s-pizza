import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const [itemSize, setItemSize] = React.useState("standard");
  const [itemDough, setItemDough] = React.useState("thick");

  // React.useEffect(() => {
  //   console.log(item);
  // }, [item]);

  const pizzaSize = ["standard", "large", "extra", "xxl"];
  const pizzaDough = ["thick", "thin", "cheesy", "hot-dog"];
  const priceValue = [`${itemSize},${itemDough}`];

  const ItemWeightLogic = () => {
    if (item) {
      if (`${priceValue}` === "standard,thick") {
        return item.weight_1;
      } else if (`${priceValue}` === "standard,thin") {
        return item?.weight_2;
      } else if (`${priceValue}` === "standard,cheesy") {
        return item?.weight_3;
      } else if (`${priceValue}` === "standard,hot-dog") {
        return item?.weight_4;
      } else if (`${priceValue}` === "large,thick") {
        return item?.weight_5;
      } else if (`${priceValue}` === "large,thin") {
        return item?.weight_6;
      } else if (`${priceValue}` === "large,cheesy") {
        return item?.weight_7;
      } else if (`${priceValue}` === "large,hot-dog") {
        return item?.weight_8;
      } else if (`${priceValue}` === "extra,thick") {
        return item?.weight_9;
      } else if (`${priceValue}` === "extra,thin") {
        return item?.weight_10;
      } else if (`${priceValue}` === "extra,cheesy") {
        return item?.weight_11;
      } else if (`${priceValue}` === "extra,hot-dog") {
        return item?.weight_12;
        // } else if (`${priceValue}` === 'xxl,thick') {
        //     return(
        //         (cardData?.attributes?.price_13)
        //     )
      } else if (`${priceValue}` === "xxl,thin") {
        return item?.weight_14;
      } else if (`${priceValue}` === "xxl,cheesy") {
        return item?.weight_15;
      } else if (`${priceValue}` === "xxl,hot-dog") {
        return item?.weight_16;
      }
    }
  };

  React.useEffect(() => {
    console.log(ItemWeightLogic());
  }, [priceValue]);

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-placeholder-img">
          <div className="img">
            <div className="card-weight">
              <h4>
                <ItemWeightLogic />
              </h4>
              <h4>g</h4>
            </div>
          </div>
        </div>
        <div className="card-title">
          <h3>{item.title}</h3>
        </div>
        <div className="card-about">
          <h5>{item.about}</h5>
        </div>

        <div className="card-size">
          {pizzaSize.map((size) => (
            <div className="card-size-state-wrapper">
              <div
                onClick={(e) => setItemSize(`${size}`)}
                className={`card-size-state ${
                  itemSize === `${size}` ? "active" : ""
                }`}
              >
                <h5>{size}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="card-size">
          {pizzaDough.map((dough) => (
            <div className="card-size-state-wrapper">
              <div
                onClick={(e) => setItemDough(`${dough}`)}
                className={`card-size-state ${
                  itemDough === `${dough}` ? "active" : ""
                }`}
              >
                <h5>{dough}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="card-additional-info">
          <div className="card-price">
            <h3>{item.price}</h3>
            <h3>uah</h3>
          </div>
          <div className="card-quantity-number">
            <div className="card-quantity-btn">
              <h2>+</h2>
            </div>
            <div className="card-quantity">
              <h3>0</h3>
            </div>
            <div className="card-quantity-btn">
              <h2>-</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
