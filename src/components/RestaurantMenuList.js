export const RestaurantMenuList = (props) => {
  const { resMenu } = props;
  console.log(resMenu);
  return (
    <div className="text-bold text-center">
      <h3>Menu items</h3>
      <ul>
        <li>{resMenu?.itemCards[1]?.card?.info?.name}</li>
      </ul>
    </div>
  );
};
