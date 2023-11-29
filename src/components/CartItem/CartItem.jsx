import { useGetBeerByIdQuery } from "../../services/beersApi";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const CartItem = ({ id, quantity }) => {
  const { data, isLoading } = useGetBeerByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, quantity: 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h3>{data[0].name}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
      <button onClick={handleAddToCart}>Add</button>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
