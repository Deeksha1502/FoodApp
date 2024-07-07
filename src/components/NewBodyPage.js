import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { useProducts } from "../context/ContextItems";
import { Footer } from "../components/Footer";
import Background from "../assets/delivery1.png";
import { useDebounce } from "../utils/useDebounce";
export const NewBodyPage = () => {
  const [searchText, setSearchText] = useState(" ");
  const [errorMessage, setErrorMessage] = useState(" ");

  const debounceSearchText = useDebounce(searchText, 500);

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
    await new Promise((resolve) => {
      const resList = setTimeout(() => {
        resolve(resList);
      }, 1000);
    });
    setListOfRestaurants(resList);
  };

  const filterList = () => {
    if (debounceSearchText === " " || debounceSearchText === undefined) {
      setErrorMessage("Please enter valid text");
      setFilteredRestaurant(listOfRestaurants);
    } else {
      const filteredList = listOfRestaurants.filter((resList) =>
        resList.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredRestaurant(filteredList);
    }
  };

  const filterMenuRatings = () => {
    const filteredList = listOfRestaurants.filter(
      (resList) => resList.avgRating > 4.5,
    );

    setFilteredRestaurant(filteredList);
  };

  const filterPureVeg = () => {
    const filteredList = listOfRestaurants.filter(
      (resList) => resList.pureVeg === 1,
    );
    setFilteredRestaurant(filteredList);
  };
  console.log(Background);

  return (
    <div className="w-full bg-white min-w-full">
      <div className="flex flex-2 justify-between space-between col-span-3 mb-20 min-w-full">
        <div className="m-12 pl-14 w-auto">
          <h3 className="mb-12 font-bold lg:pt-16 md:pt-9 lg:text-6xl md:text-3xl">
            Discover a world of flavors delivered conveniently at your door
            step!
          </h3>
          <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
            where we believe in delivering not just meals, but edible adventures
            straight to your doorstep - because life's too short for boring
            bites!"
          </p>
        </div>
        <img
          src={Background}
          className="shadow-lg dark:shadow-black/30 rounded-lg mx-auto sm:max-w-lg md:max-w-xl mr-40 mt-20  h-1/2 md:w-96 sm:w-80"
          alt="food logo"
        />
      </div>
      <div className="flex mt-4 font-Metrophobic">
        <div className="flex flex-wrap justify-center sm:justify-start items-center ml-24 space-x-12">
          <button
            className="truncate text-white bg-blue-700 hover:bg-blue-600 
      font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 flex sm:text-base md:text-lg"
            onClick={filterMenuRatings}
          >
            Top Rated Restaurants
          </button>

          <button
            className="truncate text-white bg-green-700 hover:bg-green-600 
      font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2 flex"
            onClick={filterPureVeg}
          >
            Pure Veg
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center lg:ml-96 lg:mb-5">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow sm:flex-grow-0 sm:w-auto focus:outline-none ml-2 border-2 border-blue bg-white h-12 px-5 pr-16 rounded-l-full text-sm sm:text-base focus:shadow-outline "
            value={searchText}
            onChange={(e) => {
              setErrorMessage(" ");
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className=" pb-4 sm:inline focus:outline-none border-2 px-5 rounded-r-full focus:shadow-outline  text-lg"
            onClick={filterList}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              viewBox="0 0 24 24"
              class="w-7 h-5 mt-2"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <div className="text-red-500 w-40">{errorMessage}</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {(filteredRestaurant.length
          ? filteredRestaurant
          : listOfRestaurants
        )?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resList={restaurant} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
