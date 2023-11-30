import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Navbar() {
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
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
