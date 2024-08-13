import React from "react";
// import useFetch from '../Hooks/useFetch';
import "./CardSize.scss";

export default function CardSize({
  item,
  type,
  category,
  isCrust,
  setIsCrust,
  isSize,
  setIsSize,
}) {
  console.log(item);

  const CardSizeWrapper = () => {
    if (category === "pizza") {
      return PizzaCardSize();
    } else if (category === "drinks") {
      return DrinksCardSize();
    } else if (category === "sides") {
      return SidesCardSize();
    } else if (category === "desserts") {
      return DessertsCardSize();
    }
  };

  const PizzaCardSize = () => {
    return (
      <div className="card-size">
        <div className="card-block-size">
          <button
            onClick={() => setIsSize("standard-size")}
            className={
              isSize === "standard-size"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            Standard size
          </button>
          <div className="span"></div>
          <button
            onClick={() => setIsSize("large")}
            className={
              isSize === "large" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            Large
          </button>
          <div className="span"></div>
          <button
            onClick={() => setIsSize("extra")}
            className={
              isSize === "extra" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            ExtraLarge
          </button>
          <div className="span"></div>
          <button
            onClick={() => setIsSize("xxl")}
            className={
              isSize === "xxl" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            XXLarge
          </button>
        </div>
        <div className="card-block-size-crust">
          <button
            onClick={() => setIsCrust("thick")}
            className={
              isCrust === "thick" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            Thick crust
          </button>
          <button
            onClick={() => setIsCrust("thin")}
            className={
              isCrust === "thin" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            Thin
          </button>
          <button
            onClick={() => setIsCrust("philadelphia")}
            className={
              isCrust === "philadelphia"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            Philadelphia
          </button>
          <button
            onClick={() => setIsCrust("hot-dog")}
            className={
              isCrust === "hot-dog" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            Hot-Dog crust
          </button>
        </div>
      </div>
    );
  };

  const DrinksCardSize = () => {
    if (item.attributes.size_3) {
      return (
        <div className="card-else-btn">
          <button
            onClick={() => setIsSize("standard-size")}
            className={
              isSize === "standard-size"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            {item.attributes.size_1}
          </button>

          <button
            onClick={() => setIsSize("large")}
            className={
              isSize === "large" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            {item.attributes.size_2}
          </button>

          <button
            onClick={() => setIsSize("extra")}
            className={
              isSize === "extra" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            {item.attributes.size_3}
          </button>
        </div>
      );
    } else if (item.attributes.size_2) {
      return (
        <div className="card-else-btn">
          <button
            onClick={() => setIsSize("standard-size")}
            className={
              isSize === "standard-size"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            {item.attributes.size_1}
          </button>

          <button
            onClick={() => setIsSize("large")}
            className={
              isSize === "large" ? "card-size-btn-active" : "card-size-btn"
            }
          >
            {item.attributes.size_2}
          </button>
        </div>
      );
    } else if (item.attributes.size_1) {
      return (
        <div className="card-else-btn">
          <button
            onClick={() => setIsSize("standard-size")}
            className={
              isSize === "standard-size"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            {item.attributes.size_1}
          </button>
        </div>
      );
    } else
      return (
        <div className="card-else-btn">
          <button
            onClick={() => setIsSize("standard-size")}
            className={
              isSize === "standard-size"
                ? "card-size-btn-active"
                : "card-size-btn"
            }
          >
            something wrong
          </button>
        </div>
      );
  };

  const SidesCardSize = () => {
    return (
      <div className="card-else-btn">
        <button
          onClick={() => setIsSize("standard-size")}
          className={
            isSize === "standard-size"
              ? "card-size-btn-active"
              : "card-size-btn"
          }
        >
          {item.attributes.size_1}
        </button>

        <button
          onClick={() => setIsSize("double")}
          className={
            isSize === "double" ? "card-size-btn-active" : "card-size-btn"
          }
        >
          {item.attributes.size_2}
        </button>
      </div>
    );
    // } else {
    //   return (
    //     <div className="card-else-btn">
    //       <button className="card-size-btn-active">
    //         {item.attributes.size_1}
    //       </button>
    //     </div>
    //   );
    // }
  };

  const DessertsCardSize = () => {
    return (
      <div className="card-else-btn">
        <button
          onClick={() => setIsSize("standard-size")}
          className={
            isSize === "standard-size"
              ? "card-size-btn-active"
              : "card-size-btn"
          }
        >
          {item.attributes.size_1}
        </button>
        <button
          onClick={() => setIsSize("double")}
          className={
            isSize === "double" ? "card-size-btn-active" : "card-size-btn"
          }
        >
          {item.attributes.size_2}
        </button>
      </div>
    );
    // } else {
    //   return (
    //     <div className="card-else-btn">
    //       <button
    //         onClick={() => setIsSize("standard-size")}
    //         className={
    //           isSize === "standard-size"
    //             ? "card-size-btn-active"
    //             : "card-size-btn"
    //         }
    //       >
    //         {item.attributes.size_1}
    //       </button>
    //     </div>
    //   );
    // }
  };

  return <CardSizeWrapper />;
}
