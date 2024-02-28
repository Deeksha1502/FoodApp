import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("This is filtered list ===>", filteredRestaurant);
  console.log("This is rest list ===>", listOfRestaurants);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    setListOfRestaurants(resList);
  }, []);
  // whenever the state variable updates react triggers a reconciliation cycle(rerenders the component)

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(listOfRestaurants);

  //   setListOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

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
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
              // setFilteredRestaurant(filteredList);
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
            console.log(listOfRestaurants);

            setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      {/* <div className="restaurant-container">  */}

      {/* {listOfRestaurants?(listOfRestaurants.map((restaurant)=> */}
      {/* <RestaurantCard key={restaurant.id} resData={restaurant}/>))} */}

      {/* </div> */}

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
