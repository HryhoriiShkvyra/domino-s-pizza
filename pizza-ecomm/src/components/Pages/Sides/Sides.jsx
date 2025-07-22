import "./Sides.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Sides() {
  const pageState = "sides";

  return (
    <div className="sides">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="Burrito's" />
      <CardList pageState={pageState} category="Chicken and ribs" />
      <CardList pageState={pageState} listTitle="Salads" />
      <CardList pageState={pageState} listTitle="Mini rolls" />
      <CardList pageState={pageState} listTitle="Combo-boxes" />
      <CardList pageState={pageState} listTitle="Sides" />
      <CardList pageState={pageState} listTitle="Bread" />
      <CardList pageState={pageState} listTitle="Sauces" />
    </div>
  );
}
