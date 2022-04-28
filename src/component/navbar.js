import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../context/products";

const Navbar = () => {
  const productsContext = useContext(ProductsContext);
  return (
    <>
      <header>
        <p className="logo">
          Shaden
        </p>
        <ul>
          <li>
            <a  className = "icon" href="#">
              <i className="bi bi-house-heart"></i>
            </a>
          </li>
          <li>
            <a  className = "icon" href="#">
              <i className="bi bi-person"></i>
            </a>
          </li>
          <li>
            <div className="basket icon">
              <i className="bi bi-bag-heart"></i>
              <span>{calculateSum()}</span>
            </div>
          </li>
        </ul>
      </header>
      <section className="banner"></section>

      <div className="container d-flex justify-content-evenly "></div>
    </>
  );

  function calculateSum(){
    let sum = 0;
    productsContext.products.forEach(p =>{
      sum += p.count
    })
    return sum;
  }
};

export default Navbar;
