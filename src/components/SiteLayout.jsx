import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="site">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
