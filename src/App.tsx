import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppRoot from "./components/templates/AppRoot";
import AllProducts from "./components/pages/AllProducts";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ProdcutDetails from "./components/pages/ProductDetails";
import AllOrders from "./components/pages/Orders";
import AdminOrders from "./components/pages/admin/orders/AdminOrders";
import AdminProducts from "./components/pages/admin/products/AdminProducts";
import Cart from "./components/pages/Cart";
import { allProductsLoader } from "./utils/loaders";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <AllProducts />,
        loader: allProductsLoader,
      },
      {
        path: "products",
        children: [
          {
            path: ":id",
            element: <ProdcutDetails />
          }
        ],
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <AllOrders />,
      },
      {
        path: "admin",
        children: [
          {
            path: "products",
            element: <AdminProducts />,
            children: [
              {
                path: ":id",
                element: <ProdcutDetails />
              }
            ]
          },
          {
            path: "orders",
            element: <AdminOrders />
          }
        ],
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