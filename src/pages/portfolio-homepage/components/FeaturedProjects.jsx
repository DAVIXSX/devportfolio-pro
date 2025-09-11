import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'pharmacy-management',
      title: "Pharmacy Management System",
      description: "A comprehensive pharmacy management solution that streamlines inventory management, prescription processing, and patient records. Features include automated stock alerts, sales reporting, and prescription tracking.",
      image: "/images/profile/Gemini_Generated_Image_c75ylic75ylic75y.png",
      technologies: ["Python", "Flask", "Werkzeug", "Jinja2"],
      category: "Web Application",
      status: "Live",
      demoUrl: "#",
      githubUrl: "https://github.com/DAVIXSX/pharmacy-management-system.git"
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-success/10 text-success border-success/20';
      case 'In Development':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const handleViewProject = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 sm:-top-24 left-1/2 -translate-x-1/2 w-[28rem] sm:w-[56rem] h-[28rem] sm:h-[56rem] bg-gradient-radial from-primary/15 via-transparent to-transparent blur-2xl sm:blur-3xl" />
        <motion.div
          className="absolute top-8 sm:top-16 right-4 sm:right-10 w-12 sm:w-24 h-12 sm:h-24 bg-primary/10 rounded-xl rotate-12"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-5 sm:bottom-10 left-3 sm:left-6 w-8 sm:w-16 h-8 sm:h-16 bg-secondary/10 rounded-xl -rotate-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-fluid-sm font-medium mb-3 sm:mb-4 ring-1 ring-primary/20">
            <Icon name="Code" size={14} className="mr-1.5 sm:mr-2 sm:!w-4 sm:!h-4" />
            Featured Work
          </span>
          <h2 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-3 sm:mb-4">
            A Curated Selection
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
            A mosaic of recent projects spanning mobile, web, and AI—crafted with care.
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[260px] gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-14"
        >
          {projects?.map((project, index) => (
            <motion.article
              key={project?.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={[
                'group relative overflow-hidden rounded-2xl border border-border bg-card shadow-custom-sm hover:shadow-custom-lg transition-all duration-500',
                // layout spans - responsive
                index === 0 ? 'sm:col-span-2 lg:col-span-4 lg:row-span-2' : '',
                index === 1 ? 'lg:col-span-2' : '',
                index === 2 ? 'lg:col-span-3' : '',
                index === 3 ? 'lg:col-span-3' : ''
              ].join(' ')}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Top badges */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border text-white ${getStatusColor(project?.status)}`}>
                  {project?.status}
                </span>
                <span className="px-2 sm:px-3 py-1 bg-background/90 text-white rounded-full text-xs font-medium">
                  {project?.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-end">
                <h3 className="text-fluid-xl md:text-fluid-2xl font-semibold text-white mb-2 drop-shadow-md group-hover:text-primary transition-colors">
                  {project?.title}
                </h3>
                <p className="text-white/80 mb-3 sm:mb-4 line-clamp-2 md:line-clamp-3 text-fluid-sm">
                  {project?.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project?.technologies?.slice(0, 4)?.map((tech) => (
                    <span key={tech} className="px-1.5 sm:px-2 py-1 bg-background/70 text-white rounded-md text-xs font-medium backdrop-blur">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <Button
                    as="a"
                    href={`/projects/${project.id}`}
                    variant="secondary"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewProject(project);
                    }}
                    className="text-xs sm:text-sm"
                  >
                    View Details
                  </Button>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(project?.demoUrl, '_blank')}
                      aria-label="View demo"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Icon name="ExternalLink" size={14} className="sm:!w-4 sm:!h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                      aria-label="View source code"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <Icon name="Github" size={14} className="sm:!w-4 sm:!h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/projects-showcase')}
            iconName="Grid3x3"
            iconPosition="right"
            className="hover:shadow-custom-md"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;