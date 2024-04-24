import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  Header,
  BodyPage,
  About,
  Contact,
  ErrorDisplay,
  RestaurantMenuList,
  Login,
} from "./components";

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
        element: <BodyPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorDisplay />,
  },
]);
