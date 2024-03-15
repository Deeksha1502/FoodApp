import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { CORS_PROXY_URL } from "../utils/config";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OFFLINE_MESSAGE } from "../utils/constants";
export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URI_COMPONENT = encodeURIComponent(resList);

    const data = await fetch(URI_COMPONENT);

    const json = await data?.json();
    setListOfRestaurants(json?.id);
  };

  const filterList = () => {
    const filteredList = listOfRestaurants.filter((resList) =>
    resList.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>{OFFLINE_MESSAGE}</h1>;

  const filterMenuRatings = () => {
    const filteredList = listOfRestaurants.filter(
      (resList) => resList.avgRating > 4.5
    );

    setFilteredRestaurant(filteredList);
  };

  return (
    <div>
      <div className="flex">
        <div className="my-4 ml-6 px-16">
          <input
            type="text"
            className="ring-blue-500 border-black border-2 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>

          <button
            className="px-4 py-1 ml-4 bg-blue-700 rounded-lg text-white"
            onClick={filterList}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-1 bg-blue-700 text-white rounded-lg"
            onClick={filterMenuRatings}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className="px-4 m-4">
          <button className="px-4 py-1 bg-green-700 text-white rounded-lg">
            Pure Veg
          </button>
        </div>
      </div>

      <div className="flex flex-wrap px-16">
        {(filteredRestaurant.length
          ? filteredRestaurant
          : listOfRestaurants
        )?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};
