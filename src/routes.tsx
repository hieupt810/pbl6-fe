import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Layout = lazy(() => import('./layout'));
const NotFound = lazy(() => import('./not-found'));
const Error = lazy(() => import('./error'));

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const Details = lazy(() => import('./pages/Details'));
const Test = lazy(() => import('./pages/Test'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
