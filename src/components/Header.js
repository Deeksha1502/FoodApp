import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ContextItems";
import { resList } from "../utils/mockData";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { setFilteredRestaurant } = useProducts();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50  bg-opacity-30 backdrop-blur-sm backdrop-filter border-opacity-40 rounded-lg">
      <div className="flex flex-col text-xl items-center justify-between px-4 py-2 lg:flex-row lg:px-24">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link
            to="/"
            onClick={() => setFilteredRestaurant(resList)}
            className="mr-4"
          >
            <div>
              <h1 className="lg:text-3xl font-bold  font-Metrophobic">
                Tasty Trails
              </h1>
            </div>
          </Link>
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block w-2/7 lg:w-auto`}
        >
          <ul className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6 text-black font-Metrophobic font-semibold">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </li> */}
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                Cart - {cartItems.length} item
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
