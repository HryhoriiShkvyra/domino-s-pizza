import React from "react";
import { useCardStore } from "../CardStore/CardStore";

export const CardWeightLogic = ({ card, cardSize, priceValue }) => {
  console.log(cardSize);

  // if (card.type === "drinks") {
  //   if (cardSize === card.size_1) {
  //     return card.weight_1;
  //   } else if (cardSize === card.size_2) {
  //     return card?.weight_2;
  //   } else if (cardSize === card.size_3) {
  //     return card?.weight_3;
  //   } else if (cardSize === card.size_4) {
  //     return card?.weight_4;
  //   }
  // }

  // if (card.type === "drinks") {
  //   if (cardSize === card.size_1) {
  //     return card?.price_1;
  //   } else if (cardSize === card.size_2) {
  //     return card?.price_2;
  //   } else if (cardSize === card.size_3) {
  //     return card?.price_3;
  //   } else if (cardSize === card.size_4) {
  //     return card?.price_4;
  //   }
  // }

  if (card.type === "pizza") {
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

export const CardPriceLogic = ({ card, priceValue, cardSize }) => {
  // console.log(cardSize);

  if (card.type === "drinks") {
    if (cardSize === card.size_1) {
      return card?.price_1;
    } else if (cardSize === card.size_2) {
      return card?.price_2;
    } else if (cardSize === card.size_3) {
      return card?.price_3;
    } else if (cardSize === card.size_4) {
      return card?.price_4;
    }
  }

  if (card.type === "pizza") {
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

export const CardSizeLogic = ({ card, setCardSize, setCardDough }) => {
  // const setCardSize = useCardStore((state) => state.setCardSize);
  // const setPizzaDough = useCardStore((state) => state.setCardDough);
  // const getCardSize = useCardStore((state) => state.cardSize);
  // const getCardDough = useCardStore((state) => state.cardDough);
  const [cardSizeState, setCardSizeState] = React.useState("");
  const [cardDoughState, setCardDoughState] = React.useState("");
  const cardSizing = [];
  const cardDough = [];

  // React.useState(() => {
  //   setCardSize(cardSizeState);
  //   console.log(getCardSize);
  // }, [cardSizeState]);

  // React.useEffect(() => {
  //   setPizzaDough(cardDoughState);

  //   if (getCardDough) {
  //     console.log(getCardDough);
  //   }

  //   if (cardDoughState) {
  //     console.log(cardDoughState);
  //   }
  // }, [cardDoughState]);

  // React.useEffect(() => {}, [cardSizeState, pizzaDoughState]);

  React.useEffect(() => {
    setCardSize(cardSizeState);
  }, [cardSizeState]);

  React.useEffect(() => {
    setCardDough(cardDoughState);
  }, [cardDoughState]);

  React.useEffect(() => {
    if (card.size_1) {
      return setCardSizeState(card.size_1);
    }
  }, []);
  React.useEffect(() => {
    if (card.dough_1) {
      return setCardDoughState(card.dough_1);
    }
  }, []);

  React.useEffect(() => {
    if (card.type === "drinks") {
      setCardSize(cardSizeState);
    }
  }, [cardSizeState]);

  // React.useEffect(() => {
  //   setCardState(cardSizing);
  // }, [cardSizeState]);

  if (card.type === "pizza") {
    if (card.size_3) {
      cardSizing.push(card.size_1, card.size_2, card.size_3, card.size_4);
      cardDough.push(card.dough_1, card.dough_2, card.dough_3, card.dough_4);
      return (
        <>
          <div className="card-size">
            {cardSizing.map((size) => {
              return (
                <div className="card-size-state-wrapper two" key={size}>
                  <div
                    onClick={() => {
                      setCardSizeState(size);
                    }}
                    className={`card-size-state ${
                      cardSizeState === size ? "active" : ""
                    }`}
                  >
                    <h5>{size}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-size">
            {cardDough.map((dough) => {
              return (
                <div className="card-size-state-wrapper two" key={dough}>
                  <div
                    onClick={() => {
                      setCardDoughState(dough);
                    }}
                    className={`card-size-state ${
                      cardDoughState === dough ? "active" : ""
                    }`}
                  >
                    <h5>{dough}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  }

  if (card.type === "drinks") {
    if (card.size_3) {
      cardSizing.push(card.size_1, card.size_2, card.size_3);
      return (
        <>
          <div className="card-size">
            {cardSizing.map((size) => {
              return (
                <div className="card-size-state-wrapper three" key={size}>
                  <div
                    onClick={() => {
                      setCardSizeState(size);
                    }}
                    className={`card-size-state-lower ${
                      cardSizeState === size ? "active" : ""
                    }`}
                  >
                    <h5>{size}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (card.size_2) {
      cardSizing.push(card.size_1, card.size_2);

      return (
        <>
          <div className="card-size">
            {cardSizing.map((size) => {
              return (
                <div className="card-size-state-wrapper two" key={size}>
                  <div
                    onClick={() => {
                      setCardSizeState(size);
                    }}
                    className={`card-size-state-lower ${
                      cardSizeState === size ? "active" : ""
                    }`}
                  >
                    <h5>{size}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (card.size_1) {
      cardSizing.push(card.size_1);
      return (
        <>
          <div className="card-size">
            {cardSizing.map((size) => {
              return (
                <div className="card-size-state-wrapper one" key={size}>
                  <div
                    onClick={() => {
                      setCardSizeState(size);
                    }}
                    className={`card-size-state-lower ${
                      cardSizeState === size ? "active" : ""
                    }`}
                  >
                    <h5>{size}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  }
};
