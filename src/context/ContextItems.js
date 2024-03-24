import { createContext } from "react";


export const ContextItems = createContext();
const [listOfRestaurants, setListOfRestaurants] = useState(resList);
const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
const [searchText, setSearchText] = useState();

export const ContextItemFunc = (childreb) =>
{
 

  listOfRestaurants, setListOfRestaurants,
  filteredRestaurant, setFilteredRestaurant,
  searchText, setSearchText
}