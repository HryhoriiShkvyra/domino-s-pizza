import { Add, Remove } from "@mui/icons-material";
import React from "react";
// import useFetch from '../Hooks/useFetch';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartReducer";
import "./CardQuantity.scss";

export default function CardQuantity({
  item,
  priceValue,
  category,
  isSize,
  isCrust,
}) {
  function price() {
    if (category === "pizza") {
      if (`${priceValue}` === "standard-size,thick") {
        return item.attributes.price_1;
      } else if (`${priceValue}` === "standard-size,thin") {
        return item.attributes.price_2;
      } else if (`${priceValue}` === "standard-size,philadelphia") {
        return item.attributes.price_3;
      } else if (`${priceValue}` === "standard-size,hot-dog") {
        return item.attributes.price_4;
      } else if (`${priceValue}` === "large,thick") {
        return item.attributes.price_5;
      } else if (`${priceValue}` === "large,thin") {
        return item.attributes.price_6;
      } else if (`${priceValue}` === "large,philadelphia") {
        return item.attributes.price_7;
      } else if (`${priceValue}` === "large,hot-dog") {
        return item.attributes.price_8;
      } else if (`${priceValue}` === "extra,thick") {
        return item.attributes.price_9;
      } else if (`${priceValue}` === "extra,thin") {
        return item.attributes.price_10;
      } else if (`${priceValue}` === "extra,philadelphia") {
        return item.attributes.price_11;
      } else if (`${priceValue}` === "extra,hot-dog") {
        return item.attributes.price_12;
        // } else if (`${priceValue}` === 'xxl,thick') {
        //     return(
        //         (item.attributes.price_13)
        //     )
      } else if (`${priceValue}` === "xxl,thin") {
        return item.attributes.price_14;
      } else if (`${priceValue}` === "xxl,philadelphia") {
        return item.attributes.price_15;
      } else if (`${priceValue}` === "xxl,hot-dog") {
        return item.attributes.price_16;
      }
    }

    if (category === "sides") {
      if (`${isSize}` === "standard-size") {
        return item.attributes.price_1;
      } else if (`${isSize}` === "double") {
        return item.attributes.price_2;
      } else if (item.attributes.size_2 == null) {
        return item.attributes.price_1;
      }
    }

    if (category === "drinks") {
      if (`${isSize}` === "standard-size") {
        return item.attributes.price_1;
      } else if (`${isSize}` === "large") {
        return item.attributes.price_2;
      } else if (`${isSize}` === "extra") {
        return item.attributes.price_3;
      }
    }

    if (category === "dessert") {
      if (`${isSize}` === "double") {
        return item.attributes.price_2;
      } else {
        return item.attributes.price_1;
      }
    }
  }

  const [quantity, setQuantity] = React.useState(0);
  const [isActiveBtn, setIsActiveBtn] = React.useState(true);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function activeBtn() {
    setIsActiveBtn(false);
  }

  // React.useEffect(() => {
  //     console.log(quantity)
  // }, [quantity])

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        price: price(),
        img: item.attributes.img.data.attributes.url,
        size: `${isSize}, ${isCrust}`,
        quantity,
      })
    );
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(
      increaseQuantity({
        id: item.id,
        size: `${isSize}, ${isCrust}`,
      })
    );
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id: item.id }));
  };

  return (
    <div className="card-quantity">
      <div className="card-price">
        {price()}
        <span>uah</span>
      </div>

      {isActiveBtn === true ? (
        <div
          className="card-add-to-cart"
          onClick={() => {
            handleAddToCart();
            activeBtn();
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

          <div className="count">{quantity}</div>
          <button
            className="quantity-btn"
            onClick={() => {
              handleIncreaseQuantity();
            }}
            style={{ margin: "-1px" }}
          >
            <Add />
          </button>
        </div>
      )}
    </div>
  );
}
