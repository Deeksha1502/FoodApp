import { useState } from "react";
import { TfiRulerAlt } from "react-icons/tfi";

export const RestaurantMenuList = (props) => {
  const { resMenu } = props;
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const [showItems, setShowItems] = useState(false);

  console.log(resMenu);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 text-bold flex justify-center items-center text-center">
        <ul>
          {resMenu.map((item) => (
            <li key={item.id}>
              <span className="text-3xl my-6 font-bold ">
                {item.restaurantName}
              </span>
              <div
                className="flex flex-col-2 justify-between py-6 cursor-pointer"
                onClick={handleClick}
              >
                <span className="flex justify-between font-bold text-xl">
                  Recommended
                </span>
                <span>⬇</span>
              </div>
              {showItems && (
                <div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gray-50 ">
                    <h4 className="font-bold">{item.firstItem}</h4>
                    <p className="font-bold">{item.firstDescription}</p>
                    <p>Cost: {item.firstItemCost}</p>

                    <div className="absolute">
                      <button className="p-2 bg-slate-200  m-auto rounded-lg">
                        Add +
                      </button>
                    </div>

                    {item.firstCloudinaryimageid && (
                      <img
                        src={item.firstCloudinaryimageid}
                        alt={item.firstItem}
                        className="flex justify-center items-center"
                      />
                    )}
                  </div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                    <h4 className="font-bold">{item.secondItem}</h4>
                    <p className="font-bold">{item.secondDescription}</p>
                    <p>Cost: {item.secondItemCost}</p>

                    <div className="absolute">
                      <button className="p-2 bg-slate-200  m-auto rounded-lg">
                        Add +
                      </button>
                    </div>

                    {item.secondCloudinaryimageid && (
                      <img
                        src={item.secondCloudinaryimageid}
                        alt={item.secondItem}
                      />
                    )}
                  </div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                    <h4 className="font-bold">{item.thirdItem}</h4>
                    <p className="font-bold">{item.thirdDescription}</p>
                    <p>Cost: {item.thirdItemCost}</p>
                    <div className="absolute">
                      <button className="p-2 bg-slate-200  m-auto rounded-lg">
                        Add +
                      </button>
                    </div>

                    {item.thirdCloudinaryimageid && (
                      <img
                        src={item.thirdCloudinaryimageid}
                        alt={item.thirdItem}
                      />
                    )}
                  </div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                    <h4 className="font-bold">{item.fourthItem}</h4>
                    <p className="font-bold">{item.fourthDescription}</p>
                    <p>Cost: {item.fourthItemCost}</p>
                    <div className="absolute">
                      <button className="p-2 bg-slate-200  m-auto rounded-lg">
                        Add +
                      </button>
                    </div>

                    {item.fourthCloudinaryimageid && (
                      <img
                        src={item.fourthCloudinaryimageid}
                        alt={item.fourthItem}
                      />
                    )}
                  </div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
                    <h4 className="font-bold">{item.fifthItem}</h4>
                    <p className="font-bold">{item.fifthDescription}</p>
                    <p>Cost: {item.fifthItemCost}</p>
                    <div className="absolute">
                      <button className="p-2 bg-slate-200 shadow-lg mx-16 m-auto rounded-lg">
                        Add +
                      </button>
                    </div>

                    {item.fifthCloudinaryimageid && (
                      <img
                        src={item.fifthCloudinaryimageid}
                        alt={item.fifthItem}
                        className="flex justify-center items-center"
                      />
                    )}
                  </div>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
