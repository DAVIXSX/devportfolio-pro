import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/chemss-eddine-merabet-resume.pdf';
    link.download = 'Chemss_Eddine_Merabet_Resume.pdf';
    link?.click();
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/DAVIXSX/DAVIXSX.git',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[34rem] h-[34rem] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '44px 44px', color: 'var(--border)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-custom-lg ring-1 ring-border/60">
                <Image
                  src="/images/profile/Gemini_Generated_Image_q63dulq63dulq63d.png"
                  alt="Chemss Eddine Merabet - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shadow-custom-md"
              >
                <Icon name="Code" size={24} className="text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shadow-custom-md"
              >
                <Icon name="Smartphone" size={16} className="text-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Chemss Eddine Merabet</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer & Mobile App Specialist
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 6 years of experience creating innovative web and mobile applications. I specialize in React, Node.js, and React Native, helping startups and enterprises build scalable digital solutions.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and crafting user experiences that make a difference. Outside of coding, I contribute to open-source, mentor devs, and explore emerging tech.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleDownloadResume}
                  iconName="Download"
                  iconPosition="left"
                  className="shadow-custom-md hover:shadow-custom-lg"
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact-inquiry'}
                  iconName="Mail"
                  iconPosition="left"
                  className="hover:shadow-custom-sm"
                >
                  Get In Touch
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center space-x-6 pt-6"
              >
                <span className="text-sm text-muted-foreground font-medium">
                  Connect with me:
                </span>
                <div className="flex items-center space-x-4">
                  {socialLinks?.map((social) => (
                    <motion.a
                      key={social?.name}
                      href={social?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground ${social?.color} transition-all duration-200 shadow-custom-sm`}
                      aria-label={`Visit ${social?.name} profile`}
                    >
                      <Icon name={social?.icon} size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;