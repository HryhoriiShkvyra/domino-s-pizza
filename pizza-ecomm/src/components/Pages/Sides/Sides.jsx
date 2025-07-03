import React from "react";
import NavbarSecond from "../../Navbar/NavbarSecond";
import CardList from "../../CardList/CardList";
import Sorting from "../../Sorting/Sorting";
import "./Sides.scss";

export default function Sides() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="sides">
      <NavbarSecond />
      <div className="sides-container">
        <Sorting setIsSorting={setIsSorting} />
        <CardList category="sides" type="Combo-boxes" isSorting={isSorting} />
        <CardList category="sides" type="Bread" isSorting={isSorting} />
      </div>
    </div>
  );
}
