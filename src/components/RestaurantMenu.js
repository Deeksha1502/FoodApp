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
    const url = CORS_PROXY_URL + encodeURIComponent(RESTAURANT_MENU_API);
    const response = await fetch(url);
    const data = await response.json();
    setResinfo(data);
    // console.log(data);
  };
  const restaurantData2 = resInfo?.data?.cards[0]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("this is menu items", menuItems);

  return (
    <div className="p-6 m-4 border-solid border-black border-2 rounded-md font-normal md:font-bold">
      <div className="text-2xl py-4">{restaurantData2?.name}</div>
      <h2>Cusines: {restaurantData2?.cuisines.join(", ")}</h2>
      <ul>
        <li>Cost for Two: {restaurantData2?.costForTwoMessage}</li>
        <h3>Menu items</h3>
        {menuItems?.itemCards.map((item) => (
          <li>{item.card?.info?.name}</li>
        ))}

        {/* <li>
          Dish: {menuItems?.itemCards[0]?.card?.info?.name} - Rs.
          {menuItems?.itemCards[0]?.card?.info?.price / 100}
        </li>
        <li>Dish: {menuItems?.itemCards[1]?.card?.info?.name}</li>
        <li>Dish: {menuItems?.itemCards[2]?.card?.info?.name}</li> */}

        {/* <li>Average rating: {restaurantData2?.avgRating}</li> */}
      </ul>
    </div>
  );
};
