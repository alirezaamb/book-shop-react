import { Outlet } from 'react-router-dom';
import HeaderAdmin from './header/HeaderAdmin';

const LayoutAdmin = () => {
  return (
    <div className="mx-auto">
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
