import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import Slider from "../../Slider/Slider";
import CardList from "../../CardList/CardList";
import isSorting from "../../Sorting/Sorting";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <NavbarSecondPart />
      <Slider />
      <CardList category="pizza" type="New" isSorting={isSorting} />
      <CardList category="pizza" type="Best Prise" isSorting={isSorting} />
    </div>
  );
}
