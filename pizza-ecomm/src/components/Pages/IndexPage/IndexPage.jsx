import React from "react";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function IndexPage() {
  return (
    <div className="index">
      <NavbarSecond />
      <CardList />
    </div>
  );
}
