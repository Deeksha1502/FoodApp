import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/ContextItems.js";
import { appRouter } from "./Router.js";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
  </Provider>
);
