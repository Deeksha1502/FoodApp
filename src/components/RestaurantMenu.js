import { useEffect } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { useState } from "react";

export const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url =
      "https://corsproxy.org/?" + encodeURIComponent(RESTAURANT_LIST_API);
    const response = await fetch(url);
    const data = await response.json();
    setResinfo(data);
  };

  const restaurantData =
    resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants[4]?.info;

  return (
    <div className="menu">
      <h1>{restaurantData?.name}</h1>
      <h2>{restaurantData?.cuisines.join(", ")}</h2>
      <ul>
        <li>{restaurantData?.costForTwo}</li>
        <li>{restaurantData?.sla.slaString}</li>
      </ul>
    </div>
  );
};
