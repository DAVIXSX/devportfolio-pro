import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectActions = ({ project }) => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);

  const handleDownload = async () => {
    setDownloadLoading(true);
    // Simulate download process
    setTimeout(() => {
      setDownloadLoading(false);
      // In real implementation, trigger actual download
      console.log('Downloading case study...');
    }, 2000);
  };

  const handleShare = async () => {
    setShareLoading(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: project?.title,
          text: project?.description,
          url: window.location?.href,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard?.writeText(window.location?.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setShareLoading(false);
    }
  };

  const actions = [
    {
      label: 'Live Application',
      icon: 'ExternalLink',
      variant: 'default',
      onClick: () => window.open(project?.liveUrl, '_blank'),
      disabled: !project?.liveUrl,
      description: 'View the live application'
    },
    {
      label: 'GitHub Repository',
      icon: 'Github',
      variant: 'outline',
      onClick: () => window.open(project?.githubUrl, '_blank'),
      disabled: !project?.githubUrl,
      description: 'Explore the source code'
    },
    {
      label: 'Download Case Study',
      icon: 'Download',
      variant: 'secondary',
      onClick: handleDownload,
      loading: downloadLoading,
      description: 'Get detailed project documentation'
    },
    {
      label: 'Share Project',
      icon: 'Share2',
      variant: 'ghost',
      onClick: handleShare,
      loading: shareLoading,
      description: 'Share this project with others'
    }
  ];

  return (
    <motion.div
      className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
        <Icon name="Zap" size={20} className="mr-2" />
        Project Actions
      </h3>
      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {actions?.map((action, index) => (
          <motion.div
            key={action?.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={action?.variant}
              onClick={action?.onClick}
              disabled={action?.disabled}
              loading={action?.loading}
              iconName={action?.icon}
              iconPosition="left"
              fullWidth
              className="h-auto p-4 justify-start"
            >
              <div className="text-left">
                <div className="font-medium">{action?.label}</div>
                <div className="text-sm opacity-70 mt-1">{action?.description}</div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
      {/* Project Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{project?.stats?.views}</div>
          <div className="text-sm text-muted-foreground">Views</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success">{project?.stats?.likes}</div>
          <div className="text-sm text-muted-foreground">Likes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{project?.stats?.shares}</div>
          <div className="text-sm text-muted-foreground">Shares</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary">{project?.stats?.downloads}</div>
          <div className="text-sm text-muted-foreground">Downloads</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectActions;