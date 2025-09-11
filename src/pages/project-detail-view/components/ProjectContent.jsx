import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectContent = ({ project }) => {
  const [activeSection, setActiveSection] = useState('challenge');

  const sections = [
    { id: 'challenge', label: 'Challenge', icon: 'Target' },
    { id: 'solution', label: 'Solution', icon: 'Lightbulb' },
    { id: 'implementation', label: 'Implementation', icon: 'Code' },
    { id: 'features', label: 'Key Features', icon: 'Star' }
  ];

  const sectionContent = {
    challenge: project?.challenge,
    solution: project?.solution,
    implementation: project?.implementation,
    features: project?.keyFeatures
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md mb-8">
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
        {sections?.map((section) => (
          <button
            key={section?.id}
            onClick={() => setActiveSection(section?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeSection === section?.id
                ? 'bg-primary text-primary-foreground shadow-custom-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={section?.icon} size={16} />
            <span>{section?.label}</span>
          </button>
        ))}
      </div>
      {/* Section Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="prose prose-gray max-w-none"
      >
        {activeSection === 'features' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionContent?.[activeSection]?.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={16} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {sectionContent?.[activeSection]}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectContent;