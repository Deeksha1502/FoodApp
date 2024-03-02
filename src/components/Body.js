import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { CORS_PROXY_URL } from "../utils/config";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URI_COMPONENT =
      CORS_PROXY_URL + encodeURIComponent(RESTAURANT_LIST_API);
    const data = await fetch(URI_COMPONENT);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>

          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
