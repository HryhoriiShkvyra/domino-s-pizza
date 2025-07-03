import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const DataSheet = [
  {
    title: "Pizza Margherita",
    about: "tomatoes (red), mozzarella (white), and basil (green)",
    img: "",
    alt: "pizza margherita",
  },
  {
    title: "Pizza Margherita",
    about: "tomatoes (red), mozzarella (white), and basil (green)",
    img: "",
    alt: "pizza margherita",
  },
  {
    title: "Pizza Margherita",
    about: "tomatoes (red), mozzarella (white), and basil (green)",
    img: "",
    alt: "pizza margherita",
  },
  {
    title: "Pizza Margherita",
    about: "tomatoes (red), mozzarella (white), and basil (green)",
    img: "",
    alt: "pizza margherita",
  },
  {
    title: "Pizza Margherita",
    about: "tomatoes (red), mozzarella (white), and basil (green)",
    img: "",
    alt: "pizza margherita",
  },
];

// const PizzaCardSize = () => {
//   return (
//     <div className="card-size">
//       <div className="card-block-size">
//         <button
//           onClick={() => setIsSize("standard-size")}
//           className={
//             isSize === "standard-size"
//               ? "card-size-btn-active"
//               : "card-size-btn"
//           }
//         >
//           Standard size
//         </button>
//         <div className="span"></div>
//         <button
//           onClick={() => setIsSize("large")}
//           className={
//             isSize === "large" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           Large
//         </button>
//         <div className="span"></div>
//         <button
//           onClick={() => setIsSize("extra")}
//           className={
//             isSize === "extra" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           ExtraLarge
//         </button>
//         <div className="span"></div>
//         <button
//           onClick={() => setIsSize("xxl")}
//           className={
//             isSize === "xxl" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           XXLarge
//         </button>
//       </div>
//       <div className="card-block-size-crust">
//         <button
//           onClick={() => setIsCrust("thick")}
//           className={
//             isCrust === "thick" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           Thick crust
//         </button>
//         <button
//           onClick={() => setIsCrust("thin")}
//           className={
//             isCrust === "thin" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           Thin
//         </button>
//         <button
//           onClick={() => setIsCrust("philadelphia")}
//           className={
//             isCrust === "philadelphia"
//               ? "card-size-btn-active"
//               : "card-size-btn"
//           }
//         >
//           Philadelphia
//         </button>
//         <button
//           onClick={() => setIsCrust("hot-dog")}
//           className={
//             isCrust === "hot-dog" ? "card-size-btn-active" : "card-size-btn"
//           }
//         >
//           Hot-Dog crust
//         </button>
//       </div>
//     </div>
//   );
// };

const CardList = () => {
  return (
    <div className="container">
      <div className="card-list-title">
        <h1>Best Price</h1>
      </div>
      <div className="card-list">
        {DataSheet.map((item, index) => (
          <Card item={item} key={item + "_" + index} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
