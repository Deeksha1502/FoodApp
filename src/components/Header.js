import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex  justify-between bg-blue-700 shadow-md h-20">
      <div className="logo-c ontainer">
        <Link to="/">
          <img className="w-20 h-50" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="sticky text-white flex p-4 m-4 font-sans">
          <li className="px-4 font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-semibold">Cart</li>
          <button
            className="login px-4 font-semibold"
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
