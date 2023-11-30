import { useGetAllBeersQuery } from "../../services/api/beersApi";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BeerItem from "../BeerItem/BeerItem";
import CircularLoader from "../CircularLoader/CircularLoader";

function BeersList() {
  const { data: beers, isLoading, isError } = useGetAllBeersQuery();

  if (isLoading) {
    return <CircularLoader />;
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
