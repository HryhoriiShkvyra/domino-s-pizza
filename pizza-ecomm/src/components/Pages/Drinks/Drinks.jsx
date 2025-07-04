import "./Drinks.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Drinks() {
  const pageState = "drinks";

  return (
    <div className="drinks">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} listTitle="Water and drinks" />
      <CardList pageState={pageState} listTitle="Juice" />
    </div>
  );
}
