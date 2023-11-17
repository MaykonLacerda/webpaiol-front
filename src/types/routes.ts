import { ReactElement } from 'react';
import { PathRouteProps } from 'react-router-dom';

export type IRoutes = {
  [key in string]: PathRouteProps & {
    id: string;
    rules?: string[];
    title?: string;
    menu?: {
      icon: ReactElement;
    }
  };
};
