import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import AboutSkillsPage from './pages/about-skills';
import ContactInquiry from './pages/contact-inquiry';
import PortfolioHomepage from './pages/portfolio-homepage';
import ProjectDetailView from './pages/project-detail-view';
import ProjectsShowcase from './pages/projects-showcase';

const routerBase = import.meta.env.BASE_URL === '/'
  ? undefined
  : import.meta.env.BASE_URL.replace(/\/$/, '');

const Routes = () => (
  <BrowserRouter basename={routerBase}>
    <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
        <Route path="/projects/:projectId" element={<ProjectDetailView />} />
        <Route path="/about" element={<AboutSkillsPage />} />
        <Route path="/contact" element={<ContactInquiry />} />

        {/* Legacy paths kept so existing shared links continue to work. */}
        <Route path="/portfolio-homepage" element={<Navigate to="/" replace />} />
        <Route path="/projects-showcase" element={<Navigate to="/projects" replace />} />
        <Route path="/about-skills" element={<Navigate to="/about" replace />} />
        <Route path="/contact-inquiry" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Routes;
