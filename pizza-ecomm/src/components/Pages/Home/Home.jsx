import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import Slider from "../../Slider/Slider";
import CardList from "../../CardList/CardList";
import isSorting from "../../Sorting/Sorting";
import "./Home.scss";

export default function Home() {
  // localStorage.setItem("category", "pizza");
  // localStorage.setItem("type", [["New"], ["Best Price"]]);

  const categories = ["pizza", "sides", "drinks", "desserts"];
  localStorage.setItem("category", JSON.stringify(categories));

  const pizzaTypes = ["New", "Best Price"];
  localStorage.setItem("pizzaType", JSON.stringify(pizzaTypes));

  return (
    <div className="home">
      <NavbarSecondPart />
      <Slider />
      <CardList category="pizza" type="New" isSorting={isSorting} />
      <CardList category="pizza" type="Best Price" isSorting={isSorting} />
    </div>
  );
}
