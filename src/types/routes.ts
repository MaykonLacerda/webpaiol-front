import { PathRouteProps } from 'react-router-dom';

export type IRoutes = {
  [key in string]: PathRouteProps & {
    id: string;
  };
};
