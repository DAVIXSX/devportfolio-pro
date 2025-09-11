import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import Icon from '../../components/AppIcon';

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Projects data
  const projects = [
    {
      id: 'pharmacy-management',
      title: "Pharmacy Management System",
      category: "Web Application",
      description: "A comprehensive pharmacy management solution for inventory and prescription management.",
      fullDescription: "The Pharmacy Management System is a full-stack web application designed to streamline pharmacy operations. It provides a complete solution for managing inventory, processing prescriptions, and maintaining patient records. The system features automated stock alerts, sales reporting, and prescription tracking to improve efficiency and reduce errors in pharmacy workflows.",
      image: "/images/profile/Gemini_Generated_Image_c75ylic75ylic75y.png",
      status: "Live",
      role: "Full Stack Developer",
      liveUrl: "#",
      githubUrl: "https://github.com/DAVIXSX/pharmacy-management-system.git",
      technologies: ["Python", "Flask", "Werkzeug", "Jinja2", "SQLAlchemy", "PostgreSQL"],
      features: [
        "Inventory management with low-stock alerts",
        "Prescription processing and tracking",
        "Patient records management",
        "Sales and revenue reporting",
        "User authentication and role-based access control"
      ],
      challenges: "One of the main challenges was implementing real-time inventory updates across multiple users. This was solved using WebSocket for live updates and implementing database transactions to prevent race conditions during inventory updates.",
      createdAt: new Date('2024-03-15')
    }
  ];

  // Categories with counts
  const categories = useMemo(() => {
    const categoryCount = projects?.reduce((acc, project) => {
      acc[project.category] = (acc?.[project?.category] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(categoryCount)?.map(([name, count]) => ({
      name,
      count
    }));
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered?.filter(project => project?.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.features?.some(feature => 
          feature?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        )
      );
    }

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'name':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, activeCategory, searchTerm, sortBy]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    // Navigation is now handled by the Link component
  };

  return (
    <>
      <Helmet>
        <title>Projects Showcase - DevPortfolio Pro</title>
        <meta name="description" content="Explore my technical portfolio featuring mobile apps, web applications, and full-stack projects built with modern technologies." />
        <meta name="keywords" content="projects, portfolio, React, mobile apps, web development, full-stack" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb />
            
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-bold text-foreground mb-3 sm:mb-4">
                Projects Showcase
              </h1>
              <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my technical portfolio featuring innovative solutions across mobile, web, and full-stack development
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12"
            >
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name="FolderOpen" size={20} className="text-primary sm:!w-6 sm:!h-6" />
                </div>
                <div className="text-fluid-2xl font-bold text-foreground">{projects?.length}</div>
                <div className="text-fluid-xs text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name="CheckCircle" size={20} className="text-success sm:!w-6 sm:!h-6" />
                </div>
                <div className="text-fluid-2xl font-bold text-foreground">
                  {projects?.filter(p => p?.status === 'Live')?.length}
                </div>
                <div className="text-fluid-xs text-muted-foreground">Live Projects</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name="Code" size={20} className="text-accent sm:!w-6 sm:!h-6" />
                </div>
                <div className="text-fluid-2xl font-bold text-foreground">
                  {[...new Set(projects.flatMap(p => p.technologies))]?.length}
                </div>
                <div className="text-fluid-xs text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name="Users" size={20} className="text-secondary sm:!w-6 sm:!h-6" />
                </div>
                <div className="text-fluid-2xl font-bold text-foreground">
                  {Math.max(...projects?.map(p => parseInt(p?.teamSize) || 1))}
                </div>
                <div className="text-fluid-xs text-muted-foreground">Max Team Size</div>
              </div>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex-1 max-w-full sm:max-w-md">
                  <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    totalProjects={projects?.length}
                    filteredCount={filteredAndSortedProjects?.length}
                  />
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <SortDropdown
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                </div>
              </div>

              <FilterChips
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </motion.div>

            {/* Results Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-6 sm:mb-8"
            >
              <p className="text-muted-foreground text-fluid-sm">
                Showing <span className="font-medium text-foreground">{filteredAndSortedProjects?.length}</span> of{' '}
                <span className="font-medium text-foreground">{projects?.length}</span> projects
              </p>
              <div className="flex items-center space-x-2 text-fluid-sm text-muted-foreground">
                <Icon name="Filter" size={14} className="sm:!w-4 sm:!h-4" />
                <span>
                  {activeCategory !== 'All' ? activeCategory : 'All Categories'}
                  {searchTerm && ` • "${searchTerm}"`}
                </span>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProjectGrid 
                projects={filteredAndSortedProjects} 
                onProjectClick={handleProjectClick} 
              />
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProjectsShowcase;