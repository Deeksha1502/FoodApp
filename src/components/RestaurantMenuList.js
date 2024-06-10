import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const RestaurantMenuList = (props) => {
  const [showItems, setShowItems] = useState();
  const { resMenu, isCartPage = false } = props;

  const handleToggle = (index) => {
    if (showItems === index) {
      return setShowItems(null);
    }
    setShowItems(index);
  };

  const dispatch = useDispatch();

  const handleAddButton = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200 text-bold flex items-center">
        <ul>
          {resMenu?.map((item, index) => (
            <li key={index}>
              {isCartPage ? (
                <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200">
                  <h4 className="font-bold p-3">
                    {item.firstItem || item.secondItem}
                  </h4>
                  <p className="font-bold p-3">
                    {item.firstDescription || item.secondDescription}
                  </p>
                  <p className="font-bold p-3">
                    Cost: {item.firstItemCost || item.secondItemCost}
                  </p>
                  {(item.firstCloudinaryimageid ||
                    item.secondCloudinaryimageid) && (
                    <img
                      src={
                        item.firstCloudinaryimageid ||
                        item.secondCloudinaryimageid
                      }
                      alt={item.firstItem || item.secondItem}
                      className="w-28 h-28 m-3"
                    />
                  )}
                </div>
              ) : (
                
                <>
                  <span className="text-3xl my-6 font-bold">
                    {item.restaurantName}
                  </span>
                  <div
                    className="flex flex-col-2 justify-between py-6 cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="lg:pr-96 md:pr-36 font-bold text-xl">
                      Recommended(2)
                    </span>
                    <span>{showItems === index ? "➖" : "➕"}</span>
                  </div>
                  {showItems === index && (
                    <div>
                      {item.firstItem && (
                        <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200">
                          <h4 className="font-bold p-3">{item.firstItem}</h4>
                          <p className="font-bold p-3">
                            {item.firstDescription}
                          </p>
                          <p className="font-bold p-3">
                            Cost: {item.firstItemCost}
                          </p>
                          <div className="absolute">
                            <button
                              className="p-1 bg-slate-200 m-auto rounded-lg font-bold"
                              onClick={() =>
                                handleAddButton({
                                  firstItem: item.firstItem,
                                  firstDescription: item.firstDescription,
                                  firstItemCost: item.firstItemCost,
                                  firstCloudinaryimageid:
                                    item.firstCloudinaryimageid,
                                })
                              }
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
                      )}
                      {item.secondItem && (
                        <div className="w-9/12 mx-auto my-4 shadow-lg p-4 bg-gradient-to-r from-violet-200 to-pink-200">
                          <h4 className="font-bold p-3">{item.secondItem}</h4>
                          <p className="font-bold p-3">
                            {item.secondDescription}
                          </p>
                          <p className="font-bold p-3">
                            Cost: {item.secondItemCost}
                          </p>
                          <div className="absolute">
                            <button
                              className="p-1 bg-slate-200 m-auto rounded-lg font-bold"
                              onClick={() =>
                                handleAddButton({
                                  secondItem: item.secondItem,
                                  secondDescription: item.secondDescription,
                                  secondItemCost: item.secondItemCost,
                                  secondCloudinaryimageid:
                                    item.secondCloudinaryimageid,
                                })
                              }
                            >
                              Add +
                            </button>
                          </div>
                          {item.secondCloudinaryimageid && (
                            <img
                              src={item.secondCloudinaryimageid}
                              alt={item.secondItem}
                              className="w-28 h-28 pl-2 pt-2"
                            />
                          )}
                        </div>
                      )}
                      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black-700" />
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
