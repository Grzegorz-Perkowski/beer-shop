import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 2,
      }}
    >
      {cart.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <Grid
          container
          spacing={4}
          display="flex"
          flexDirection="column"
          alignContent="flex-start"
          m={4}
        >
          {cart?.map(({ id, quantity }) => (
            <Grid key={id}>
              <CartItem id={id} quantity={quantity} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
