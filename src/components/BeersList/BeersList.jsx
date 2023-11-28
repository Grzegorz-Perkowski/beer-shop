import { useGetAllProductsQuery } from "../../services/beersApi";
import Grid from "@mui/material/Unstable_Grid2";
import BeerItem from "../BeerItem/BeerItem";

function BeersList() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {data?.map(({ id, name, image_url, tagline }) => (
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
