import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProjects = ({ relatedProjects }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef?.current;
    const scrollAmount = 320; // Width of one card plus gap
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleProjectClick = (projectId) => {
    // In a real app, this would navigate to the specific project
    navigate('/project-detail-view', { state: { projectId } });
  };

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground flex items-center">
          <Icon name="Grid3X3" size={20} className="mr-2" />
          Related Projects
        </h3>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
          >
            <Icon name="ChevronLeft" size={16} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
          >
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </div>
      {/* Projects Carousel */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {relatedProjects?.map((project, index) => (
          <motion.div
            key={project?.id}
            className="flex-shrink-0 w-80 bg-background rounded-xl overflow-hidden shadow-custom-sm hover:shadow-custom-md transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => handleProjectClick(project?.id)}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project?.status === 'Live' ?'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
                }`}>
                  {project?.status}
                </span>
              </div>

              {/* Quick View Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="icon"
                  className="w-8 h-8"
                >
                  <Icon name="Eye" size={14} />
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                {project?.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {project?.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project?.technologies?.slice(0, 3)?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    +{project?.technologies?.length - 3}
                  </span>
                )}
              </div>

              {/* Project Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={12} />
                  <span>{project?.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{project?.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Mobile Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {relatedProjects?.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-muted"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RelatedProjects;