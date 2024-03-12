import { useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useState } from "react";
import { CORS_PROXY_URL } from "../utils/config";

export const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const url = CORS_PROXY_URL + encodeURIComponent(RESTAURANT_MENU_API);
      const response = await fetch(url);
      const data = await response.json();
      setResinfo(data);
    } catch (err) {
      console.error(err);
    }
  };
  const restaurantData = resInfo?.data?.cards[0]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="p-6 m-4 border-solid border-black border-2 rounded-md font-normal md:font-bold">
      <div className="text-2xl py-4">{restaurantData?.name}</div>
      <h2>Cusines: {restaurantData?.cuisines.join(", ")}</h2>
      <ul>
        <li>Cost for Two: {restaurantData?.costForTwoMessage}</li>
        <h3>Menu items</h3>
        {menuItems?.itemCards.map((item) => (
          <div>
            <li>
              {item.card?.info?.name}- Rs.
              {menuItems?.itemCards[0]?.card?.info?.price / 100}
            </li>
            <li>Average rating: {restaurantData?.avgRating}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
