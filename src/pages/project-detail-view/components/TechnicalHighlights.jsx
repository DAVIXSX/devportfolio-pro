import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnicalHighlights = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      <motion.h3 
        className="text-xl font-semibold text-foreground mb-6 flex items-center"
        variants={itemVariants}
      >
        <Icon name="TrendingUp" size={20} className="mr-2" />
        Technical Highlights & Metrics
      </motion.h3>
      {/* Performance Metrics */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" variants={itemVariants}>
        {project?.metrics?.map((metric, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-muted/30 rounded-xl"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              metric?.type === 'performance' ? 'bg-success/20' :
              metric?.type === 'engagement'? 'bg-primary/20' : 'bg-accent/20'
            }`}>
              <Icon 
                name={metric?.icon} 
                size={24} 
                color={
                  metric?.type === 'performance' ? 'var(--color-success)' :
                  metric?.type === 'engagement' ? 'var(--color-primary)' :
                  'var(--color-accent)'
                }
              />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-1">{metric?.value}</h4>
            <p className="text-sm text-muted-foreground mb-2">{metric?.label}</p>
            <div className="w-full bg-border rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${
                  metric?.type === 'performance' ? 'bg-success' :
                  metric?.type === 'engagement'? 'bg-primary' : 'bg-accent'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${metric?.percentage}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Development Timeline */}
      <motion.div variants={itemVariants}>
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Clock" size={18} className="mr-2" />
          Development Timeline
        </h4>
        <div className="space-y-4">
          {project?.timeline?.map((phase, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                phase?.status === 'completed' ? 'bg-success' :
                phase?.status === 'current'? 'bg-primary' : 'bg-muted'
              }`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-medium text-foreground">{phase?.phase}</h5>
                  <span className="text-sm text-muted-foreground">{phase?.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground">{phase?.description}</p>
                {phase?.status === 'current' && (
                  <div className="mt-2 w-full bg-border rounded-full h-1">
                    <motion.div
                      className="h-1 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${phase?.progress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechnicalHighlights;