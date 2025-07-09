import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import UseFetch from "../Hooks/useFetch";

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

const CardList = ({ pageState, category }) => {
  const { data, loading, error } = UseFetch(
    // `products?populate=*`
    `products?populate=*[filters][categories][title][$eq]="tea"&populate[0]-fields=img`

    // `products?populate=*[filters][categories][title][$eq]=${category}&populate[0]-fields=img`

    // `products?populate=*&`
    // `types?populate=*&[filters][sub_title][$eq]=new`
  );

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const CardListState = () => {
    // if (pageState) {
    //   return console.log(pageState);
    // }

    return (
      <div className="card-list">
        {error
          ? "error"
          : loading
            ? "loading"
            : data?.map((card) => <Card card={card} key={card.title} />)}
      </div>
    );

    // if (pageState === "pizza") {
    //   return (
    //     <div className="card-list">
    //       {DataSheet.slice(0, 5).map((item, index) => (
    //         <Card item={item} key={item + "_" + index} />
    //       ))}
    //     </div>
    //   );
    // } else if (pageState === "drinks") {
    //   return (
    //     <div className="card-list">
    //       {DataSheet.slice(0, 4).map((item, index) => (
    //         <Card item={item} key={item + "_" + index} />
    //       ))}
    //     </div>
    //   );
    // } else if (pageState === "sides") {
    //   return (
    //     <div className="card-list">
    //       {DataSheet.slice(0, 3).map((item, index) => (
    //         <Card item={item} key={item + "_" + index} />
    //       ))}
    //     </div>
    //   );
    // } else if (pageState === "desserts") {
    //   return (
    //     <div className="card-list">
    //       {DataSheet.slice(0, 2).map((item, index) => (
    //         <Card item={item} key={item + "_" + index} />
    //       ))}
    //     </div>
    //   );
    // } else return console.log("not ok");
  };

  return (
    <div className="container">
      <div className="card-list-title">
        <h1>{category}</h1>
      </div>
      {/* <div className="card-list">
        {DataSheet.map((item, index) => (
          <Card item={item} key={item + "_" + index} />
        ))}
      </div> */}
      <CardListState />
    </div>
  );
};

export default CardList;
