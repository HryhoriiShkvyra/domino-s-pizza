import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import Sorting from "../../Sorting/Sorting";
import CardList from "../../CardList/CardList";
import "./Pizza.scss";

export default function Pizza() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="pizza">
      <NavbarSecondPart />
      <div className="pizza-container">
        <Sorting setIsSorting={setIsSorting} />
        <CardList category="pizza" type="New" isSorting={isSorting} />
        <CardList category="pizza" type="" isSorting={isSorting} />
      </div>
    </div>
  );
}
