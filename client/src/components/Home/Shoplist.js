import ShopItem from "./ShopItems/ShopItem";
import itemClasses from "./ShopItems/ShopItem.module.css";

const Shoplist = ({ items }) => {
  const displayedItems = items.map((item) => (
    <ShopItem
      key={item._id}
      id={item._id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));
  return (
    <div>
      <h2>The Latest Trend</h2>
      <ul className={itemClasses.cards}>{displayedItems}</ul>
    </div>
  );
};

export default Shoplist;
