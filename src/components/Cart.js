import { useDispatch, useSelector } from "react-redux";
import { RestaurantMenuList } from "./RestaurantMenuList";
import { clearCart } from "../utils/cartSlice";
export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("this is cart items" + cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-center text-2xl mt-3">Cart</h1>
      <button
        className="items-center text-center justify-center border-2 bg-slate-100 p-2 lg:ml-96 font-bold rounded-lg "
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="font-bold m-3 lg:ml-[385]">
          Cart items is empty! add items to the cart
        </h1>
      )}
      <div>
      {cartItems.map((item, index)=>( <RestaurantMenuList key={index} resMenu={[item]}  />))}
       
      </div>
    </div>
  );
};
