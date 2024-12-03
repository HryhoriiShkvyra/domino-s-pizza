import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import CardQuantity from "../CardQuantity/CardQuantity";
import CardSize from "../CardSize/CardSize";
import "./Card.scss";
import NewIcon from "../assets/icons/new.avif";
import AdultIcon from "../assets/icons/chili.avif";
import ChiliIcon from "../assets/icons/chili.avif";
import useFetch from "../Hooks/useFetch";

export default function Card({ item, cardType, category, productsInCart }) {
  const inCart = true;
  const [isSize, setIsSize] = React.useState("standard-size");
  const [isCrust, setIsCrust] = React.useState("thick");
  const [cardData, setCardData] = React.useState();
  const [cardCategory, setCardCategory] = React.useState();
  const priceValue = [`${isSize},${isCrust}`];

  const cardSizeBehavior = () => {};

  const { data, error, loading } = useFetch(
    `products?populate=*&[filters][id][$eq]=${item.id}`
  );

  React.useEffect(() => {
    console.log(item);
  }, []);

  const handleCardData = () => {
    if (loading) {
      // console.log("Loading...");
      return;
    }

    if (error) {
      console.error("Error:", error);
      return;
    }

    if (data && Array.isArray(data) && data.length > 0) {
      const singleItem = data[0];
      setCardData(singleItem);
      // console.log(data);
    } else {
    }
  };

  React.useEffect(() => {
    if (data !== undefined) {
      handleCardData();
    }
  }, [data, loading, error]);

  const getStoredCategories = JSON.parse(localStorage.getItem("category"));

  const weightCountATTRIBUTES = () => {
    if (getStoredCategories[0] === "pizza") {
      if (`${priceValue}` === "standard-size,thick") {
        return cardData.weight_1;
      } else if (`${priceValue}` === "standard-size,thin") {
        return cardData?.weight_2;
      } else if (`${priceValue}` === "standard-size,philadelphia") {
        return cardData?.weight_3;
      } else if (`${priceValue}` === "standard-size,hot-dog") {
        return cardData?.weight_4;
      } else if (`${priceValue}` === "large,thick") {
        return cardData?.weight_5;
      } else if (`${priceValue}` === "large,thin") {
        return cardData?.weight_6;
      } else if (`${priceValue}` === "large,philadelphia") {
        return cardData?.weight_7;
      } else if (`${priceValue}` === "large,hot-dog") {
        return cardData?.weight_8;
      } else if (`${priceValue}` === "extra,thick") {
        return cardData?.weight_9;
      } else if (`${priceValue}` === "extra,thin") {
        return cardData?.weight_10;
      } else if (`${priceValue}` === "extra,philadelphia") {
        return cardData?.weight_11;
      } else if (`${priceValue}` === "extra,hot-dog") {
        return cardData?.weight_12;
        // } else if (`${priceValue}` === 'xxl,thick') {
        //     return(
        //         (cardData?.attributes?.price_13)
        //     )
      } else if (`${priceValue}` === "xxl,thin") {
        return cardData?.weight_14;
      } else if (`${priceValue}` === "xxl,philadelphia") {
        return cardData?.weight_15;
      } else if (`${priceValue}` === "xxl,hot-dog") {
        return cardData?.weight_16;
      }
    }

    if (getStoredCategories[1] === "drinks") {
      if (`${isSize}` === "standard-size") {
        return cardData?.attributes?.weight_1;
      } else if (`${isSize}` === "large") {
        return cardData?.attributes?.weight_2;
      } else if (`${isSize}` === "extra") {
        return cardData?.attributes?.weight_3;
      }
    }

    if (getStoredCategories[2] === "sides") {
      if (`${isSize}` === "standard-size") {
        return cardData?.attributes?.weight_1;
      } else if (`${isSize}` === "double") {
        return cardData?.attributes?.weight_2;
      } else if (cardData?.attributes?.size_2 == null) {
        return cardData?.attributes?.weight_1;
      }
    }

    if (getStoredCategories[3] === "dessert") {
      if (`${isSize}` === "double") {
        return cardData?.attributes?.weight_2;
      } else {
        return cardData?.attributes?.weight_1;
      }
    }
  };

  const weightCount = () => {
    if (getStoredCategories[0] === "pizza") {
      if (`${priceValue}` === "standard-size,thick") {
        return cardData?.weight_1;
      } else if (`${priceValue}` === "standard-size,thin") {
        return cardData?.weight_2;
      } else if (`${priceValue}` === "standard-size,philadelphia") {
        return cardData?.weight_3;
      } else if (`${priceValue}` === "standard-size,hot-dog") {
        return cardData?.weight_4;
      } else if (`${priceValue}` === "large,thick") {
        return cardData?.weight_5;
      } else if (`${priceValue}` === "large,thin") {
        return cardData?.weight_6;
      } else if (`${priceValue}` === "large,philadelphia") {
        return cardData?.weight_7;
      } else if (`${priceValue}` === "large,hot-dog") {
        return cardData?.weight_8;
      } else if (`${priceValue}` === "extra,thick") {
        return cardData?.weight_9;
      } else if (`${priceValue}` === "extra,thin") {
        return cardData?.weight_10;
      } else if (`${priceValue}` === "extra,philadelphia") {
        return cardData?.weight_11;
      } else if (`${priceValue}` === "extra,hot-dog") {
        return cardData?.weight_12;
        // } else if (`${priceValue}` === "xxl,thick") {
        //   return cardData?.price_14;
      } else if (`${priceValue}` === "xxl,thin") {
        return cardData?.weight_14;
      } else if (`${priceValue}` === "xxl,philadelphia") {
        return cardData?.weight_15;
      } else if (`${priceValue}` === "xxl,hot-dog") {
        return cardData?.weight_16;
      }
    }

    if (getStoredCategories[1] === "drinks") {
      if (`${isSize}` === "standard-size") {
        return cardData?.weight_1;
      } else if (`${isSize}` === "large") {
        return cardData?.weight_2;
      } else if (`${isSize}` === "extra") {
        return cardData?.weight_3;
      }
    }

    if (getStoredCategories[2] === "sides") {
      if (`${isSize}` === "standard-size") {
        return cardData?.weight_1;
      } else if (`${isSize}` === "double") {
        return cardData?.weight_2;
      } else if (cardData?.size_2 == null) {
        return cardData?.weight_1;
      }
    }

    if (getStoredCategories[3] === "dessert") {
      if (`${isSize}` === "double") {
        return cardData?.weight_2;
      } else {
        return cardData?.weight_1;
      }
    }
  };

  const HandleCardCategoryType = () => {
    if (loading) {
      return console.log("error card category type");
    } else if (getStoredCategories[0] === "pizza") {
      return setCardCategory("pizza");
    } else if (getStoredCategories[1] === "drinks") {
      return setCardCategory("drinks");
    }
  };

  React.useEffect(() => {
    HandleCardCategoryType();
  }, []);

  const HandleCardCategory = () => {
    if (loading) {
      // return console.log(error);
    } else if (getStoredCategories[0] === "pizza") {
      return HandlePizza();
    } else if (getStoredCategories[1] === "drinks") {
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
              src={process.env.REACT_APP_UPLOAD_URL + cardData?.img?.url}
              alt=""
            />

            {(() => {
              if (cardData?.isAdult === true) {
                return (
                  <div className="type">
                    <img className="icon" src={AdultIcon} alt="AdultIcon" />
                  </div>
                );
              } else if (cardData?.isNew === true) {
                return (
                  <div className="type">
                    <img className="icon" src={NewIcon} alt="NewIcon" />
                  </div>
                );
              } else if (cardData?.isChili === true) {
                return (
                  <div className="type">
                    <img className="icon" src={ChiliIcon} alt="ChiliIcon" />
                  </div>
                );
              }
            })()}

            {cardData?.weight_1 === null ? null : (
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
              {cardData?.title}
            </Link>
            {getStoredCategories[0] === "pizza" ? (
              <div>
                <h5 className="product-description">{cardData?.description}</h5>
                <Link
                  className="ingredients"
                  // to={`/product/${cardData?.attributes?.id}`}
                >
                  replace ingredients
                </Link>
              </div>
            ) : null}
          </div>

          <CardSize
            // type={type}
            cardData={cardData}
            cardCategory={cardCategory}
            // priceValue={priceValue}
            isSize={isSize}
            setIsSize={setIsSize}
            isCrust={isCrust}
            setIsCrust={setIsCrust}
          />

          <CardQuantity
            cardData={cardData}
            priceValue={priceValue}
            cardCategory={cardCategory}
            isSize={isSize}
            isCrust={isCrust}
            // productsInCart={productsInCart}
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
                cardData?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />

            {(() => {
              if (cardData?.attributes?.isAdult === true) {
                return (
                  <div className="type">
                    <img className="icon" src={AdultIcon} alt="AdultIcon" />
                  </div>
                );
              } else if (cardData?.attributes?.isNew === true) {
                return (
                  <div className="type">
                    <img className="icon" src={NewIcon} alt="NewIcon" />
                  </div>
                );
              } else if (cardData?.attributes?.isChili === true) {
                return (
                  <div className="type">
                    <img className="icon" src={ChiliIcon} alt="ChiliIcon" />
                  </div>
                );
              }
            })()}

            {/* {(() => {
                if (cardData.attribute.weight_1 === null) {
                  return(
                    null
                  )
                } else if (cardData.attribute.weight === )
                  
              })()} */}
            {cardData?.attributes?.weight_1 === null ? null : (
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
              {cardData?.attributes?.title}
            </Link>
            {category === "pizza" ? (
              <div>
                <h5 className="product-description">
                  {cardData?.attributes?.description}
                </h5>
                <Link className="ingredients" to={`/product/${cardData.id}`}>
                  replace ingredients
                </Link>
              </div>
            ) : null}
          </div>

          <CardSize
            // type={type}
            cardData={cardData}
            category={category}
            priceValue={priceValue}
            isSize={isSize}
            setIsSize={setIsSize}
            isCrust={isCrust}
            setIsCrust={setIsCrust}
          />

          <CardQuantity
            cardData={cardData}
            priceValue={priceValue}
            category={category}
            isSize={isSize}
            isCrust={isCrust}
            productsInCart={productsInCart}
          />
        </div>
      </div>
    );
  };

  return <HandleCardCategory />;
}
