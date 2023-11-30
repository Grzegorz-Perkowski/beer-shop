import { useGetBeerByIdQuery } from "../../services/beersApi";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CartItem = ({ id, quantity }) => {
  const { data, isLoading, isError } = useGetBeerByIdQuery(id);

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

  if (isError) {
    return <div>Error loading cart item</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const { image_url, name, tagline } = data[0];

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <img
        src={image_url}
        alt={name}
        style={{ width: "auto", height: "200px" }}
      />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{tagline}</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleRemoveFromCart}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{quantity}</Typography>
          <IconButton onClick={handleAddToCart}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
