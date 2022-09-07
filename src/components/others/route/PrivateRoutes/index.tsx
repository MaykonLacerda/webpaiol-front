import { Navigate, Outlet, useLocation } from 'react-router-dom';

export type Props = {
  children: JSX.Element;
}

export function PrivateRoutes() {
  const location = useLocation();
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
