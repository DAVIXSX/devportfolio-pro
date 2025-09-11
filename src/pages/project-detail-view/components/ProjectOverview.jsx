import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectOverview = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Project Title & Description */}
      <motion.div className="mb-6" variants={itemVariants}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {project?.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project?.description}
        </p>
      </motion.div>
      {/* Project Metadata Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        variants={itemVariants}
      >
        {/* Duration */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-semibold text-foreground">{project?.duration}</p>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="User" size={20} color="var(--color-secondary)" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="font-semibold text-foreground">{project?.role}</p>
          </div>
        </div>

        {/* Team Size */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Users" size={20} color="var(--color-accent)" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Team Size</p>
            <p className="font-semibold text-foreground">{project?.teamSize}</p>
          </div>
        </div>

        {/* Platform */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Smartphone" size={20} color="var(--color-success)" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Platform</p>
            <p className="font-semibold text-foreground">{project?.platform}</p>
          </div>
        </div>
      </motion.div>
      {/* Technology Stack */}
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Code" size={20} className="mr-2" />
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.map((tech, index) => (
            <motion.div
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverview;