import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const cuisines = resData.info.cuisines.join(", ");

  return (
    <div className="m-4 p-4 w-[250px] bg-white rounded-lg hover:bg-blue-50">
      <img
        className="rounded-md"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <div>
        <h3 className="border-l-red-400 font-bold py-4 text-lg">
          {resData.info.name}
        </h3>
        <h4>{cuisines}</h4>
        <h4>Avg Rating: {resData.info.avgRating}</h4>
        <h4>Cost For Two: {resData.info.costForTwo}</h4>
        <h4>Delivery Time: {resData.info.sla.slaString}</h4>
      </div>
    </div>
  );
};
