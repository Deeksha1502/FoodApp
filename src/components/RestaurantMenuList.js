import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const RestaurantMenuList = (props) => {
  const { resMenu } = props;
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const [showItems, setShowItems] = useState(false);

  console.log(resMenu);
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(addItem());
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200 text-bold flex items-center">
        <ul>
          {resMenu.map((item) => (
            <li key={item.id}>
              <span className="text-3xl my-6 font-bold">
                {item.restaurantName}
              </span>
              <div
                className=" flex flex-col-2 justify-between py-6 cursor-pointer"
                onClick={handleClick}
              >
                <span className="lg:pr-96 md:pr-36 font-bold text-xl">
                  Recommended
                </span>
                <span>⬇</span>
              </div>
              {showItems && (
                <div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200 ">
                    <h4 className="font-bold p-3">{item.firstItem}</h4>
                    <p className="font-bold p-3">{item.firstDescription}</p>
                    <p className="font-bold p-3">Cost: {item.firstItemCost}</p>

                    <div className="absolute">
                      <button
                        className="p-1 bg-slate-200  m-auto rounded-lg"
                        onClick={handleAddButton}
                      >
                        Add +
                      </button>
                    </div>

                    {item.firstCloudinaryimageid && (
                      <img
                        src={item.firstCloudinaryimageid}
                        alt={item.firstItem}
                        className="w-28 h-28 m-3"
                      />
                    )}
                  </div>
                  <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200">
                    <h4 className="font-bold p-3">{item.secondItem}</h4>
                    <p className="font-bold p-3">{item.secondDescription}</p>
                    <p className="font-bold p-3">Cost: {item.secondItemCost}</p>

                    <div className="absolute">
                      <button
                        className="p-1 bg-slate-200  m-auto rounded-lg"
                        onClick={handleAddButton}
                      >
                        Add +
                      </button>
                    </div>

                    {item.secondCloudinaryimageid && (
                      <img
                        src={item.secondCloudinaryimageid}
                        alt={item.secondItem}
                        className=" justify-center items-center object-left w-28 h-28"
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
