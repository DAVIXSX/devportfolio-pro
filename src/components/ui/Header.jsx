import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/portfolio';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' || location.pathname === '/portfolio-homepage';
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            <Code2 size={19} strokeWidth={2.4} />
          </span>
          <span className="brand__copy">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.title}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'nav-link--active' : ''}`}
              aria-current={isActive(item.to) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="header-cta">
          Start a project
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation" className="mobile-nav__links">
          {navigation.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={isMenuOpen ? 0 : -1}
              className={`mobile-nav__link ${isActive(item.to) ? 'mobile-nav__link--active' : ''}`}
              style={{ transitionDelay: isMenuOpen ? `${70 + index * 45}ms` : '0ms' }}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <span>Available remotely</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
