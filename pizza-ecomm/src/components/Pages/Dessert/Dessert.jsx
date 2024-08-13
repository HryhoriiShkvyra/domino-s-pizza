import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import Sorting from "../../Sorting/Sorting";
import CardList from "../../CardList/CardList";
import "./Dessert.scss";

export default function Desserts() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="dessert">
      <NavbarSecondPart />
      <div className="dessert-container">
        <Sorting setIsSorting={setIsSorting} />
        <CardList category="dessert" type="Dessert" isSorting={isSorting} />
      </div>
    </div>
  );
}
