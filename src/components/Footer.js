import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="bg-slate-100 w-full text-center font-Metrophobic grid md:grid-cols-2 lg:grid-cols-4 pt-8 pb-8 pl-28">
        <div className="pr-28 ">
          <p className="font-semibold">
            Your Food Delivery Partner Tastytrailers
          </p>
          <p>
            Enjoy the best food delivery experience with Trailers. We're here to
            serve you
          </p>
        </div>

        <div className="">
          <ul className="no-underline">
            <li className="font-semibold">Explore</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-semibold">Get in touch</li>

            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <CiLocationOn />
              Bengaluru
            </li>

            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <AiOutlineMail />
              tastytrails@gmail.com
            </li>
          </ul>
        </div>
        <div className="font-semibold">
          Connect with us
          <ul>
            <li className="flex justify-center items-center  space-x-1.5 p-1.5">
              <BsTwitter />
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-100 py-4 mx-auto font-Metrophobic font-semibold text-lg flex justify-center items-center">
        <p className="item-center justify-center text-center">
          &copy; 2024 TastyTrails All rights reserved.
        </p>
      </div>
    </div>
  );
};
