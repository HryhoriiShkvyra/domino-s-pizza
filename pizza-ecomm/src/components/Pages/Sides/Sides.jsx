import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import CardList from "../../CardList/CardList";
import Sorting from "../../Sorting/Sorting";
import "./Sides.scss";

export default function Sides() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="sides">
      <NavbarSecondPart />
      <div className="sides-container">
        <Sorting setIsSorting={setIsSorting} />
        <CardList category="sides" type="Combo-boxes" isSorting={isSorting} />
        <CardList category="sides" type="Bread" isSorting={isSorting} />
      </div>
    </div>
  );
}
