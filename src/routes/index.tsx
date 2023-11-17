import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from 'components';
import { PRIVATES } from './privates';
import { PUBLICS } from './publics';

export function AppRoutes() {
  const publicRoutes = Object.entries(PUBLICS).map(([key, { element, path }]) => (
    <Route key={key} element={element} path={path} />
  ));
  const privateRoutes = Object.entries(PRIVATES).map(([key, { element, path }]) => (
    <Route key={key} element={element} path={path} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {publicRoutes}
        </Route>
        <Route element={<PrivateRoutes />}>
          {privateRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
