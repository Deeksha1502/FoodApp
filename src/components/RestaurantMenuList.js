export const RestaurantMenuList = (props) => {
  const { resMenu } = props;

  return (
    <div className="text-bold text-center">
      <h3>Menu items</h3>
      <ul>
        <li>{resMenu.name}</li>
      </ul>
    </div>
  );
};
