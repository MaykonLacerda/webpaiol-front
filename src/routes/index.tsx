import { PrivateRoutes } from 'components/Routes/PrivateRoutes';
import { PublicRoutes } from 'components/Routes/PublicRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRIVATES } from './privates';
import { PUBLICS } from './publics';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {Object.entries(PUBLICS).map(([key, value]) => {
            const { element, ...props } = value;
            const Component = element;

            return <Route key={key} element={Component} {...props} />;
          })}
        </Route>
        <Route element={<PrivateRoutes />}>
          {Object.entries(PRIVATES).map(([key, value]) => {
            const { element, ...props } = value;
            const Component = element;

            return <Route key={key} element={Component} {...props} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
