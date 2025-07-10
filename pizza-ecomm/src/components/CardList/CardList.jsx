import React from "react";
import "./CardList.css";
import Card from "../Card/Card";
import UseFetch from "../Hooks/useFetch";

const CardList = ({ category }) => {
  const { data, loading, error } = UseFetch(
    // `products?populate=*`
    // `products?filters[category][title][$eq]=${category}&populate[0]=img&populate[1]=type`
    `/products?filters[category][title][$eq]=${category}&populate=*` // `products?filters[category][title][$eq]=${category}&fields[0]=img&fields[1]=type`
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
            : data?.map((card) => <Card card={card} key={card.title} />)}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="card-list-title">
        <h1>{category}</h1>
      </div>
      <CardListState />
    </div>
  );
};

export default CardList;
