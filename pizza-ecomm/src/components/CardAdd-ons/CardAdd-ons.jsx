export const CardWeightLogic = ({ card, priceValue }) => {
  if (card) {
    if (`${priceValue}` === "standard,thick") {
      return card.weight_1;
    } else if (`${priceValue}` === "standard,thin") {
      return card?.weight_2;
    } else if (`${priceValue}` === "standard,cheesy") {
      return card?.weight_3;
    } else if (`${priceValue}` === "standard,hot-dog") {
      return card?.weight_4;
    } else if (`${priceValue}` === "large,thick") {
      return card?.weight_5;
    } else if (`${priceValue}` === "large,thin") {
      return card?.weight_6;
    } else if (`${priceValue}` === "large,cheesy") {
      return card?.weight_7;
    } else if (`${priceValue}` === "large,hot-dog") {
      return card?.weight_8;
    } else if (`${priceValue}` === "extra,thick") {
      return card?.weight_9;
    } else if (`${priceValue}` === "extra,thin") {
      return card?.weight_10;
    } else if (`${priceValue}` === "extra,cheesy") {
      return card?.weight_11;
    } else if (`${priceValue}` === "extra,hot-dog") {
      return card?.weight_12;
      // } else if (`${priceValue}` === 'xxl,thick') {
      //     return(
      //         (card?.attributes?.price_13)
      //     )
    } else if (`${priceValue}` === "xxl,thin") {
      return card?.weight_14;
    } else if (`${priceValue}` === "xxl,cheesy") {
      return card?.weight_15;
    } else if (`${priceValue}` === "xxl,hot-dog") {
      return card?.weight_16;
    }
  }
};

export const CardPriceLogic = ({ card, priceValue, category }) => {
  if (category) {
    if (`${priceValue}` === "standard,thick") {
      return card?.price_1;
    } else if (`${priceValue}` === "standard,thin") {
      return card?.price_2;
    } else if (`${priceValue}` === "standard,cheesy") {
      return card?.price_3;
    } else if (`${priceValue}` === "standard,hot-dog") {
      return card?.price_4;
    } else if (`${priceValue}` === "large,thick") {
      return card?.price_5;
    } else if (`${priceValue}` === "large,thin") {
      return card?.price_6;
    } else if (`${priceValue}` === "large,cheesy") {
      return card?.price_7;
    } else if (`${priceValue}` === "large,hot-dog") {
      return card?.price_8;
    } else if (`${priceValue}` === "extra,thick") {
      return card?.price_9;
    } else if (`${priceValue}` === "extra,thin") {
      return card?.price_10;
    } else if (`${priceValue}` === "extra,cheesy") {
      return card?.price_11;
    } else if (`${priceValue}` === "extra,hot-dog") {
      return card?.price_12;
      // } else if (`${priceValue}` === 'xxl,thick') {
      //     return(
      //         (card?.price_13)
      //     )
    } else if (`${priceValue}` === "xxl,thin") {
      return card?.price_14;
    } else if (`${priceValue}` === "xxl,cheesy") {
      return card?.price_15;
    } else if (`${priceValue}` === "xxl,hot-dog") {
      return card?.price_16;
    }
  }
};

export const CardSizeLogic = ({
  card,
  pizzaSize,
  pizzaDough,
  cardSize,
  cardDough,
  setCardSize,
  setCardDough,
}) => {
  if (card) {
    return (
      <>
        <div className="card-size">
          {pizzaSize.map((size) => (
            <div className="card-size-state-wrapper" key={size}>
              <div
                onClick={(e) => setCardSize(`${size}`)}
                className={`card-size-state ${
                  cardSize === `${size}` ? "active" : ""
                }`}
              >
                <h5>{size}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="card-size">
          {pizzaDough.map((dough) => (
            <div className="card-size-state-wrapper" key={dough}>
              <div
                onClick={(e) => setCardDough(`${dough}`)}
                className={`card-size-state ${
                  cardDough === `${dough}` ? "active" : ""
                }`}
              >
                <h5>{dough}</h5>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
