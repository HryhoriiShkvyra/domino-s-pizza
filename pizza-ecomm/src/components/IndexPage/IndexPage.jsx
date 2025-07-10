import CardList from "../CardList/CardList";
import NavbarSecond from "../Navbar/NavbarSecond";
import { create } from "zustand";

export default function IndexPage() {
  const pageState = "pizza";

  return (
    <div className="index">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="best price" />
    </div>
  );
}
