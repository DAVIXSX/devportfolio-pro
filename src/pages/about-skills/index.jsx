import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import ExperienceTimeline from './components/ExperienceTimeline';

const AboutSkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumb />
        </div>

        {/* Hero Section with Bio */}
        <HeroSection />

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chemss Eddine Merabet</h3>
              <p className="text-primary-foreground/80 mb-4">
                Full Stack Developer passionate about creating innovative digital solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/portfolio-homepage" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="/projects-showcase" className="text-primary-foreground/80 hover:text-white transition-colors">Projects</a></li>
                <li><a href="/about-skills" className="text-primary-foreground/80 hover:text-white transition-colors">About</a></li>
                <li><a href="/contact-inquiry" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <p className="text-primary-foreground/80 mb-2">nextgendev.davis@gmail.com</p>
              <p className="text-primary-foreground/80 mb-4">+213 775995111</p>
              <p className="text-primary-foreground/80">Algeria, Algiers</p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date()?.getFullYear()} Chemss Eddine Merabet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutSkillsPage;