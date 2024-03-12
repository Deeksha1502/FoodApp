import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between  bg-blue-700 shadow-md h-20">
      <div className="logo-c ontainer">
        <img className=" w-20 h-50" src={LOGO_URL}></img>
      </div>
      {/* <nav>
        <button class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav> */}

      <div className=" flex items-center ">
        <ul className="sticky text-white flex p-4 m-4 font-sans">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : " 🔴"}</li>
          <li className="px-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login px-4"
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
