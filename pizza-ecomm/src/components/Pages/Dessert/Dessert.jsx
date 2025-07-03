import React from "react";
import NavbarSecond from "../../Navbar/NavbarSecond";
import Sorting from "../../Sorting/Sorting";
import CardList from "../../CardList/CardList";
import "./Dessert.scss";

export default function Desserts() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="dessert">
      <NavbarSecond />
      <div className="dessert-container">
        <Sorting setIsSorting={setIsSorting} />
        <CardList category="dessert" type="Dessert" isSorting={isSorting} />
      </div>
    </div>
  );
}
