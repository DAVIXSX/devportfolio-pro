import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ExperienceTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: `Building scalable web applications using React, Node.js, and AWS. Architected microservices infrastructure that improved system performance. Mentored junior developers and established coding standards.`,
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      achievements: [
        'Significantly improved application load time',
        'Led migration to microservices architecture',
        'Implemented CI/CD pipeline for faster deployments'
      ],
      icon: 'Briefcase',
      color: 'bg-primary'
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      company: 'StartupHub Inc.',
      location: 'Austin, TX',
      type: 'Full-time',
      description: `Developed cross-platform mobile applications using React Native and Flutter. Created intuitive user experiences and integrated third-party APIs.`,
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'TypeScript'],
      achievements: [
        'Published multiple highly-rated mobile applications',
        'Successfully scaled applications to a large user base',
        'Dramatically reduced app crash rate'
      ],
      icon: 'Smartphone',
      color: 'bg-secondary'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      type: 'Contract',
      description: `Created responsive and accessible web interfaces for various clients. Collaborated with designers to implement pixel-perfect UIs.`,
      technologies: ['Vue.js', 'React', 'SASS', 'Webpack', 'Jest'],
      achievements: [
        'Successfully delivered multiple client projects on time',
        'Improved website performance scores significantly',
        'Implemented accessibility standards (WCAG 2.1)'
      ],
      icon: 'Monitor',
      color: 'bg-accent'
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebCraft Studios',
      location: 'New York, NY',
      type: 'Internship',
      description: `Assisted in developing and maintaining client websites. Gained experience with modern web technologies and best practices.`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Built multiple responsive websites',
        'Learned modern development practices',
        'Contributed to team productivity improvements'
      ],
      icon: 'Code',
      color: 'bg-success'
    }
  ];

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

  return (
    <section ref={sectionRef} className="relative bg-background py-16 lg:py-24 overflow-hidden">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '36px 36px', color: 'var(--border)' }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Professional </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise in web and mobile development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {experiences?.map((experience, index) => (
              <motion.div
                key={experience?.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Icon */}
                <div className={`flex-shrink-0 w-16 h-16 ${experience?.color} rounded-full flex items-center justify-center shadow-custom-md z-10`}> 
                  <Icon name={experience?.icon} size={24} color="white" />
                </div>

                {/* connector */}
                <div className="absolute left-8 top-16 w-6 h-0.5 bg-border" />

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-2xl p-6 shadow-custom-sm border border-border hover:shadow-custom-md transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {experience?.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <Icon name="Building" size={16} />
                        <span className="font-medium">{experience?.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        experience?.type === 'Full-time' ?'bg-primary/10 text-primary' :'bg-accent/10 text-accent'
                      }`}>
                        {experience?.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience?.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience?.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience?.achievements?.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;