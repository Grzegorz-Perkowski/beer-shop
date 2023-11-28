import { StyledImg, ButtonDiv } from "./BeerItem.styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BeerItem({ id, name, src, tagline }) {
  BeerItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  };

  return (
    <Grid
      item
      key={id}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        m: 4,
      }}
    >
      <StyledImg src={src} alt={name} />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <ButtonDiv>
        <Button variant="outlined" sx={{ width: "50%" }}>
          Add to cart
        </Button>

        <Link to={`beers/${id}`} sx={{ width: "50%" }}>
          <Button variant="contained">Read More</Button>
        </Link>
      </ButtonDiv>
    </Grid>
  );
}
