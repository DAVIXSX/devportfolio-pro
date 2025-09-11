import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectHero = ({ project }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <motion.div 
      className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-card shadow-custom-lg mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Image/Video Container */}
      <div className="relative w-full h-full">
        <Image
          src={project?.heroImage}
          alt={`${project?.title} hero image`}
          className="w-full h-full object-cover"
        />
        
        {/* Video Play Overlay */}
        {project?.demoVideo && !isVideoPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={handlePlayVideo}
                iconName="Play"
                iconPosition="left"
                className="bg-white/90 text-primary hover:bg-white shadow-custom-md"
              >
                Watch Demo
              </Button>
            </motion.div>
          </div>
        )}

        {/* Video Player */}
        {isVideoPlaying && project?.demoVideo && (
          <div className="absolute inset-0 bg-black">
            <iframe
              src={project?.demoVideo}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${project?.title} demo video`}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        )}

        {/* Project Status Badge */}
        <div className="absolute top-4 left-4">
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project?.status === 'Live' ?'bg-success text-success-foreground' 
                : project?.status === 'In Development' ?'bg-warning text-warning-foreground' :'bg-muted text-muted-foreground'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project?.status}
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {project?.liveUrl && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
              >
                Live Demo
              </Button>
            </motion.div>
          )}
          
          {project?.githubUrl && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project?.githubUrl, '_blank')}
                iconName="Github"
                iconPosition="left"
                className="bg-white/90 hover:bg-white"
              >
                Code
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHero;