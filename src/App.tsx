import "./less/base.less";
import "./less/auth.less";
import "./less/carousel.less";
import "./less/cart.less";
import "./less/forms.less";
import "./less/navigation.less";
import "./less/orders.less";
import "./less/products.less";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProducts from "./components/customer/products/AllProducts";
import React from "react";
import AppRoot from "./components/shared/includes/AppRoot";
import Signup from "./components/customer/auth/Signup";
import Login from "./components/customer/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
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