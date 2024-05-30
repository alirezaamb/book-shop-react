import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import Layout from '../layout/Layout';
import AboutUsPage from '../pages/about-us/AboutUsPage';
import SingleCard from '../components/single-card/SingleCard';
import AuthPage from '../pages/signIn/AuthPage';
import AdminDashboardPage from '../pages/admin-dashboard/AdminDashboardPage';
import { localStorageGetter } from '../utils/localStorage';

const auth = localStorageGetter('Auth');
const renderRoutes = (role: string, isLogin: boolean) => {
  if (isLogin) {
    switch (role) {
      case 'admin':
        return [{ path: 'dashboard', element: <AdminDashboardPage /> }];
      case 'user':
        return [
          {
            path: '/',
            element: <Layout />,
            children: [
              { index: true, element: <HomePage /> },
              { path: 'products', element: <ProductsPage /> },
              { path: 'about-us', element: <AboutUsPage /> },
              { path: '/products/:productId', element: <SingleCard /> },
            ],
          },
        ];
      default:
        return [];
    }
  } else {
    return [];
  }
};

export const router = createBrowserRouter([
  auth.isLogin
    ? {
        path: 'signin',
        element: <AuthPage />,
      }
    : {
        path: '/',
        element: <AuthPage />,
      },
  ...renderRoutes(auth.role, auth.isLogin),
]);
