import { Add, Remove } from "@mui/icons-material";
import React from "react";
// import useFetch from '../Hooks/useFetch';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  handleAddToCartAndIncreaseQuantity,
  removeItem,
  decreaseQuantity,
} from "../redux/cartReducer";
import "./CardQuantity.scss";

export default function CardQuantity({
  cardData,
  priceValue,
  category,
  isSize,
  isCrust,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [cardQuantityNumber, setCardQuantityNumber] = React.useState();
  const [isActiveBtn, setIsActiveBtn] = React.useState(true);
  const [cardPrice, setCardPrice] = React.useState();
  const cartState = useSelector((state) => state.cart.cartItems);
  const cardSize = `${isSize}, ${isCrust}`;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (cardData) {
      setIsLoading((prevState) => true);
    } else console.log("error");
  }, [cartState]);

  const CardQuantityWrapper = () => {
    React.useEffect(() => {
      CardIdMatch();
    }, []);
    const CardIdMatch = () => {
      const matchingCardIdAndSize = cartState.find(
        (card) => card.id === cardData.id && card.size === cardSize
      );

      return matchingCardIdAndSize ? matchingCardIdAndSize.quantity : 0;
    };

    console.log(CardIdMatch());

    const getStoredCategories = JSON.parse(localStorage.getItem("category"));

    const findPizzaCategory = getStoredCategories.find(
      (category) => category === "pizza"
    );

    const findSidesCategory = getStoredCategories.find(
      (category) => category === "sides"
    );

    const findDrinksCategory = getStoredCategories.find(
      (category) => category === "drinks"
    );

    const findDessertCategory = getStoredCategories.find(
      (category) => category === "dessert"
    );

    function price() {
      if (findPizzaCategory === "pizza") {
        if (`${priceValue}` === "standard-size,thick") {
          return cardData?.price_1;
        } else if (`${priceValue}` === "standard-size,thin") {
          return cardData?.price_2;
        } else if (`${priceValue}` === "standard-size,philadelphia") {
          return cardData?.price_3;
        } else if (`${priceValue}` === "standard-size,hot-dog") {
          return cardData?.price_4;
        } else if (`${priceValue}` === "large,thick") {
          return cardData?.price_5;
        } else if (`${priceValue}` === "large,thin") {
          return cardData?.price_6;
        } else if (`${priceValue}` === "large,philadelphia") {
          return cardData?.price_7;
        } else if (`${priceValue}` === "large,hot-dog") {
          return cardData?.price_8;
        } else if (`${priceValue}` === "extra,thick") {
          return cardData?.price_9;
        } else if (`${priceValue}` === "extra,thin") {
          return cardData?.price_10;
        } else if (`${priceValue}` === "extra,philadelphia") {
          return cardData?.price_11;
        } else if (`${priceValue}` === "extra,hot-dog") {
          return cardData?.price_12;
          // } else if (`${priceValue}` === 'xxl,thick') {
          //     return(
          //         (cardData?.price_13)
          //     )
        } else if (`${priceValue}` === "xxl,thin") {
          return cardData?.price_14;
        } else if (`${priceValue}` === "xxl,philadelphia") {
          return cardData?.price_15;
        } else if (`${priceValue}` === "xxl,hot-dog") {
          return cardData?.price_16;
        }
      }

      if (findSidesCategory === "sides") {
        if (`${isSize}` === "standard-size") {
          return cardData?.price_1;
        } else if (`${isSize}` === "double") {
          return cardData?.price_2;
        } else if (cardData?.size_2 == null) {
          return cardData?.price_1;
        }
      }

      if (findDrinksCategory === "drinks") {
        if (`${isSize}` === "standard-size") {
          return cardData?.price_1;
        } else if (`${isSize}` === "large") {
          return cardData?.price_2;
        } else if (`${isSize}` === "extra") {
          return cardData?.price_3;
        }
      }

      if (findDessertCategory === "dessert") {
        if (`${isSize}` === "double") {
          return cardData?.price_2;
        } else {
          return cardData?.price_1;
        }
      }
    }

    function activeBtn() {
      setIsActiveBtn((prev) => !prev === prev);
    }

    // const handleAddToCart = () => {
    //   setQuantity((prev) => prev + 1);
    //   dispatch(
    //     handleAddToCartAndIncreaseQuantity({
    //       id: cardData?.id,
    //       title: cardData?.title,
    //       description: cardData?.description,
    //       price: price(),
    //       img: cardData?.img.url,
    //       size: cardSize,
    //       quantity: 1,
    //     })
    //   );
    // };

    const handleAddToCart = () => {
      setQuantity((prev) => prev + 1);
      dispatch(
        handleAddToCartAndIncreaseQuantity({
          id: cardData?.id,
          title: cardData?.title,
          description: cardData?.description,
          price: price(),
          img: cardData?.img.url,
          size: cardSize,
          quantity: 1,
        })
      );
    };

    const handleDecreaseQuantity = () => {
      dispatch(decreaseQuantity({ id: cardData.id }));
      console.log(cardData.id);
    };

    return (
      <div className="card-quantity">
        <div className="card-price">
          {price()}
          <span>uah</span>
        </div>

        {CardIdMatch() <= 0 ? (
          <div
            className="card-add-to-cart"
            onClick={() => {
              handleAddToCart();
              // activeBtn();
            }}
          >
            To cart
          </div>
        ) : (
          <div className="increase-decrease-quantity">
            <button
              className="quantity-btn"
              onClick={() => {
                handleDecreaseQuantity();
              }}
              style={{ marginLeft: "-1px" }}
            >
              <Remove className="quantity" />
            </button>

            <div className="count">{CardIdMatch()}</div>
            <button
              className="quantity-btn"
              onClick={() => {
                handleAddToCart();
              }}
              style={{ margin: "-1px" }}
            >
              <Add />
            </button>
          </div>
        )}
      </div>
    );
  };

  return <>{isLoading && <CardQuantityWrapper />}</>;
}
