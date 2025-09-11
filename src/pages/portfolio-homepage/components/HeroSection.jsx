import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const animatedTexts = [
    "Full-Stack Developer",
    "Mobile App Creator", 
    "React Specialist",
    "UI/UX Enthusiast"
  ];

  const marqueeTech = [
    'React', 'TypeScript', 'Next.js', 'React Native', 'Node.js', 'GraphQL', 'Tailwind', 'Framer Motion', 'Vite', 'Docker'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden px-3 sm:px-4">
      {/* Gradient beams / glow layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-48 -left-12 sm:-left-32 w-[12rem] sm:w-[32rem] h-[12rem] sm:h-[32rem] rounded-full bg-primary/20 blur-xl sm:blur-3xl" />
        <div className="absolute -bottom-24 sm:-bottom-56 -right-8 sm:-right-24 w-[14rem] sm:w-[36rem] h-[14rem] sm:h-[36rem] rounded-full bg-secondary/20 blur-xl sm:blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[20rem] sm:w-[48rem] h-[20rem] sm:h-[48rem] bg-gradient-radial from-primary/20 via-transparent to-transparent blur-lg sm:blur-2xl" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-2 sm:left-10 w-12 sm:w-32 h-12 sm:h-32 bg-primary/10 rounded-full blur-md sm:blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-2 sm:right-10 w-16 sm:w-48 h-16 sm:h-48 bg-secondary/10 rounded-full blur-md sm:blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 sm:w-24 h-8 sm:h-24 bg-accent/10 rounded-full blur-sm sm:blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] sm:opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '15px 15px', color: 'var(--border)' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium ring-1 ring-primary/20">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-5">
            <h1 className="text-fluid-3xl sm:text-fluid-5xl md:text-fluid-6xl font-bold leading-tight px-2 sm:px-0">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent block xs:inline break-words">
                Chemss Eddine Merabet
              </span>
            </h1>
            {/* Animated Role Text */}
            <div className="h-10 xs:h-14 md:h-20 flex items-center justify-center px-2 sm:px-0">
              <motion.h2
                key={currentTextIndex}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-fluid-xl sm:text-fluid-3xl md:text-fluid-4xl font-semibold text-secondary text-center break-words"
              >
                {animatedTexts?.[currentTextIndex]}
              </motion.h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="px-2 sm:px-0">
            <p className="text-fluid-base md:text-fluid-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through innovative mobile and web applications. 
              Passionate about clean code, user-centric design, and cutting-edge technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 px-2 sm:px-0">
            <Button
              variant="default"
              size="lg"
              onClick={() => navigate('/projects-showcase')}
              iconName="FolderOpen"
              iconPosition="right"
              className="w-full xs:w-auto xs:min-w-[180px] hover:shadow-custom-lg text-sm sm:text-base"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact-inquiry')}
              iconName="Mail"
              iconPosition="right"
              className="w-full xs:w-auto xs:min-w-[150px] hover:bg-primary/10 text-sm sm:text-base"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Tech marquee */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40"
          >
            <div className="relative py-2 sm:py-3">
              <motion.div
                className="flex whitespace-nowrap gap-3 sm:gap-6 px-3 sm:px-6"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                {[...marqueeTech, ...marqueeTech]?.map((tech, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 sm:gap-2 text-fluid-sm text-muted-foreground bg-muted/60 px-2 sm:px-3 py-1 rounded-full ring-1 ring-border/60">
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex justify-center space-x-3 sm:space-x-6">
              {[
                { icon: 'Github', label: 'GitHub', href: 'https://github.com/DAVIXSX/DAVIXSX.git' },
                { icon: 'Linkedin', label: 'LinkedIn', href: '#' },
                { icon: 'Twitter', label: 'Twitter', href: '#' },
                { icon: 'Mail', label: 'Email', href: '#' }
              ]?.map((social) => (
                <motion.a
                  key={social?.label}
                  href={social?.href}
                  className="p-2.5 sm:p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group shadow-custom-sm touch-manipulation"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} className="sm:!w-5 sm:!h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-fluid-sm mb-2">Scroll to explore</span>
              <Icon name="ChevronDown" size={20} className="sm:!w-6 sm:!h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;