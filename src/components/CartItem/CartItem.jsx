import { useGetBeerByIdQuery } from "../../services/api/beersApi";
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
      <Box style={{ width: "100px", height: "200px", overflow: "hidden" }}>
        <img
          src={image_url}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{tagline}</Typography>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleRemoveFromCart}>
            <RemoveIcon color="primary" />
          </IconButton>
          <Typography variant="body1">{quantity}</Typography>
          <IconButton onClick={handleAddToCart}>
            <AddIcon color="primary" />
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
