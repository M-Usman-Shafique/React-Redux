import { useGetAllProductsQuery, useGetProductByIdQuery, useGetProductsByLimitQuery } from "./services/post";
import '../src/App.css'

function App() {
  const response = useGetAllProductsQuery();
  // const response = useGetProductByIdQuery(7);
  // const response = useGetProductsByLimitQuery(5);

  if (response.isLoading) return <h1>Loading...</h1>;
  if (response.isError) return <h1>{response.error.error}</h1>;

  const { data } = response;

  return (
    <div>
      <h1>RTK Query (Get All Data)</h1>
      <hr />
      {
        data.products.map((product) =>
        <div key={product.id}>
        {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.title}`}/>
          ))}
          <h5>{product.title} || Price: {product.price}</h5>
          <hr />
        </div>
      )
      }
    </div>

    // --------------------------------------------------------- //

  //   <div>
  //   <h1>RTK Query (Get Specific Data)</h1>
  //   <hr />
  //     <>
  //     {data.images.map((image, index) => (
  //         <img key={index} src={image} alt={`Image ${index}`}/>
  //       ))}
  //       <h5>{data.title} || Price: {data.price}</h5>
  //       <hr />
  //     </>
  // </div>

  // --------------------------------------------------------------- //

  //   <div>
  //     <h1>RTK Query (Get Limited Data)</h1>
  //     <hr />
  //   {
  //     data.products.map((product) =>
  //     <div key={product.id}>
  //     {product.images.map((image, index) => (
  //         <img key={index} src={image} alt={`${product.title}`} />
  //       ))}
  //       <h5>{product.title} || Price: {product.price}</h5>
  //       <hr />
  //     </div>
  //   )
  //   }
  // </div>
  );
}

export default App;
