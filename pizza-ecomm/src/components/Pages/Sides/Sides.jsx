import "./Sides.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Sides() {
  const pageState = "sides";

  return (
    <div className="sides">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} listTitle="Chicken and ribs" />
      <CardList pageState={pageState} listTitle="Salads" />
      <CardList pageState={pageState} listTitle="Mini rolls" />
    </div>
  );
}
