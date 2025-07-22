import "./Desserts.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Desserts() {
  const pageState = "desserts";

  return (
    <div className="desserts">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="Desserts" />
      <CardList pageState={pageState} category="Ice cream" />
    </div>
  );
}
