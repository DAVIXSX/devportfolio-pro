import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getBreadcrumbItems = () => {
    const path = location?.pathname;
    const items = [];

    // Always start with Home
    items?.push({
      label: 'Home',
      path: '/portfolio-homepage',
      isActive: false
    });

    // Add specific breadcrumb logic based on current path
    switch (path) {
      case '/portfolio-homepage':
        items[0].isActive = true;
        break;
      
      case '/projects-showcase':
        items?.push({
          label: 'Projects',
          path: '/projects-showcase',
          isActive: true
        });
        break;
      
      case '/project-detail-view':
        items?.push({
          label: 'Projects',
          path: '/projects-showcase',
          isActive: false
        });
        items?.push({
          label: 'Project Details',
          path: '/project-detail-view',
          isActive: true
        });
        break;
      
      case '/about-skills':
        items?.push({
          label: 'About & Skills',
          path: '/about-skills',
          isActive: true
        });
        break;
      
      case '/contact-inquiry':
        items?.push({
          label: 'Contact',
          path: '/contact-inquiry',
          isActive: true
        });
        break;
      
      default:
        break;
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  // Don't show breadcrumb on homepage
  if (location?.pathname === '/portfolio-homepage') {
    return null;
  }

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      {breadcrumbItems?.map((item, index) => (
        <React.Fragment key={item?.path}>
          {index > 0 && (
            <Icon name="ChevronRight" size={16} className="text-border" />
          )}
          
          {item?.isActive ? (
            <span className="text-foreground font-medium" aria-current="page">
              {item?.label}
            </span>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation(item?.path)}
              className="h-auto p-1 text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {item?.label}
            </Button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;