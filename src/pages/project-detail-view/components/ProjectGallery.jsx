import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectGallery = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % project?.gallery?.length
      : (currentIndex - 1 + project?.gallery?.length) % project?.gallery?.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(project?.gallery?.[newIndex]);
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md mb-8">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
        <Icon name="Image" size={20} className="mr-2" />
        Project Gallery
      </h3>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project?.gallery?.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image?.url}
              alt={image?.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Icon 
                name="ZoomIn" 
                size={24} 
                color="white" 
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Image Type Badge */}
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                {image?.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e?.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
              >
                <Icon name="X" size={24} />
              </Button>

              {/* Navigation Buttons */}
              {project?.gallery?.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </Button>
                </>
              )}

              {/* Image */}
              <Image
                src={selectedImage?.url}
                alt={selectedImage?.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Caption */}
              {selectedImage?.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                  <p className="text-center">{selectedImage?.caption}</p>
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {project?.gallery?.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;