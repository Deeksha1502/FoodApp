import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useProducts } from "../context/ContextItems";
import { resList } from "../utils/mockData";
import logo from "../assets/tastytrails.png";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { setFilteredRestaurant } = useProducts();

  return (
    <div className="flex flex-col sticky bg-white shadow-sm top-0 lg:flex-row lg:justify-center w-full">
      <div className="flex bg-white h-20 text-lg">
        <div className="logo-container">
          <Link to="/">
            <div onClick={() => setFilteredRestaurant(resList)}>
              <img className="mx-auto  w-full lg:w-auto h-16 mt-2" src={logo} />
            </div>
          </Link>
        </div>
        <div className="flex items-center ml-60">
          <ul className="sticky text-black flex p-4 m-4 mr-4 lg:mr-8 font-Metrophobic font-semibold">
            <li className="px-6">
              <Link to="/">Home</Link>
            </li>

            <li className="px-6">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-6">Cart</li>

            <button
              className="login px-6"
              onClick={() => {
                btnNameReact == "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
            <li className="px-6">
              <Link to="/about">About</Link>
            </li>
            <li className="px-6">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
