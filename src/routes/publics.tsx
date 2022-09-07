import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { IRoutes } from 'types/routes';

export const PUBLICS: IRoutes = {
  Login: { id: '1', element: <Login />, path: '/login' },
  Register: { id: '2', element: <Register />, path: '/register' },
};
