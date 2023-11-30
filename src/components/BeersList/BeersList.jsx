import { useGetAllBeersQuery } from "../../services/api/beersApi";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BeerItem from "../BeerItem/BeerItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function BeersList() {
  const { data: beers, isLoading, isError } = useGetAllBeersQuery();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <div>Error loading beers list</div>;
  }

  if (!beers || beers.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Grid container>
        {beers?.map(({ id, name, image_url, tagline }) => (
          <BeerItem
            key={id}
            id={id}
            name={name}
            src={image_url}
            tagline={tagline}
          />
        ))}
      </Grid>
    </>
  );
}

export default BeersList;
