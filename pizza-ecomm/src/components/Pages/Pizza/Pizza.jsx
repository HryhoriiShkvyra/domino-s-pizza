import "./Pizza.css";
import CardList from "../../CardList/CardList";
import NavbarSecond from "../../Navbar/NavbarSecond";

export default function Pizza() {
  const pageState = "pizza";

  return (
    <div className="pizza">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="Best price" />
      {/* <CardList pageState={pageState} listTitle="News" /> */}
    </div>
  );
}
