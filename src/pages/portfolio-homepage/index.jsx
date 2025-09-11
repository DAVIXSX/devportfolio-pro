import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import AboutPreview from './components/AboutPreview';
import SkillsVisualization from './components/SkillsVisualization';
import ContactTeaser from './components/ContactTeaser';

const PortfolioHomepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Chemss Eddine Merabet - Full Stack Developer | DevPortfolio Pro';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-14 sm:pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Projects Section */}
        <FeaturedProjects />
        
        {/* About Preview Section */}
        <AboutPreview />
        
        {/* Skills Visualization Section */}
        <SkillsVisualization />
        
        {/* Contact Teaser Section */}
        <ContactTeaser />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-fluid-xl font-semibold">DevPortfolio Pro</h3>
              <p className="text-primary-foreground/80 text-fluid-sm leading-relaxed">
                Crafting exceptional digital experiences through innovative development and user-centric design.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-fluid-base">Quick Links</h4>
              <ul className="space-y-2 text-fluid-sm">
                <li>
                  <a href="/projects-showcase" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 block py-1">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/about-skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 block py-1">
                    About & Skills
                  </a>
                </li>
                <li>
                  <a href="/contact-inquiry" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 block py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-fluid-base">Get in Touch</h4>
              <div className="space-y-2 text-fluid-sm text-primary-foreground/80">
                <p className="break-all sm:break-normal">nextgendev.davis@gmail.com</p>
                <p>+213 775995111</p>
                <p>Algeria, Algiers</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center text-fluid-sm text-primary-foreground/80 gap-2 sm:gap-0">
            <p className="text-center sm:text-left">© {new Date()?.getFullYear()} Chemss Eddine Merabet. All rights reserved.</p>
            <p className="text-center sm:text-right">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default PortfolioHomepage;