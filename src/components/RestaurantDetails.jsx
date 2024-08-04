// RestaurantDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ContextItems";
import { resMenu } from "../utils/mockMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const RestaurantDetails = () => {
  const { id } = useParams();
  const { listOfRestaurants } = useProducts();
  const dispatch = useDispatch();

  const restaurant = resMenu.find((res) => res.restaurantId === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const renderMenuItem = (item, index) => {
    if (!item) return null;
    return (
      <li key={index}>
        <div className="flex items-center relative">
          <img
            src={item.cloudinaryimageid}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <button
            onClick={() => handleAddToCart(item)}
            className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors"
          >
            +
          </button>
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="font-semibold">{item.cost}</p>
          </div>
        </div>
      </li>
    );
  };

  return (
    // <div className="container mx-auto p-4 flex item-center flex-col justify-center text-center md:justify-center md:items-center">
    //   <h1 className="text-3xl font-bold m-8">{restaurant.restaurantName}</h1>
    //   <ul className="space-y-4">
    //     {restaurant.firstItem && (
    //       <li>
    //         <div className="flex items-center">
    //           <img
    //             src={restaurant.firstCloudinaryimageid}
    //             alt={restaurant.firstItem}
    //             className="w-24 h-24 object-cover rounded-md mr-4"
    //           />
    //           <div>
    //             <h3 className="font-bold">{restaurant.firstItem}</h3>
    //             <p>{restaurant.firstDescription}</p>
    //             <p className="font-semibold">{restaurant.firstItemCost}</p>
    //           </div>
    //         </div>
    //       </li>
    //     )}
    //     {restaurant.secondItem && (
    //       <li>
    //         <div className="flex items-center">
    //           <img
    //             src={restaurant.secondCloudinaryimageid}
    //             alt={restaurant.secondItem}
    //             className="w-24 h-24 object-cover rounded-md mr-4"
    //           />
    //           <div>
    //             <h3 className="font-bold">{restaurant.secondItem}</h3>
    //             <p>{restaurant.secondDescription}</p>
    //             <p className="font-semibold">{restaurant.secondItemCost}</p>
    //           </div>
    //         </div>
    //       </li>
    //     )}

    //   </ul>
    // </div>

    <div className="container mx-auto p-4 flex item-center flex-col justify-center text-center md:justify-center md:items-center">
      <h1 className="text-3xl font-bold m-8">{restaurant.restaurantName}</h1>
      <ul className="space-y-4">
        {renderMenuItem({
          name: restaurant.firstItem,
          description: restaurant.firstDescription,
          cost: restaurant.firstItemCost,
          cloudinaryimageid: restaurant.firstCloudinaryimageid,
        })}
        {renderMenuItem({
          name: restaurant.secondItem,
          description: restaurant.secondDescription,
          cost: restaurant.secondItemCost,
          cloudinaryimageid: restaurant.secondCloudinaryimageid,
        })}
        {/* Add similar blocks for third, fourth, and fifth items if they exist */}
      </ul>
    </div>
  );
};
