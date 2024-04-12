import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import UploadPage from "../pages/upload/Upload";
import ProductPage from "../pages/productDetail/ProductDetail";
import MainLayout from "../pages/MainLayout";
import ProfilePage from "../pages/profile/Profile";
import ErrorPage from "../pages/error/Error";
import LoginRedirect from "../pages/login/LoginRedirect";

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
  {
    path: "/login",
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "oauth",
        element: <LoginRedirect />,
      },
    ],
  },
]);

export default router;
