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
  Welcome,
  NewCart,
} from "./components";

import { resMenu } from "./utils/mockMenu";
import { RestaurantDetails } from "./components/RestaurantDetails";

const AppLayout = () => {
  return (
    <div className="app">
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
        element: <NewCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <ErrorDisplay />,
  },
]);
