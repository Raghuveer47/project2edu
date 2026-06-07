import { Outlet } from 'react-router';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
