import ShopItem from "./ShopItem";

const Shoplist = ({ items }) => {
  const displayedItems = items.map((item) => (
    <ShopItem
      id={item._id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));
  return <div>{displayedItems}</div>;
};

export default Shoplist;
