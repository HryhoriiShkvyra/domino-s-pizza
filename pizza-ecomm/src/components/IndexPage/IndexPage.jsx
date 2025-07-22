import CardList from "../CardList/CardList";
import NavbarSecond from "../Navbar/NavbarSecond";

export default function IndexPage() {
  const pageState = "pizza";

  return (
    <div className="index">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="Bestsellers and novelties" />
      <CardList pageState={pageState} category="Best price" />
      <CardList pageState={pageState} category="Heroes" />
      <CardList pageState={pageState} category="Wonder" />
      <CardList pageState={pageState} category="Finest" />
      <CardList pageState={pageState} category="Gourmet" />
    </div>
  );
}
