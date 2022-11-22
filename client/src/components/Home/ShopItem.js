const ShopItem = ({ id, image, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ShopItem;
