import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AboutSkillsPage from './pages/about-skills';
import PortfolioHomepage from './pages/portfolio-homepage';
import ProjectDetailView from './pages/project-detail-view';
import ProjectsShowcase from './pages/projects-showcase';
import ContactInquiry from './pages/contact-inquiry';

const Routes = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/about-skills" element={<AboutSkillsPage />} />
        <Route path="/portfolio-homepage" element={<PortfolioHomepage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailView />} />
        <Route path="/projects-showcase" element={<ProjectsShowcase />} />
        <Route path="/contact-inquiry" element={<ContactInquiry />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
