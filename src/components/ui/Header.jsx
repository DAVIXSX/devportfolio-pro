import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/portfolio-homepage', icon: 'Home' },
    { label: 'Projects', path: '/projects-showcase', icon: 'FolderOpen' },
    { label: 'About', path: '/about-skills', icon: 'User' },
    { label: 'Contact', path: '/contact-inquiry', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-999">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-custom"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-1000">
        <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1">
            <button
              onClick={() => handleNavigation('/portfolio-homepage')}
              className="flex items-center space-x-1.5 sm:space-x-2 group min-w-0"
            >
              <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-150 flex-shrink-0">
                <Icon name="Code" size={16} className="sm:!w-5 sm:!h-5" color="white" />
              </div>
              <span className="text-fluid-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-150 truncate hidden xs:block">
                Chemss Eddine Merabet
              </span>
              <span className="text-fluid-base font-semibold text-foreground group-hover:text-primary transition-colors duration-150 xs:hidden">
                CEM
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-150 hover:scale-102 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={14} className="lg:!w-4 lg:!h-4" />
                <span className="hidden lg:block">{item?.label}</span>
                <span className="lg:hidden text-xs">{item?.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="md:hidden p-1.5 h-8 w-8"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
          </Button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-1100 md:hidden animate-fade-in">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6 border-b border-border">
              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Code" size={16} className="sm:!w-5 sm:!h-5" color="white" />
                </div>
                <span className="text-fluid-lg font-semibold text-foreground truncate">
                  Chemss Eddine Merabet
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                className="p-1.5 h-8 w-8"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 sm:px-6 py-6 sm:py-8">
              <div className="space-y-3">
                {navigationItems?.map((item, index) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className={`flex items-center space-x-3 sm:space-x-4 w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-left transition-all duration-300 animate-slide-down ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-primary/10 shadow-custom-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                      isActivePath(item?.path) ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <Icon 
                        name={item?.icon} 
                        size={20} 
                        color={isActivePath(item?.path) ? 'var(--color-primary)' : 'currentColor'}
                      />
                    </div>
                    <span className="text-fluid-lg font-medium">{item?.label}</span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Footer */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-border">
              <p className="text-fluid-sm text-muted-foreground text-center">
                © 2025 DevPortfolio Pro
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;