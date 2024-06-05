export const RestaurantMenuList = (props) => {
  const { resMenu } = props;
  console.log(resMenu);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 text-bold flex justify-center items-center text-center">
        <ul>
          {resMenu.map((item) => (
            <li key={item.id}>
              <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 ">
                <h2 className="text-3xl my-6 font-bold">
                  {item.restaurantName}
                </h2>
                <h4 className="font-bold">{item.firstItem}</h4>
                <p className="font-bold">{item.firstDescription}</p>
                <p>Cost: {item.firstItemCost}</p>

                {item.firstCloudinaryimageid && (
                  <img
                    src={item.firstCloudinaryimageid}
                    alt={item.firstItem}
                    className="flex justify-center items-center"
                  />
                )}
              </div>
              <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                <h4 className="font-bold">{item.secondItem}</h4>
                <p className="font-bold">{item.secondDescription}</p>
                <p>Cost: {item.secondItemCost}</p>

                {item.secondCloudinaryimageid && (
                  <img
                    src={item.secondCloudinaryimageid}
                    alt={item.secondItem}
                  />
                )}
              </div>
              <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                <h4 className="font-bold">{item.thirdItem}</h4>
                <p className="font-bold">{item.thirdDescription}</p>
                <p>Cost: {item.thirdItemCost}</p>

                {item.thirdCloudinaryimageid && (
                  <img src={item.thirdCloudinaryimageid} alt={item.thirdItem} />
                )}
              </div>
              <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                <h4 className="font-bold">{item.fourthItem}</h4>
                <p className="font-bold">{item.fourthDescription}</p>
                <p>Cost: {item.fourthItemCost}</p>

                {item.fourthCloudinaryimageid && (
                  <img
                    src={item.fourthCloudinaryimageid}
                    alt={item.fourthItem}
                  />
                )}
              </div>
              <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                <h4 className="font-bold">{item.fifthItem}</h4>
                <p className="font-bold">{item.fifthDescription}</p>
                <p>Cost: {item.fifthItemCost}</p>

                {item.fifthCloudinaryimageid && (
                  <img
                    src={item.fifthCloudinaryimageid}
                    alt={item.fifthItem}
                    className="flex justify-center items-center"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
