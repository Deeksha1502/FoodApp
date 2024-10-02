import React from "react";
import { useNavigate } from "react-router-dom";

export const Modals = ({ closeModal, totalBill }) => {
  const navigate = useNavigate();
  console.log("totalbill is", totalBill);
  return (
    <div className="fixed place-items-center z-[999] bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 inset-0 flex justify-center items-center">
      <div className="container flex flex-col relative m-4 p-4 w-full min-w-[40%] max-w-md rounded-lg bg-white shadow-sm items-center">
        <div className="title flex justify-center flex-row m-[10px]">
          <h2>Are you sure you want to checkout?</h2>
          {/* <button
            className="flex-end flex items-end transition-colors"
            onClick={() => closeModal(false)}
          >
            X
          </button> */}
        </div>
        <div className="m-[20px]">
          <p>
            Your total bill is{" "}
            <span className="font-bold">
              {totalBill !== undefined
                ? `₹${totalBill.toFixed(2)}`
                : "Not Available"}
            </span>
          </p>
        </div>
        <div className="footer">
          <button
            className="px-4 py-2 bg-red-500 m-[4px] text-white rounded hover:bg-red-600 transition-colors"
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 m-[4px] text-white rounded hover:bg-green-600 transition-colors"
            onClick={() => navigate("/login")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
