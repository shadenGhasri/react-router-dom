import Product from "./product";
import ProductsContext from "../context/products";
import { useContext } from "react";

const Products = () => {
  const productsContext = useContext(ProductsContext);
  return (
    <div className="container d-flex justify-content-evenly mt-5">
      {productsContext.products.map((p, index) => (
        <Product
          key={index}
          id={p.id}
          price={p.productPrice}
          producsName={p.productName}
          img={p.productImg}
          count={p.count}
        />
      ))}
    </div>
  );
};

export default Products;

