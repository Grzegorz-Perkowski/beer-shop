import { useGetAllProductsQuery } from "./services/productsApi";

function App() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Product List</h1>
      {data.products?.map((product) => (
        <div key={product.id}>
          <h2 className="primary">{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default App;
