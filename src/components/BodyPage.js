import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { OFFLINE_MESSAGE } from "../utils/constants";
import { useProducts } from "../context/ContextItems";
import { Footer } from "../components/Footer";
import Background from "../assets/delivery1.png";

export const BodyPage = () => {
  const [searchText, setSearchText] = useState(" ");
  const [errorMessage, setErrorMessage] = useState(" ");

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
    if (searchText === " " || searchText === undefined) {
      setErrorMessage("Please enter valid text");
    }

    const filteredList = listOfRestaurants.filter((resList) =>
      resList.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>{OFFLINE_MESSAGE}</h1>;

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
    <div>
      <div className="flex flex-2 justify-between space-between col-span-3 mb-20">
        <div className="m-12 pl-14 w-2/5">
          <h3 className="mb-12 font-bold pt-16  text-6xl">
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
          className="shadow-lg dark:shadow-black/30 rounded-lg mx-auto w-3/4 lg:w-auto mr-40 mt-20 max-w-full h-1/2"
          alt="food logo"
         
        />
      </div>
      <div className="flex mt-4 font-Metrophobic">
        <div className="flex items-center ml-24 space-x-12">
          <button
            className="truncate py-1  font-Metrophobic h-10 px-5 text-blue-700 transition-colors duration-150 border border-blue-700  focus:shadow-lg hover:bg-blue-700 hover:text-indigo-100 text-lg"
            onClick={filterMenuRatings}
          >
            Top Rated restaurants
          </button>

          <button
            className="truncate font-Metrophobic mr-8 px-4 py-1 text-green-700 h-10 text-white-100 transition-colors duration-150 border border-green-700  focus:shadow-outline hover:bg-green-700 hover:text-green-100 text-lg"
            onClick={filterPureVeg}
          >
            Pure Veg
          </button>
        </div>
        <div className="flex-col my-4 px-60">
          <input
            type="text"
            className="py-2 ml-2 border-2 border-blue bg-white h-11 px-5 pr-16 rounded-l-full text-sm focus:shadow-outline"
            value={searchText}
            onChange={(e) => {
              setErrorMessage(" ");
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="py-1 pb-4 border-2 font-Metrophobic h-10 px-5 rounded-r-full focus:shadow-outline  text-lg"
            onClick={filterList}
          >
            Search
          </button>
          <div className="text-red-500 w-40">{errorMessage}</div>
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
      <Footer />
    </div>
  );
};
