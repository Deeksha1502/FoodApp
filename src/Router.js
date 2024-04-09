import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  Header,
  Body,
  About,
  Contact,
  Error,
  RestaurantMenuList,
  Login,
  Scrollbutton,
} from "./components";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Scrollbutton />
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
        element: <Body />,
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
    errorElement: <Error />,
  },
]);
