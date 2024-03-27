import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useProducts } from "../context/ContextItems";
import { resList } from "../utils/mockData";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { setFilteredRestaurant } = useProducts();

  return (
    <div className="flex sticky top-0 bg-opacity-100 justify-between bg-slate-50 shadow-md h-24 text-lg mb-9 ">
      <div className="logo-container">
        <Link to="/">
          <div onClick={() => setFilteredRestaurant(resList)}>
            <img className="w-24 max-w-xs h-auto" src={LOGO_URL} />
          </div>
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="sticky text-black flex p-4 m-4 font-serif">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <button
            className="login px-4 "
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
