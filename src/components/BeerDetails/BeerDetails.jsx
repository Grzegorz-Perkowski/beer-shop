import { useGetBeerByIdQuery } from "../../services/api/beersApi";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import CircularLoader from "../CircularLoader/CircularLoader";

const BeerDetails = () => {
  const { id } = useParams();
  const { data: beer, isLoading, isError } = useGetBeerByIdQuery(id);

  if (isLoading) {
    return <CircularLoader />;
  }

  if (isError) {
    return <div>Error loading beer details</div>;
  }

  if (!beer || beer.length === 0) {
    return <div>No data available</div>;
  }

  const { name, image_url, tagline, description, first_brewed } = beer[0];

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", gap: 5 }}
    >
      <Box style={{ width: "auto", height: "500px", overflow: "hidden" }}>
        <img
          src={image_url}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <h1>{name}</h1>
        <p> {tagline}</p>
        <p>{description}</p>
        <p>First Brewed: {first_brewed}</p>
      </Box>
    </Grid>
  );
};

export default BeerDetails;
