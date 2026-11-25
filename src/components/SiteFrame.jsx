import Header from './ui/Header';
import SiteFooter from './SiteFooter';

const SiteFrame = ({ children, className = '' }) => (
  <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" className={`site-main ${className}`.trim()}>
      {children}
    </main>
    <SiteFooter />
  </>
);

export default SiteFrame;
