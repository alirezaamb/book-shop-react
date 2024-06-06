import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/products/ProductsPage";
import Layout from "../layout/Layout";
import AboutUsPage from "../pages/about-us/AboutUsPage";
import SingleCard from "../components/single-card/SingleCard";
import AuthPage from "../pages/signIn/AuthPage";
import AdminDashboardPage from "../pages/admin-dashboard/AdminDashboardPage";
import { Protected, ProtectedAdmin } from "./ProtectedRoute";
import LayoutAdmin from "../layout/LayoutAdmin";
import AddProductPage from "../pages/add-product/AddProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "products", element: <ProductsPage /> },
          { path: "about-us", element: <AboutUsPage /> },
          { path: "/products/:productId", element: <SingleCard /> },
        ],
      },
    ],
  },

  { path: "signin", element: <AuthPage /> },
  {
    path: "dashboard",
    element: <ProtectedAdmin />,
    children: [
      {
        path: "",
        element: <LayoutAdmin />,
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: "add-product", element: <AddProductPage /> },
        ],
      },
    ],
  },
]);
