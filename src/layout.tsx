import { Outlet } from 'react-router';

import Headers from './components/Headers';

export default function Layout() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-sans text-gray-900 antialiased"
      suppressHydrationWarning
    >
      <Headers />
      <Outlet />
    </div>
  );
}
