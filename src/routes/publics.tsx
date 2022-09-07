import { Register } from 'pages/Register';
import { IRoutes } from 'types/routes';

export const PUBLICS: IRoutes = {
  Login: { id: '1', element: <div>Faça o login</div>, path: '/login' },
  Register: { id: '2', element: <Register />, path: '/register' },
};
