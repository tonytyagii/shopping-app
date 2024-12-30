import React from "react";
import { Link, useLocation } from "react-router";
import { items } from "./Data.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputItem, setInputItem] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
    console.log(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputItem}`);
    setInputItem("");
  };

  return (
    <>
      <header className="sticky-top ">
        <div className="navbar">
          <Link to={"/"} className="brand">
            E-Commerce
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={inputItem}
              onChange={(e) => setInputItem(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaShoppingCart style={{fontSize: "1.5rem"}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
               {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

      {
        location.pathname == "/" && (
          <div className="navbar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterByCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterByCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterByCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice(29999)} className="items">
            {">"}=29999
          </div>
          <div onClick={() => filterByPrice(49999)} className="items">
            {">"}=49999
          </div>
          <div onClick={() => filterByPrice(69999)} className="items">
            {">"}=69999
          </div>
          <div onClick={() => filterByPrice(89999)} className="items">
            {">"}=89999
          </div>
        </div>
        )
      }

      </header>
    </>
  );
};

export default Navbar;
