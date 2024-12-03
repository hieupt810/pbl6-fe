import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Layout = lazy(() => import('./layout'));
const NotFound = lazy(() => import('./not-found'));
const ErrorPage = lazy(() => import('./error'));

const HomePage = lazy(() => import('./pages/Home'));
const ProductPage = lazy(() => import('./pages/Product'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />

          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
