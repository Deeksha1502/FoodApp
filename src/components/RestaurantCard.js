import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const cuisines = resData.info.cuisines.join(", ");

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{cuisines}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
