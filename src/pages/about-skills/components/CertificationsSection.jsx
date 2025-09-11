import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      credentialId: 'AWS-SAA-2023-001234',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
      description: 'Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: 'https://aws.amazon.com/verification/001234',
      icon: 'Cloud',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'Meta React Developer Professional',
      issuer: 'Meta (Facebook)',
      date: 'January 2023',
      credentialId: 'META-RD-2023-005678',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
      description: 'Comprehensive certification covering advanced React concepts, state management, testing, and performance optimization.',
      skills: ['React.js', 'Redux', 'Testing', 'Performance'],
      verifyUrl: 'https://coursera.org/verify/005678',
      icon: 'Code',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'Google Mobile Web Specialist',
      issuer: 'Google',
      date: 'September 2022',
      credentialId: 'GOOGLE-MWS-2022-009876',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      description: 'Demonstrates proficiency in building progressive web apps, mobile-first design, and web performance optimization.',
      skills: ['PWA', 'Mobile Development', 'Performance', 'Accessibility'],
      verifyUrl: 'https://developers.google.com/certification/009876',
      icon: 'Smartphone',
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'June 2022',
      credentialId: 'MONGO-DEV-2022-112233',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop',
      description: 'Validates skills in MongoDB database design, querying, indexing, and application development best practices.',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Indexing'],
      verifyUrl: 'https://university.mongodb.com/verify/112233',
      icon: 'Database',
      color: 'bg-green-600'
    },
    {
      id: 5,
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'February 2022',
      credentialId: 'CKA-2022-445566',
      logo: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop',
      description: 'Demonstrates expertise in Kubernetes cluster administration, networking, security, and troubleshooting.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Networking'],
      verifyUrl: 'https://training.linuxfoundation.org/verify/445566',
      icon: 'Container',
      color: 'bg-blue-500'
    },
    {
      id: 6,
      title: 'Scrum Master Certified',
      issuer: 'Scrum Alliance',
      date: 'November 2021',
      credentialId: 'CSM-2021-778899',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      description: 'Certification in Agile methodologies, Scrum framework, and team leadership for software development projects.',
      skills: ['Agile', 'Scrum', 'Team Leadership', 'Project Management'],
      verifyUrl: 'https://scrumalliance.org/verify/778899',
      icon: 'Users',
      color: 'bg-purple-500'
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
    <section ref={sectionRef} className="relative bg-muted/30 py-16 lg:py-24 overflow-hidden">
      {/* accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 w-[26rem] h-[26rem] bg-gradient-radial from-secondary/15 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Certifications & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning in the ever-evolving tech landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications?.map((cert, index) => (
            <motion.div
              key={cert?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 group border border-border"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${cert?.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon name={cert?.icon} size={20} color="white" />
                  </div>
                  <div className="w-12 h-12 rounded-lg overflow-hidden ring-1 ring-border/60">
                    <Image
                      src={cert?.logo}
                      alt={`${cert?.issuer} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{cert?.date}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Icon name="Shield" size={12} className="text-success" />
                    <span className="text-xs text-success font-medium">Verified</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                    {cert?.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{cert?.issuer}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert?.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert?.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Credential ID:</p>
                      <p className="text-xs font-mono text-foreground">{cert?.credentialId}</p>
                    </div>
                    
                    <motion.a
                      href={cert?.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      <span>Verify</span>
                      <Icon name="ExternalLink" size={12} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-background rounded-2xl p-8 shadow-custom-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">6</h3>
              <p className="text-sm text-muted-foreground">Active Certifications</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="TrendingUp" size={20} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">15+</h3>
              <p className="text-sm text-muted-foreground">Skills Validated</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Clock" size={20} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">200+</h3>
              <p className="text-sm text-muted-foreground">Learning Hours</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Target" size={20} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;