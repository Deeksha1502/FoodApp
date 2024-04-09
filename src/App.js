import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/ContextItems.js";
import { appRouter } from "./Router.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>,
);
