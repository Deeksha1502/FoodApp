import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  Header,
  NewBodyPage,
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
        element: <NewBodyPage />,
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
