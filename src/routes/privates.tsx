import { Home } from 'pages/Home';
import { IRoutes } from 'types/routes';
import { AiOutlineHome } from 'react-icons/ai';

export const PRIVATES: IRoutes = {
  Home: {
    id: '1',
    element: <Home />,
    path: '/home',
    rules: ['admin', 'owner'],
    title: 'Principal',
    menu: {
      icon: <AiOutlineHome />,
    },
  },
};
