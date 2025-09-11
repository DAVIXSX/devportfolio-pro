import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  const handleLiveDemo = () => {
    window.open(project?.liveUrl, '_blank');
  };

  const handleViewCode = () => {
    window.open(project?.githubUrl, '_blank');
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="bg-background rounded-xl shadow-custom-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
                <p className="text-muted-foreground mt-1">{project?.category}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Project Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Action Buttons Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                  {project?.liveUrl && (
                    <Button
                      variant="secondary"
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
                      onClick={handleViewCode}
                      iconName="Github"
                      iconPosition="left"
                      className="flex-1 bg-background/90 backdrop-blur-sm"
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Project Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project?.fullDescription || project?.description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Key Features */}
                  {project?.features && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project?.features?.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Stats */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Project Details</h3>
                    <div className="space-y-3">
                      {project?.duration && (
                        <div className="flex items-center space-x-3">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <div>
                            <span className="text-sm font-medium text-foreground">Duration</span>
                            <p className="text-sm text-muted-foreground">{project?.duration}</p>
                          </div>
                        </div>
                      )}
                      {project?.teamSize && (
                        <div className="flex items-center space-x-3">
                          <Icon name="Users" size={16} className="text-muted-foreground" />
                          <div>
                            <span className="text-sm font-medium text-foreground">Team Size</span>
                            <p className="text-sm text-muted-foreground">{project?.teamSize}</p>
                          </div>
                        </div>
                      )}
                      {project?.role && (
                        <div className="flex items-center space-x-3">
                          <Icon name="User" size={16} className="text-muted-foreground" />
                          <div>
                            <span className="text-sm font-medium text-foreground">My Role</span>
                            <p className="text-sm text-muted-foreground">{project?.role}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                {project?.challenges && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Challenges & Solutions</h3>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project?.challenges}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;