import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">BEER SHOP</StyledLink>
          </Typography>

          <Typography variant="h6" noWrap component="div">
            <StyledLink to="/cart">SHOPPING CART</StyledLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
