import { Info } from "@mui/icons-material";
import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";
import useFetch from "../Hooks/useFetch";
import { useSelector } from "react-redux";
// import { useSelector } from 'react-redux';

export default function CardList({ type, category, isSorting }) {
  const [requestData, setRequestData] = React.useState();
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][type][$eq]=${type}`
    // `products?populate=*[filters][sub_title][$eq]=${type}`
    // `types?populate=*&[filters][sub_title][$eq]=new`
  );

  // console.log(data);

  const productsInCart = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    // console.log(`products?populate=*&[filters][type][$eq]=${type}`);
    // if (loading) {
    //   return console.log("error");
    // } else return console.log(data);
  }, [data]);

  const pizzaTitleArray = [
    { title: "Sweet Pizza" },
    { title: "Pizza with pear and blue cheese" },
    { title: "Pizza with turkey" },
    { title: "Pizza Diablo" },
    { title: "Pizza Beef and Crispy" },
    { title: "Pizza with dried tomatoes and chicken" },
  ];

  // React.useEffect(() => {
  //   const titleOrderMap = pizzaTitleArray.reduce((acc, item, index) => {
  //     acc[item.title] = index;
  //     return acc;
  //   }, {});

  //   const reorderedSecondArray = data.sort((a, b) => {
  //     return titleOrderMap[a.title] - titleOrderMap[b.title];
  //   });

  //   console.log(reorderedSecondArray);
  // }, [data]);

  // const sortedItems = [...data].sort

  // React.useEffect(() => {
  //   if (data) {
  //     data.forEach((product) => {
  //       setRequestData((prev) => [...prev, product]);
  //     });
  //   }
  //   console.log(requestData);
  // }, []);

  return (
    <div className="card-list">
      <div className="container">
        {/* {type === "Dessert" ? (
          <div className="list-title-hidden"></div>
        ) : ( */}
        <div className="list-title">
          {type}
          <div className="list-icon-wrapper">
            <div className="list-about">
              Here are the most affordable pizzas
            </div>
            <Info className="icon" />
          </div>
        </div>
        {/* )} */}
        <div className="card-list-block">
          {error
            ? "something went wrong"
            : loading
              ? "loading"
              : isSorting === "#"
                ? data?.map((item) => (
                    <Card
                      key={item.id + " " + item.title}
                      item={item}
                      // cardType={cardListTypeState}
                      // category={category}
                      // productsInCart={productsInCart}
                    />
                  ))
                : data?.map((item) => (
                    <Card
                      key={item.id + " " + item.title}
                      item={item}
                      // cardType={cardListTypeState}
                      // category={category}
                      // productsInCart={productsInCart}
                    />
                  ))}

          {/* {error
            ? "something went wrong"
            : loading
            ? "loading"
            : isSorting === "#"
            ? requestData?.map((item) => (
                <Card
                  key={item.id + " " + item.title}
                  item={item}
                  type={type}
                  category={category}
                  productsInCart={productsInCart}
                />
              ))
            : isSorting === "high"
            ? data
                ?.sort((a, b) =>
                  a.attributes.price_1 > b.attributes.price_1 ? -1 : 1
                )
                .map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    type={type}
                    category={category}
                    productsInCart={productsInCart}
                  />
                ))
            : data
                ?.sort((a, b) =>
                  a.attributes.price_1 > b.attributes.price_1 ? 1 : -1
                )
                .map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    type={type}
                    category={category}
                    productsInCart={productsInCart}
                  />
                ))} */}
        </div>
      </div>
    </div>
  );
}
