import { createContext } from "react";

const ProductsContext = createContext({
  products: [],
  onDelete: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
  onReset: () => {},
});

export default ProductsContext;
