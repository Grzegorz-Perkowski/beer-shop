import { useGetBeerByIdQuery } from "../../services/beersApi";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const BeerDetails = () => {
  const { id } = useParams();
  const { data: beer, isLoading, isError } = useGetBeerByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
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
      <img src={image_url} alt={name} />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <h1>{name}</h1>
        <p>Tagline: {tagline}</p>
        <p>Description: {description}</p>
        <p>First Brewed: {first_brewed}</p>
      </Box>
    </Grid>
  );
};

export default BeerDetails;
