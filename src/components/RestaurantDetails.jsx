// RestaurantDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ContextItems";

export const RestaurantDetails = () => {
  const { id } = useParams();
  const { listOfRestaurants } = useProducts();

  const restaurant = listOfRestaurants.find((res) => res.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="container mx-auto p-4 flex item-center flex-col justify-center text-center md:justify-center md:items-center">
      <h1 className="text-3xl font-bold m-8">{restaurant.name}</h1>
      <img
        src={restaurant.cloudinaryImageId}
        alt={restaurant.name}
        className="h-96 w-96 mb-4 rounded-lg md:items-center flex md:justify-center"
      />
      <div className="p-8">
        <p className="m-2">
          <strong>Cuisines:</strong> {restaurant.cuisines.join(", ")}
        </p>
        <p className="m-2">
          <strong>Average Rating:</strong> {restaurant.avgRating}
        </p>
        <p className="m-2">
          <strong>Cost For Two:</strong> {restaurant.costForTwo}
        </p>
        <p className="m-2">
          <strong>Delivery Time:</strong> {restaurant.sla.slaString}
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-2">Menu Categories</h2>
      <ul className="list-disc pl-5">
        {restaurant.menu && restaurant.menu.items ? (
          Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}>{item.category}</li>
          ))
        ) : (
          <li>Menu information will be updated soon</li>
        )}
      </ul>
    </div>
  );
};
