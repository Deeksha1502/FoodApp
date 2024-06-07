import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  Header,
  NewBodyPage,
  Contact,
  Cart,
  ErrorDisplay,
  RestaurantMenuList,

  Login,
 
} from "./components";

import { resMenu } from "./utils/mockMenu";

const AppLayout = () => {
  return (
    <div className="app bg-gradient-to-r from-violet-200 to-pink-200">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <NewBodyPage />,
      },
      {
        path: "/menu",
        element: <RestaurantMenuList resMenu={resMenu} />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorDisplay />,
  },
]);
