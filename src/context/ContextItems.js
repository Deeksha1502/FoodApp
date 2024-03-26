import { createContext, useContext, useState } from "react";
import { resList } from "../utils/mockData";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  return (
    <CartContext.Provider
      value={{
        listOfRestaurants,
        setListOfRestaurants,
        filteredRestaurant,
        setFilteredRestaurant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(CartContext);
};
