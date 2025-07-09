import CardList from "../CardList/CardList";
import NavbarSecond from "../Navbar/NavbarSecond";

export default function IndexPage() {
  const pageState = "pizza";

  return (
    <div className="index">
      <NavbarSecond pageState={pageState} />
      <CardList pageState={pageState} category="best price" />
      {/* <CardList pageState={pageState} listTitle="News" /> */}
    </div>
  );
}
