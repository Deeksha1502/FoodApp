import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="mt-3 shadow-lg flex flex-col w-full items-center justify-center pr-8">
      <div className="bg-blue-50 shadow-xl w-full text-center font-Metrophobic grid md:grid-cols-2 lg:grid-cols-4 pt-8 pb-8 pl-14 p4-14">
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">
            Your Food Delivery Partner Tastytrailers
          </p>
          <p>
            Enjoy the best food delivery experience with Trailers. We're here to
            serve you
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
          <ul className="no-underline flex flex-col items-center justify-center">
            <li className="font-semibold mb-2">Explore</li>
            <li className="mb-1">About Us</li>
            <li className="mb-1">Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0 justify-center">
          <ul>
            <li className="font-semibold flex flex-col md:justify-center items-center w-full">
              Get in touch
            </li>

            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <CiLocationOn />
              Bengaluru
            </li>

            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <AiOutlineMail />
              deekshad1502@gmail.com
            </li>
          </ul>
        </div>
        <div className="font-semibold">
          <span className="mb-2">Connect with us</span>
          <ul>
            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <a href="https://twitter.com/Deeksha__1502" target="_blank">
                <BsTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/deeksha-deepak-52009a203/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-100 fixed bottom-0 mb-0 py-4 mx-auto font-Metrophobic font-semibold text-lg flex justify-center items-center">
        <p className="item-center fixed bottom-0  top-[100vh] justify-center text-center">
          &copy; 2024 TastyTrails All rights reserved.
        </p>
      </div>
    </div>
  );
};
