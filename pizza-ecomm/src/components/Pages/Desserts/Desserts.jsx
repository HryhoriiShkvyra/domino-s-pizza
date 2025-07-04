import "./Desserts.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Desserts() {
  const pageState = "sides";

  return (
    <div className="desserts">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} listTitle="Desserts" />
    </div>
  );
}
