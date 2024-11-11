import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppRoot from "./components/shared/includes/AppRoot";
import AllProducts from "./components/customer/products/AllProducts";
import Signup from "./components/customer/auth/Signup";
import Login from "./components/customer/auth/Login";
import ProdcutDetails from "./components/customer/products/ProductDetails";
import AllOrders from "./components/customer/orders/AllOrders";
import AdminOrders from "./components/admin/orders/AdminOrders";
import AdminProducts from "./components/admin/products/AdminProducts";
import Cart from "./components/customer/cart/Cart";

import "./less/base.less";
import "./less/auth.less";
import "./less/carousel.less";
import "./less/cart.less";
import "./less/forms.less";
import "./less/navigation.less";
import "./less/orders.less";
import "./less/products.less";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <AllProducts />,
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