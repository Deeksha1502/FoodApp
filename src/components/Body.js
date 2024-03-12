import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { CORS_PROXY_URL } from "../utils/config";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OFFLINE_MESSAGE } from "../utils/constants";
export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URI_COMPONENT =
      CORS_PROXY_URL + encodeURIComponent(RESTAURANT_LIST_API);
    const data = await fetch(URI_COMPONENT);

    const json = await data?.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>{OFFLINE_MESSAGE}</h1>;

  const filterList = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  const filterMenuRatings = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );

    setFilteredRestaurant(filteredList);
  };

  return (
    <div>
      <div className="flex">
        <div className="search my-4 ml-6 px-16">
          <input
            type="text"
            className="ring-blue-500  border-solid border-black border-2 rounded-md"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          ></input>

          <button
            className="px-4 py-1 ml-4 bg-blue-700 rounded-lg text-white"
            onClick={filterList}
          >
            Search
          </button>
        </div>
        <div className="search  flex items-center">
          <button
            className="px-4 py-1 bg-blue-700 text-white rounded-lg"
            onClick={filterMenuRatings}
          >
            Top Rated restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap px-16">
        {(filteredRestaurant.length
          ? filteredRestaurant
          : listOfRestaurants
        )?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
