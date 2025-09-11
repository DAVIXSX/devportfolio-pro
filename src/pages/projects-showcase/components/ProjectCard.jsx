import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleLiveDemo = (e) => {
    e?.stopPropagation();
    window.open(project?.liveUrl, '_blank');
  };

  const handleViewCode = (e) => {
    e?.stopPropagation();
    window.open(project?.githubUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl border border-border overflow-hidden shadow-custom-sm hover:shadow-custom-md transition-all duration-300 cursor-pointer"
      onClick={handleViewDetails}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleViewDetails()}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden" aria-hidden="true">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        {project?.status && (
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Live' ?'bg-success text-success-foreground' 
              : project?.status === 'In Progress' ?'bg-warning text-warning-foreground' :'bg-muted text-muted-foreground'
          }`}>
            {project?.status}
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project?.liveUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleLiveDemo}
              iconName="ExternalLink"
              iconPosition="left"
              className="flex-1"
            >
              Live Demo
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewCode}
              iconName="Github"
              iconPosition="left"
              className="flex-1 bg-background/90 backdrop-blur-sm"
            >
              Code
            </Button>
          )}
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <Icon 
            name="ArrowUpRight" 
            size={16} 
            className="text-muted-foreground group-hover:text-primary transition-colors duration-200" 
          />
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
              +{project?.technologies?.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            {project?.duration && (
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>{project?.duration}</span>
              </div>
            )}
            {project?.teamSize && (
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} />
                <span>{project?.teamSize}</span>
              </div>
            )}
          </div>
          <span className="text-primary font-medium">{project?.category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;