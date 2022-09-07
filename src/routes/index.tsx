import { PrivateRoutes } from 'components/others/route/PrivateRoutes';
import { PublicRoutes } from 'components/others/route/PublicRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRIVATES } from './privates';
import { PUBLICS } from './publics';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {Object.entries(PUBLICS).map(([key, props]) => <Route key={key} {...props} />)}
        </Route>
        <Route element={<PrivateRoutes />}>
          {Object.entries(PRIVATES).map(([key, props]) => <Route key={key} {...props} />)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
