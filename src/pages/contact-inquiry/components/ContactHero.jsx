import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="MessageSquare" size={40} color="var(--color-primary)" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Let's Build Something
            <span className="text-primary block">Amazing Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Ready to turn your ideas into reality? I'm here to help you create 
            exceptional digital experiences that drive results and delight users.
          </motion.p>

          {/* Availability indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center space-x-3 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20"
          >
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for new projects</span>
          </motion.div>
        </motion.div>
      </div>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        {[
          { number: '9', label: 'Projects Completed', icon: 'CheckCircle' },
          { number: '24h', label: 'Average Response Time', icon: 'Clock' },
          { number: '98%', label: 'Client Satisfaction', icon: 'Star' }
        ]?.map((stat, index) => (
          <motion.div
            key={stat?.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat?.number}</div>
            <div className="text-sm text-muted-foreground">{stat?.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactHero;