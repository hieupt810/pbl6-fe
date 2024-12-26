import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Layout = lazy(() => import('./layout'));
const NotFound = lazy(() => import('./not-found'));
const Error = lazy(() => import('./error'));

const Home = lazy(() => import('./pages/Home'));
const Details = lazy(() => import('./pages/Details'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
