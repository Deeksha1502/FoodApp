export const RestaurantCard = (props) => {
  const { resList } = props;

  return (
    <div className="m-4 p-4 w-[250px] bg-white rounded-lg hover:bg-blue-50">
      <img className="rounded-md" src={resList.cloudinaryImageId}></img>
      <div className="font-serif">
        <h3 className="border-l-red-400 font-bold py-4 text-lg">
          {resList.name}
        </h3>

        <h4>
          <p className="font-semibold">Cusines:</p>{" "}
          {resList.cuisines.join(", ")}
        </h4>

        <h4>
          <p className="font-semibold">Avg Rating:</p> {resList.avgRating}
        </h4>
        <h4>
          <p className="font-semibold">Cost For Two:</p> {resList.costForTwo}
        </h4>
        <h4>
          <p className="font-semibold">Delivery Time:</p>{" "}
          {resList.sla.slaString}
        </h4>
      </div>
    </div>
  );
};
