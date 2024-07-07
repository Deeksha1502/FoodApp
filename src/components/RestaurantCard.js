export const RestaurantCard = (props) => {
  const { resList } = props;

  return (
    <div className="m-8 p-4 w-[250px] border-1 border-blue-700 bg-white rounded-lg hover:bg-purple-100 shadow-lg">
      <img
        className="rounded-md h-56 w-full"
        src={resList.cloudinaryImageId}
      ></img>
      <div className="font-Metrophobic">
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
