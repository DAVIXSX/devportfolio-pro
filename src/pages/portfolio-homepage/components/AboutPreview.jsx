import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AboutPreview = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: 'Code',
      title: '2+ Years Experience',
      description: 'Building scalable applications with modern technologies'
    },
    {
      icon: 'Smartphone',
      title: '2 Mobile Apps',
      description: 'Delivered across iOS and Android platforms'
    },
    {
      icon: 'Globe',
      title: '7 Web Projects',
      description: 'From startups to enterprise-level solutions'
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-muted/30">
      {/* soft shapes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div className="absolute -top-24 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl" animate={{ y: [0, 12, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute -bottom-24 -right-16 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 12, repeat: Infinity }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 ring-1 ring-primary/20">
              <Icon name="User" size={16} className="mr-2" />
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Passionate Developer & </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Problem Solver</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm Chemss Eddine Merabet, a full-stack developer with a passion for creating innovative digital solutions. 
              With over 5 years of experience in mobile and web development, I specialize in React, React Native, 
              and modern JavaScript frameworks. My goal is to build applications that not only look great but 
              also provide exceptional user experiences.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Expertise in React, Node.js, and mobile development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Strong focus on user experience and performance optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Collaborative approach with cross-functional teams</span>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/about-skills')}
              iconName="ArrowRight"
              iconPosition="right"
              className="hover:shadow-custom-md"
            >
              Learn More About Me
            </Button>
          </motion.div>

          {/* Right Content - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-custom-lg ring-1 ring-border/60">
                <Image
                  src="/images/profile/Gemini_Generated_Image_q63dulq63dulq63d.png"
                  alt="Chemss Eddine Merabet - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon name="Code" size={24} className="text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon name="Smartphone" size={20} className="text-secondary" />
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights?.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-background rounded-xl p-5 shadow-custom-sm border border-border hover:shadow-custom-md transition-all duration-300"
                >
                  <motion.div
                    variants={iconVariants}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3"
                  >
                    <Icon name={highlight?.icon} size={20} className="text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {highlight?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {highlight?.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;