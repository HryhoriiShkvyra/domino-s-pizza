import React from "react";
import NavbarSecond from "../../Navbar/NavbarSecond";
import Slider from "../../Slider/Slider";
import CardList from "../../CardList/CardList";
import isSorting from "../../Sorting/Sorting";
import "./Home.css";

export default function Home() {
  // localStorage.setItem("category", "pizza");
  // localStorage.setItem("type", [["New"], ["Best Price"]]);

  const categories = ["pizza", "sides", "drinks", "desserts"];
  localStorage.setItem("category", JSON.stringify(categories));

  const pizzaTypes = [
    "Bestsellers and novelties",
    "Best Price",
    "Heroes",
    "Wonder",
    "Finest",
    "Gourmet",
  ];
  localStorage.setItem("pizzaType", JSON.stringify(pizzaTypes));

  return (
    <div className="home">
      <NavbarSecond />
      {/* <Slider /> */}
      <CardList />
      {/* <CardList category="pizza" type="Best Price" isSorting={isSorting} /> */}
      {/* <CardList category="pizza" type="Heroes" isSorting={isSorting} />
      <CardList category="pizza" type="Wonder" isSorting={isSorting} /> */}
    </div>
  );
}
