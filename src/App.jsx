import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import StackPage from './pages/StackPage.jsx';

const legacyRoutes = [
  ['/index.html', '/'],
  ['/work.html', '/work'],
  ['/services.html', '/services'],
  ['/stack.html', '/stack'],
  ['/about.html', '/about'],
  ['/contact.html', '/contact'],
];

export default function App() {
  return (
    <Routes>
      {legacyRoutes.map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<ProjectsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="stack" element={<StackPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
