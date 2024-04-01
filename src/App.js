import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header.js";
import { Body } from "./components/Body";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { RestaurantMenu } from "./components/RestaurantMenu.js";
import { RestaurantMenuList } from "./components/RestaurantMenuList.js";
import { CartProvider } from "./context/ContextItems.js";
import { Login } from "./components/Login.js";
import {Footer} from "./components/Footer.js"


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
