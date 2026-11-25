import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SiteFrame from '../components/SiteFrame';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <SiteFrame>
      <section className="not-found-page page-container">
        <span className="not-found-page__number">404</span>
        <span className="not-found-page__icon"><Compass size={26} aria-hidden="true" /></span>
        <p className="eyebrow">Page not found</p>
        <h1>Looks like this page took a different route.</h1>
        <p>The link may be out of date. Let&apos;s get you back to something useful.</p>
        <div className="not-found-page__actions">
          <button type="button" className="button button--secondary" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} aria-hidden="true" /> Go back
          </button>
          <Link to="/" className="button button--primary">Back home <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </SiteFrame>
  );
};

export default NotFound;
