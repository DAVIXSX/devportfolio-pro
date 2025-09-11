import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsVisualization = () => {
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'JavaScript ES6+', level: 92, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: 'Smartphone',
      skills: [
        { name: 'React Native', level: 90, color: 'bg-purple-500' },
        { name: 'Flutter', level: 75, color: 'bg-blue-400' },
        { name: 'iOS Development', level: 70, color: 'bg-gray-600' },
        { name: 'Android Development', level: 72, color: 'bg-green-500' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-green-600' },
        { name: 'Python', level: 82, color: 'bg-yellow-600' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 80, color: 'bg-green-700' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'Settings',
      skills: [
        { name: 'Docker', level: 78, color: 'bg-blue-500' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'Git/GitHub', level: 92, color: 'bg-gray-800' },
        { name: 'CI/CD', level: 70, color: 'bg-purple-600' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues = {};
      skillCategories?.forEach((category) => {
        category?.skills?.forEach((skill) => {
          newValues[skill.name] = skill?.level;
        });
      });
      setAnimatedValues(newValues);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const categoryVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive view of my technical skills and experience.
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-all duration-300 h-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <Icon name={category.icon} size={18} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`${category.title}-${skill.name}`} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="font-medium text-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/about-skills'}
            iconName="User"
            iconPosition="right"
            className="mt-8"
          >
            View Full Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;