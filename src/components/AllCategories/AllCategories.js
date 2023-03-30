import CardList from "../CardList/CardList";
import NavTab from "../NavTab/NavTab";
import "./AllCategories.css";

function AllCategories() {
  return (
    <section className="section">
      <NavTab title={"Все категории"} />
      <CardList title={"Все категории"} />
    </section>
  );
}

export default AllCategories;
