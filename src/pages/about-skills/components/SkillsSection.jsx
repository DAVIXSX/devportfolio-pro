import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 95, icon: 'Code' },
        { name: 'JavaScript/TypeScript', level: 92, icon: 'FileCode' },
        { name: 'HTML5 & CSS3', level: 98, icon: 'Layout' },
        { name: 'Tailwind CSS', level: 90, icon: 'Palette' },
        { name: 'Next.js', level: 88, icon: 'Zap' },
        { name: 'Vue.js', level: 75, icon: 'Component' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 90, icon: 'Cpu' },
        { name: 'Express.js', level: 88, icon: 'Globe' },
        { name: 'Python/Django', level: 82, icon: 'Code2' },
        { name: 'PostgreSQL', level: 85, icon: 'Database' },
        { name: 'MongoDB', level: 80, icon: 'HardDrive' },
        { name: 'GraphQL', level: 78, icon: 'Network' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: 'Smartphone',
      skills: [
        { name: 'React Native', level: 92, icon: 'Smartphone' },
        { name: 'Flutter', level: 75, icon: 'Tablet' },
        { name: 'iOS Development', level: 70, icon: 'Apple' },
        { name: 'Android Development', level: 68, icon: 'Android' },
        { name: 'Expo', level: 85, icon: 'Rocket' },
        { name: 'Firebase', level: 88, icon: 'Cloud' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'Settings',
      skills: [
        { name: 'Git & GitHub', level: 95, icon: 'GitBranch' },
        { name: 'Docker', level: 80, icon: 'Container' },
        { name: 'AWS', level: 75, icon: 'Cloud' },
        { name: 'Jest/Testing', level: 85, icon: 'CheckCircle' },
        { name: 'Webpack/Vite', level: 82, icon: 'Package' },
        { name: 'Figma', level: 78, icon: 'Figma' }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const SkillBar = ({ skill, index }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill?.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill?.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
              <Icon name={skill?.icon} size={16} className="text-primary" />
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">{skill?.name}</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-primary">{skill?.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${animatedLevel}%` }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-muted/30 py-16 lg:py-24 overflow-hidden">
      {/* accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-gradient-radial from-primary/15 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Technical Skills & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-custom-md'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
            <SkillBar key={skill?.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-background rounded-2xl p-8 shadow-custom-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">6+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">98%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;