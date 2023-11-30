import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  const totalQuantity = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              BEER SHOP
            </Link>
          </Typography>

          <Typography variant="h6" noWrap component="div">
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <ShoppingCartIcon />
              {totalQuantity > 0 && <span>({totalQuantity})</span>}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
