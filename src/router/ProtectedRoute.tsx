import { Navigate, Outlet } from 'react-router-dom';
import { localStorageGetter } from '../utils/localStorage';

export const Protected = () => {
  const auth = localStorageGetter('Auth');

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};

export const ProtectedAdmin = () => {
  const auth = localStorageGetter('Auth');

  if (auth?.role === 'admin') {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" />;
  }
};
