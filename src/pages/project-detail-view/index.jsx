import { ArrowLeft, ArrowRight, CheckCircle2, Code2, ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppImage from '../../components/AppImage';
import SiteFrame from '../../components/SiteFrame';
import { project } from '../../data/portfolio';

const ProjectDetailView = () => {
  const { projectId } = useParams();
  const [activeImage, setActiveImage] = useState(null);
  const isProjectFound = projectId === project.id;
  const activeImageUrl = activeImage?.url?.startsWith('/')
    ? `${import.meta.env.BASE_URL}${activeImage.url.replace(/^\//, '')}`
    : activeImage?.url;

  useEffect(() => {
    document.title = isProjectFound
      ? `${project.title} — Chemss Eddine Merabet`
      : 'Project not found — Chemss Eddine Merabet';
  }, [isProjectFound]);

  useEffect(() => {
    if (!activeImage) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeImage]);

  if (!isProjectFound) {
    return (
      <SiteFrame>
        <section className="not-found-page page-container">
          <span className="not-found-page__number">404</span>
          <p className="eyebrow">Project not found</p>
          <h1>This case study isn&apos;t here.</h1>
          <p>The link may be outdated, or the project is still being prepared.</p>
          <Link to="/projects" className="button button--primary">Back to work <ArrowRight size={18} aria-hidden="true" /></Link>
        </section>
      </SiteFrame>
    );
  }

  return (
    <SiteFrame>
      <section className="project-hero">
        <div className="page-container">
          <Link to="/projects" className="back-button"><ArrowLeft size={17} aria-hidden="true" /> Back to work</Link>
          <div className="project-hero__grid">
            <div className="project-hero__copy">
              <p className="eyebrow">{project.category} · {project.year}</p>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="project-hero__actions">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="button button--primary">
                  View repository <Github size={18} aria-hidden="true" />
                </a>
                <a href="#gallery" className="button button--secondary">
                  Browse screens <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <button
              type="button"
              className="project-hero__visual"
              onClick={() => setActiveImage({ url: project.heroImage, label: 'Dashboard', caption: 'An at-a-glance view of pharmacy activity and key operational signals.' })}
              aria-label="Enlarge dashboard screenshot"
            >
              <AppImage src={project.heroImage} alt="Pharmacy Management System dashboard" />
              <span className="project-hero__visual-action"><Maximize2 size={17} aria-hidden="true" /> View full image</span>
            </button>
          </div>
          <dl className="project-facts">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Timeline</dt><dd>{project.duration}</dd></div>
            <div><dt>Platform</dt><dd>{project.platform}</dd></div>
            <div><dt>Focus</dt><dd>Operations & inventory</dd></div>
          </dl>
        </div>
      </section>

      <section className="section project-overview">
        <div className="page-container project-overview__grid">
          <div>
            <p className="eyebrow">The brief</p>
            <h2>Bring the moving parts of pharmacy operations into focus.</h2>
            <p className="project-overview__lead">{project.summary}</p>
          </div>
          <div className="overview-points">
            {project.highlights.map((item) => (
              <article key={item.title}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft project-approach">
        <div className="page-container">
          <div className="section-heading">
            <div><p className="eyebrow">Technical approach</p><h2>A practical foundation that leaves room to grow.</h2></div>
            <div className="tag-list" aria-label="Project technologies">
              {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
          <div className="approach-grid">
            {project.approach.map((item, index) => (
              <article key={item.title} className="approach-card">
                <span>0{index + 1}</span>
                <Code2 size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section project-gallery">
        <div className="page-container">
          <div className="section-heading">
            <div><p className="eyebrow">Interface tour</p><h2>Designed for a clear view of the work.</h2></div>
            <p className="section-heading__copy">Select a screen to view it at full size.</p>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item, index) => (
              <button
                type="button"
                key={item.label}
                className={`gallery-card ${index === 0 ? 'gallery-card--featured' : ''}`}
                onClick={() => setActiveImage(item)}
                aria-label={`Enlarge ${item.label} screenshot`}
              >
                <AppImage src={item.url} alt={item.caption} />
                <span className="gallery-card__overlay"><span>{item.label}</span><Maximize2 size={17} aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="project-next-step">
        <div className="page-container project-next-step__inner">
          <div><p className="eyebrow eyebrow--light">Have a similar challenge?</p><h2>Let&apos;s map a better workflow.</h2></div>
          <Link to="/contact" className="button button--light">Start a conversation <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      {activeImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={`${activeImage.label} screenshot`} onClick={(event) => event.target === event.currentTarget && setActiveImage(null)}>
          <div className="image-modal__content">
            <div className="image-modal__topbar">
              <div><strong>{activeImage.label}</strong><span>{activeImage.caption}</span></div>
              <button type="button" onClick={() => setActiveImage(null)} aria-label="Close image preview"><X size={20} aria-hidden="true" /></button>
            </div>
            <AppImage src={activeImage.url} alt={activeImage.caption} />
            <a href={activeImageUrl} target="_blank" rel="noreferrer" className="image-modal__external">Open original image <ExternalLink size={15} aria-hidden="true" /></a>
          </div>
        </div>
      )}
    </SiteFrame>
  );
};

export default ProjectDetailView;
