import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modals } from "./Modals";
export const NewCart = () => {
  const [openModal, setOpenModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (cartId) => {
    dispatch(removeItem(cartId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.cost.replace("₹", "")),
      0,
    );
  };

  const total = calculateTotal();
  console.log("total bill is", total);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold m-4">Your cart is empty</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-">Your cart</h1>
      <ul className=" space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-2"
          >
            <div className="flex items-center" key={item.cartId}>
              <img
                src={item.cloudinaryimageid}
                alt={item.name}
                className=" w-16 h-16 object-cover rounded-md mr-4"
              ></img>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 space-x-2 mx-auto">
              <p className="font-extrabold">{item.cost}</p>
              <button
                onClick={() => handleRemoveItem(item.cartId)}
                className="bg-red-500 text-white px-2 ml-5 py-1 hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
        <div className="mt-4 space-x-4 ">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Clear Cart
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2  rounded hover:bg-green-600 transition-colors"
            onClick={() => setOpenModal(true)}
          >
            Proceed to checkout
          </button>
          {openModal && <Modals closeModal={setOpenModal} totalBill={total} />}
        </div>
      </div>
    </div>
  );
};
