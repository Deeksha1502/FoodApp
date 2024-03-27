import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OFFLINE_MESSAGE } from "../utils/constants";
import { useProducts } from "../context/ContextItems";
export const Body = () => {
  const [searchText, setSearchText] = useState();

  const {
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  } = useProducts();

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

  const filterPureVeg = () => {
    const filteredList = listOfRestaurants.filter(
      (resList) => resList.pureVeg === 1
    );
    setFilteredRestaurant(filteredList);
  };

  return (
    <div>
      <div className="flex">
        <div className="my-4 ml-6 px-16">
          <input
            type="text"
            className="py-1 ml-2 border-2 border-black bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:shadow-outline"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>

          <button
            className="py-1 ml-4 h-10 px-5 text-blue-700 transition-colors duration-150 border border-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-700 hover:text-indigo-100 font-serif text-lg"
            onClick={filterList}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="py-1 font-serif  h-10 px-5 text-blue-700 transition-colors duration-150 border border-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-700 hover:text-indigo-100 text-lg"
            onClick={filterMenuRatings}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className="px-4 m-4">
          <button
            className="font-serif px-4 py-1 text-green-700 h-10 text-white-100 transition-colors duration-150 border border-green-700 rounded-lg focus:shadow-outline hover:bg-green-700 hover:text-green-100 text-lg"
            onClick={filterPureVeg}
          >
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
