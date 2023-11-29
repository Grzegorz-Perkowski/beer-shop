import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          quantity={cartItem.quantity}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
