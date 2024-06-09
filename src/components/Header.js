import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useProducts } from "../context/ContextItems";
import { resList } from "../utils/mockData";
import logo from "../assets/tastytrails.png";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const { setFilteredRestaurant } = useProducts();

  return (
    <div
      className="flex flex-col sticky 
    bg-violet-200 bg-opacity-30 rounded-lg  backdrop-blur-sm backdrop-filter border border-pink-200 border-opacity-40 top-0 lg:flex-row lg:justify-center w-full"
    >
      <div
        className="flex 
bg-pink-200 bg-opacity-30 rounded-lg  backdrop-blur-sm backdrop-filter border border-pink-200 border-opacity-40 h-20 text-lg"
      >
        <div className="logo-container">
          <Link to="/">
            <div onClick={() => setFilteredRestaurant(resList)}>
              <img
                className="mx-auto w-full lg:w-auto h-16 mt-2"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center ml-60">
          <ul className="sticky text-black flex p-4 m-4 mr-4 lg:mr-8 font-Metrophobic font-semibold">
            <li className="px-6">
              <Link to="/">Home</Link>
            </li>
            <li className="px-6">
              <Link to="/menu">Menu</Link>
            </li>

            <li className="px-6 cursor-pointer">
              <Link to="/cart">Cart - {cartItems.length} items</Link>
            </li>

            <li className="px-6">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-6">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
