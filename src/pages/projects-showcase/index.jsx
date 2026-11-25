import { ArrowRight, ExternalLink, Github, Search, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AppImage from '../../components/AppImage';
import SiteFrame from '../../components/SiteFrame';
import { project } from '../../data/portfolio';

const projects = [project];

const ProjectsShowcase = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Work — Chemss Eddine Merabet';
  }, []);

  const categories = ['All', ...new Set(projects.map((item) => item.category))];
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const haystack = [item.title, item.summary, item.description, ...item.stack]
        .join(' ')
        .toLowerCase();
      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const clearFilters = () => {
    setQuery('');
    setActiveCategory('All');
  };

  return (
    <SiteFrame>
      <section className="page-hero page-hero--work">
        <div className="page-container">
          <Link to="/" className="back-link">Home <span aria-hidden="true">/</span> Work</Link>
          <p className="eyebrow">Selected work</p>
          <h1>Built around real workflows.</h1>
          <p className="page-hero__lead">
            A growing collection of product-focused work, starting with a detailed look at a
            pharmacy operations platform.
          </p>
        </div>
      </section>

      <section className="section section--projects">
        <div className="page-container">
          <div className="project-controls" aria-label="Filter projects">
            <label className="search-field">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search projects</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by project or technology"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear project search">
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </label>
            <div className="filter-chips">
              <span className="filter-chips__label"><SlidersHorizontal size={16} aria-hidden="true" /> Filter</span>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? 'filter-chip filter-chip--active' : 'filter-chip'}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="results-row" aria-live="polite">
            <p>{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found</p>
            {(query || activeCategory !== 'All') && (
              <button type="button" className="text-button" onClick={clearFilters}>Clear filters</button>
            )}
          </div>

          {filteredProjects.length ? (
            <div className="project-card-grid">
              {filteredProjects.map((item) => (
                <article className="work-card" key={item.id}>
                  <div className="work-card__image-wrap">
                    <AppImage src={item.heroImage} alt={`${item.title} dashboard`} className="work-card__image" />
                    <div className="work-card__image-overlay" aria-hidden="true" />
                    <span className="work-card__badge">{item.status}</span>
                    <span className="work-card__year">{item.year}</span>
                  </div>
                  <div className="work-card__body">
                    <p className="project-kicker">{item.category}</p>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <div className="tag-list" aria-label="Technologies used">
                      {item.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <div className="work-card__actions">
                      <Link to={`/projects/${item.id}`} className="inline-link inline-link--strong">
                        Read case study <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                      <a
                        href={item.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link"
                        aria-label={`Open ${item.title} repository on GitHub`}
                      >
                        <Github size={18} aria-hidden="true" />
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-state__icon"><Search size={25} aria-hidden="true" /></span>
              <h2>No work matches that search.</h2>
              <p>Try another term or reset the filters to see the full collection.</p>
              <button type="button" className="button button--secondary" onClick={clearFilters}>Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </SiteFrame>
  );
};

export default ProjectsShowcase;
