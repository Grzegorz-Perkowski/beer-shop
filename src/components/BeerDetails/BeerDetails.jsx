import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useGetAllBeersQuery } from "../../services/beersApi";

const BeerDetails = () => {
  const { data, isLoading } = useGetAllBeersQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", gap: 5 }}
    >
      <img src={data.image_url} alt={data.name} />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <h1>{data.name}</h1>
        <p>Tagline: {data.tagline}</p>
        <p>Description: {data.description}</p>
        <p>First Brewed: {data.first_brewed}</p>
      </Box>
    </Grid>
  );
};

export default BeerDetails;
