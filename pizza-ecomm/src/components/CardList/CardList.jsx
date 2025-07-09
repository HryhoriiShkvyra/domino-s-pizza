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

const CardList = ({ pageState, category }) => {
  const { data, loading, error } = UseFetch(
    `products?populate=*`
    // `products?filters[category][title][$eq]=${category}&populate[0]=img&populate[1]=type`
    // `/products?filters[category][title][$eq]=${category}&populate=*` // `products?filters[category][title][$eq]=${category}&fields[0]=img&fields[1]=type`
  );

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const CardListState = () => {
    return (
      <div className="card-list">
        {error
          ? "error"
          : loading
            ? "loading"
            : data?.map((card) => (
                <Card card={card} key={card.title} category={category} />
              ))}
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
