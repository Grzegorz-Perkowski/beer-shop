import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection="column"
        alignContent="center"
      >
        {cart.map(({ id, quantity }) => (
          <Grid item key={id}>
            <CartItem id={id} quantity={quantity} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
