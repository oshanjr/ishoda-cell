import { Outlet } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';

export default function StorefrontLayout() {
  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0 pb-safe">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
