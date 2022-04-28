import { useContext } from "react";
import ProductsContext from "../context/products";

const Product = ({ img, producsName, price, id }) => {
  const productsContext = useContext(ProductsContext);
  return (
    <div className="card">
      <img className="card-img card-img-top" src={img} alt="producst" />
      <div className="card-body">
        <div className="row">
          <h5 className="card-title">Product Name : {producsName}</h5>
          <span>Price : {price}</span>
        </div>
        <div
          className="btn-group mt-2"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={handleDecrement}
            type="button"
            className="btn btn-warning"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            type="button"
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  function handleDelete() {
    productsContext.onDelete(id);
  }
  function handleDecrement() {
    productsContext.onDecrement(id);
  }
  function handleIncrement() {
    productsContext.onIncrement(id);
  }
};

export default Product;
