// RestaurantDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ContextItems";
import { resMenu } from "../utils/mockMenu";

export const RestaurantDetails = () => {
  const { id } = useParams();
  const { listOfRestaurants } = useProducts();

  const restaurant = resMenu.find((res) => res.restaurantId === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="container mx-auto p-4 flex item-center flex-col justify-center text-center md:justify-center md:items-center">
      <h1 className="text-3xl font-bold m-8">{restaurant.restaurantName}</h1>
      <ul className="space-y-4">
        {restaurant.firstItem && (
          <li>
            <div className="flex items-center">
              <img
                src={restaurant.firstCloudinaryimageid}
                alt={restaurant.firstItem}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">{restaurant.firstItem}</h3>
                <p>{restaurant.firstDescription}</p>
                <p className="font-semibold">{restaurant.firstItemCost}</p>
              </div>
            </div>
          </li>
        )}
        {restaurant.secondItem && (
          <li>
            <div className="flex items-center">
              <img
                src={restaurant.secondCloudinaryimageid}
                alt={restaurant.secondItem}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">{restaurant.secondItem}</h3>
                <p>{restaurant.secondDescription}</p>
                <p className="font-semibold">{restaurant.secondItemCost}</p>
              </div>
            </div>
          </li>
        )}
        {/* Add similar blocks for third, fourth, and fifth items if they exist */}
      </ul>
    </div>
  );
};
