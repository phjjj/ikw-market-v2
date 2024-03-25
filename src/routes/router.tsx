import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import UploadPage from "../pages/upload/Upload";
import ProductPage from "../pages/products/product/Product";
import MainLayout from "../pages/MainLayout";
import ProfilePage from "../pages/profile/Profile";
import ErrorPage from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile/:id",
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: "upload",
        children: [
          {
            index: true,
            element: <UploadPage />,
          },
        ],
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
