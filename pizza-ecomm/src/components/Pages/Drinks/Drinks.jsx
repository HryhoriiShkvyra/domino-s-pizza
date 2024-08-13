import React from "react";
import NavbarSecondPart from "../../Navbar/NavbarSecondPart";
import CardList from "../../CardList/CardList";
import Sorting from "../../Sorting/Sorting";
import Filter from "../../Filter/Filter";
import "./Drinks.scss";

export default function Drinks() {
  const [isSorting, setIsSorting] = React.useState("#");

  return (
    <div className="drinks">
      <NavbarSecondPart />
      <div className="drinks-container">
        <Sorting setIsSorting={setIsSorting} />
        <Filter />
        <CardList
          category="drinks"
          type="Water and drinks"
          isSorting={isSorting}
        />
        <CardList category="drinks" type="Juice" isSorting={isSorting} />
        <CardList category="drinks" type="Beer" isSorting={isSorting} />
        <CardList
          category="drinks"
          type="Coffee and tea"
          isSorting={isSorting}
        />
      </div>
    </div>
  );
}
