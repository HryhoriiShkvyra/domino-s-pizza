import "./Drinks.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Drinks() {
  const pageState = "drinks";

  return (
    <div className="drinks">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="Water and drinks" />
      <CardList pageState={pageState} category="Juice" />
      <CardList pageState={pageState} category="Low-alcohol drinks and beer" />
      <CardList pageState={pageState} category="Tea" />
    </div>
  );
}
