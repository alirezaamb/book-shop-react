import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import Layout from '../layout/Layout';
import AboutUsPage from '../pages/about-us/AboutUsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/about-us', element: <AboutUsPage /> },
    ],
  },
]);
