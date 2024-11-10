import "./less/base.less";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./components/customer/products/AllProducts";
import React from "react";
import AppRoot from "./components/shared/includes/AppRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "products",
        element: <AllProducts />,
      },
    ]
  }
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}


export default App