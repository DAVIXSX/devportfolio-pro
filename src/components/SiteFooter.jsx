import { ArrowUpRight, Code2, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation, profile } from '../data/portfolio';

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__intro">
          <Link to="/" className="brand brand--footer" aria-label={`${profile.name} — home`}>
            <span className="brand__mark" aria-hidden="true">
              <Code2 size={19} strokeWidth={2.4} />
            </span>
            <span className="brand__copy">
              <span className="brand__name">{profile.name}</span>
              <span className="brand__role">{profile.title}</span>
            </span>
          </Link>
          <p>
            Building clear, useful digital products from the first sketch to a polished interface.
          </p>
        </div>

        <div className="site-footer__column">
          <h2>Explore</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h2>Get in touch</h2>
          <ul className="footer-contact-list">
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{profile.location} · Remote</span>
            </li>
            <li>
              <Github size={16} aria-hidden="true" />
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} {profile.name}</span>
        <span>Designed and built with care.</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
