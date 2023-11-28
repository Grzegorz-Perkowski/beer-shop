import { useGetAllProductsQuery } from "../../services/beersApi";
import { StyledImg, ButtonDiv } from "./BeersList.styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

function BeersList() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {data?.map((beer) => (
          <Grid
            key={beer.id}
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
            <StyledImg src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <ButtonDiv>
              <Button variant="outlined" sx={{ width: "50%" }}>
                Add to cart
              </Button>

              <Button variant="contained">Read More</Button>
            </ButtonDiv>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default BeersList;
