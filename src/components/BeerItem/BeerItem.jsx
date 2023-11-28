import { StyledImg, ButtonDiv } from "./BeerItem.styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import PropTypes from "prop-types";

export default function BeerItem({ id, name, src, tagline }) {
  BeerItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  };

  return (
    <Grid
      key={id}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "space",
        flexDirection: "column",
        gap: 2,
        p: 4,
      }}
    >
      <StyledImg src={src} alt={name} />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <ButtonDiv>
        <Button variant="outlined" sx={{ width: "50%" }}>
          Add to cart
        </Button>

        <Button variant="contained">Read More</Button>
      </ButtonDiv>
    </Grid>
  );
}
