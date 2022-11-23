import classes from "./ShopItem.module.css";
import ShopItemForm from "./ShopItemForm";

const ShopItem = ({ image, name, price }) => {
  return (
    <li>
      <img src={image} alt={name} className={classes.image} />
      <div>
        <h3>{name}</h3>
        <span className={classes.price}>${price}</span>
        <div>
          <ShopItemForm />
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
