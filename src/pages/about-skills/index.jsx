import { ArrowRight, Braces, Compass, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppImage from '../../components/AppImage';
import SiteFrame from '../../components/SiteFrame';
import { principles, profile, project, skillGroups } from '../../data/portfolio';

const principleIcons = [Compass, ShieldCheck, HeartHandshake];

const AboutSkillsPage = () => {
  useEffect(() => {
    document.title = 'About — Chemss Eddine Merabet';
  }, []);

  return (
    <SiteFrame>
      <section className="page-hero page-hero--about">
        <div className="page-container about-intro">
          <div>
            <Link to="/" className="back-link">Home <span aria-hidden="true">/</span> About</Link>
            <p className="eyebrow">A little context</p>
            <h1>I care about how a product works <em>and</em> how it feels.</h1>
            <p className="page-hero__lead">
              I&apos;m {profile.name}, a {profile.title.toLowerCase()} based in {profile.location}. I enjoy
              translating practical problems into calm, usable software for people and teams.
            </p>
            <Link to="/contact" className="button button--primary">
              Work together <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <figure className="about-intro__visual">
            <div className="about-intro__code" aria-hidden="true">
              <span>01</span><code>const idea = <b>&apos;useful&apos;</b>;</code>
              <span>02</span><code>const process = <b>&apos;collaborative&apos;</b>;</code>
              <span>03</span><code>const outcome = <b>&apos;clear&apos;</b>;</code>
            </div>
            <div className="about-intro__photo">
              <AppImage src={project.heroImage} alt="Pharmacy Management System interface" />
            </div>
            <figcaption><Braces size={16} aria-hidden="true" /> Intentional systems, one useful detail at a time.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--values">
        <div className="page-container">
          <div className="section-heading section-heading--stacked">
            <p className="eyebrow">What guides the work</p>
            <h2>A steady approach to turning ideas into product.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => {
              const Icon = principleIcons[index];
              return (
                <article className="principle-card" key={principle.title}>
                  <span className="principle-card__number">0{index + 1}</span>
                  <span className="principle-card__icon"><Icon size={21} aria-hidden="true" /></span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container capabilities-layout">
          <div className="capabilities-layout__heading">
            <p className="eyebrow">Capabilities</p>
            <h2>A pragmatic toolkit for modern product work.</h2>
            <p>
              I choose tools based on what will keep a product maintainable, understandable, and
              pleasant to use—not simply what is newest.
            </p>
          </div>
          <div className="capability-list">
            {skillGroups.map((group, index) => (
              <article className="capability-item" key={group.title}>
                <div className="capability-item__topline">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.description}</p>
                <div className="tag-list tag-list--quiet">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--process">
        <div className="page-container process-panel">
          <div>
            <p className="eyebrow">From first brief to final detail</p>
            <h2>Make progress visible.</h2>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Understand</h3><p>Get clear on the people, workflow, and outcome that matter.</p></div></li>
            <li><span>02</span><div><h3>Shape</h3><p>Turn the problem into a focused, testable product direction.</p></div></li>
            <li><span>03</span><div><h3>Build</h3><p>Create an accessible, responsive experience with a dependable foundation.</p></div></li>
            <li><span>04</span><div><h3>Refine</h3><p>Use feedback to improve the details that make the greatest difference.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact-banner contact-banner--compact">
        <div className="page-container contact-banner__inner">
          <div>
            <p className="eyebrow eyebrow--light">Next step</p>
            <h2>Have a project to shape?</h2>
            <p>I&apos;d love to hear the context and help make the path forward clearer.</p>
          </div>
          <Link to="/contact" className="button button--light">
            Get in touch <Lightbulb size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
};

export default AboutSkillsPage;
