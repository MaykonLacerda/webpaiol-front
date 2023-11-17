import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateRoutes = () => {
  const location = useLocation();
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
