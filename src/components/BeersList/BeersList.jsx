import { useGetAllBeersQuery } from "../../services/beersApi";
import Grid from "@mui/material/Grid";
import BeerItem from "../BeerItem/BeerItem";

function BeersList() {
  const { data, isLoading } = useGetAllBeersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
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
