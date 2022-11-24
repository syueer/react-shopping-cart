import { useContext } from "react";
import classes from "./ShopItem.module.css";
import ShopItemForm from "./ShopItemForm";
import CartContext from "../../../store/cart-context";

const ShopItem = ({ id, image, name, price }) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li>
      <img src={image} alt={name} className={classes.image} />
      <div>
        <h3>{name}</h3>
        <span className={classes.price}>${price}</span>
        <div>
          <ShopItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
