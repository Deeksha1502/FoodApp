import { useEffect } from "react";

const RestaurantMenu = () => {
  const RESTAURANT_LIST_API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url =
      "https://corsproxy.org/?" + encodeURIComponent(RESTAURANT_LIST_API);
    const response = await fetch(url);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const json = await response.json();

    console.log(json);
  };

  return (
    <div className="menu">
      <h1> Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
