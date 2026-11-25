import { ArrowRight, CheckCircle2, Code2, Github, Layers3, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppImage from '../../components/AppImage';
import SiteFrame from '../../components/SiteFrame';
import { profile, project, skillGroups } from '../../data/portfolio';

const strengths = [
  {
    icon: Layers3,
    title: 'Product-minded builds',
    description: 'Thoughtful interfaces that make complex work feel easier.',
  },
  {
    icon: Code2,
    title: 'End-to-end development',
    description: 'From component architecture to dependable application logic.',
  },
  {
    icon: Sparkles,
    title: 'Polished details',
    description: 'Responsive, accessible experiences that feel considered.',
  },
];

const PortfolioHomepage = () => {
  return (
    <SiteFrame>
      <section className="hero-section">
        <div className="hero-section__glow hero-section__glow--one" aria-hidden="true" />
        <div className="hero-section__glow hero-section__glow--two" aria-hidden="true" />
        <div className="page-container hero-section__grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Full-stack developer · Available remotely
            </p>
            <h1>
              Digital products with <span>clarity at their core.</span>
            </h1>
            <p className="hero-copy__lead">
              Hi, I&apos;m {profile.shortName}. I design and build useful web experiences that balance
              thoughtful interface design with reliable engineering.
            </p>
            <div className="hero-copy__actions">
              <Link to="/projects" className="button button--primary">
                Explore my work <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="button button--secondary">
                Let&apos;s talk <Mail size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-copy__meta" aria-label="Primary skills">
              <span>React</span>
              <span>Python / Flask</span>
              <span>Firebase</span>
              <span>Responsive UI</span>
            </div>
          </div>

          <div className="hero-visual reveal-up reveal-up--delayed">
            <div className="hero-visual__orbit hero-visual__orbit--one" aria-hidden="true" />
            <div className="hero-visual__orbit hero-visual__orbit--two" aria-hidden="true" />
            <div className="browser-frame">
              <div className="browser-frame__bar">
                <div className="browser-frame__dots" aria-hidden="true"><i /><i /><i /></div>
                <span>pharmacy-management.app</span>
                <span className="browser-frame__secure">Secure workspace</span>
              </div>
              <AppImage
                src={project.heroImage}
                alt="Pharmacy Management System dashboard"
                className="browser-frame__image"
              />
            </div>
            <div className="hero-project-note">
              <span className="hero-project-note__icon"><CheckCircle2 size={17} aria-hidden="true" /></span>
              <span><strong>Featured case study</strong><small>Pharmacy Management System</small></span>
            </div>
            <div className="hero-availability">
              <span className="status-pulse" aria-hidden="true" />
              Open to new work
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="What I build">
        <div className="page-container trust-strip__items">
          <p>Interface craft <span>×</span> Reliable systems <span>×</span> Practical outcomes</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> Follow on GitHub
          </a>
        </div>
      </section>

      <section className="section section--work">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>One system, many thoughtful details.</h2>
            </div>
            <Link to="/projects" className="inline-link">
              View all work <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <article className="feature-project">
            <div className="feature-project__image-wrap">
              <AppImage
                src="/images/pharmacy-screenshots/inventory.png"
                alt="Pharmacy Management System inventory screen"
                className="feature-project__image"
              />
              <span className="feature-project__image-label">Inventory workspace</span>
            </div>
            <div className="feature-project__content">
              <p className="project-kicker">{project.category} · {project.year}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="project-check-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    <span>{highlight.title}</span>
                  </li>
                ))}
              </ul>
              <div className="tag-list" aria-label="Technologies used">
                {project.stack.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <Link to={`/projects/${project.id}`} className="inline-link inline-link--strong">
                Read the case study <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container">
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">How I work</p>
            <h2>Good software should feel obvious in the best way.</h2>
            <p className="section-heading__copy">
              I bring a user-centered lens to each stage of a project, from shaping the first
              idea to refining the last interaction.
            </p>
          </div>
          <div className="strength-grid">
            {strengths.map(({ icon: Icon, title, description }) => (
              <article key={title} className="strength-card">
                <span className="strength-card__icon"><Icon size={21} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--skills">
        <div className="page-container skills-overview">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h2>Flexible skills, focused on the problem in front of us.</h2>
            <p className="section-heading__copy">
              The tools matter less than the outcome. These are the technologies I reach for to
              build scalable, accessible experiences.
            </p>
            <Link to="/about" className="inline-link inline-link--strong">
              More about my approach <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="skill-group-list">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-group__number">0{index + 1}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="tag-list tag-list--quiet">
                    {group.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="page-container contact-banner__inner">
          <div>
            <p className="eyebrow eyebrow--light">Have an idea in motion?</p>
            <h2>Let&apos;s make the next useful thing.</h2>
            <p>Tell me what you&apos;re working on, and we&apos;ll find a clear path forward.</p>
          </div>
          <Link to="/contact" className="button button--light">
            Start a conversation <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
};

export default PortfolioHomepage;
