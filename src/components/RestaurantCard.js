// import { CDN_URL } from "../utils/constants";
// import { useNavigate } from "react-router-dom";
import { resList } from "../utils/mockData";
import logo from "../assets/kfc.png";

export const RestaurantCard = (props) => {
  const { resList } = props;
  console.log("This is reslist", resList);

  // const navigate = useNavigate();

  // const navigateToDetails = (resId) => {
  //   navigate(`/restaurant/${resId}`);
  // };
  console.log("this is image", resList.cloudinaryImageId);

  console.log("this is logo", logo);
  return (
    <div
      className="m-4 p-4 w-[250px] bg-white rounded-lg hover:bg-blue-50"
      // onClick={() => navigateToDetails(resData.info.id)}
    >
      <img className="rounded-md" src={resList.cloudinaryImageId}></img>
      <div className="font-semibold">
        <h3 className="border-l-red-400 font-bold py-4 text-lg">
          {resList.name}
        </h3>

        <h4>Cusines: {resList.cuisines.join(", ")}</h4>

        <h4>Avg Rating: {resList.avgRating}</h4>
        <h4>Cost For Two: {resList.costForTwo}</h4>
        <h4>Delivery Time: {resList.sla.slaString}</h4>
      </div>
    </div>
  );
};
