import Navbar from "./component/navbar";
import Products from "./component/products";
import ProductsContext from "./context/products";
import { useState } from "react";
import "./style.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      productName: "mascara",
      id: 0,
      productPrice: "20$",
      count: 0,
      productImg: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      productName: "lip Stick",
      id: 1,
      productPrice: "13$",
      count: 0,
      productImg: "https://images.unsplash.com/photo-1600852306771-c963331af110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      productName: "perfume",
      id: 2,
      productPrice: "16$",
      count: 0,
      productImg: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=553&q=80",
    },
  ]);

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        onDelete: handleDelete,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
      }}
    >
      <Navbar />
      <Products />
    </ProductsContext.Provider>
  );
  function handleDelete(productId) {
    const newProducts = products.filter((p) => p.id !== productId);
    setProducts(newProducts);
  }

  function handleIncrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }

  function handleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
};

export default App;
