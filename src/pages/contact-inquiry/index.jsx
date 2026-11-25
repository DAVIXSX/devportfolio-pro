import { ArrowRight, CheckCircle2, Clock3, Github, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import SiteFrame from '../../components/SiteFrame';
import { profile } from '../../data/portfolio';

const initialForm = {
  name: '',
  email: '',
  projectType: 'Web application',
  message: '',
};

const ContactInquiry = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact — Chemss Eddine Merabet';
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status) setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `${form.projectType} inquiry from ${form.name}`;
    const body = [
      `Hello Chemss,`,
      '',
      `My name is ${form.name}.`,
      `You can reply to me at ${form.email}.`,
      `Project type: ${form.projectType}.`,
      '',
      form.message,
      '',
      'Best regards,',
      form.name,
    ].join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email draft is ready in your preferred mail app.');
  };

  return (
    <SiteFrame>
      <section className="page-hero page-hero--contact">
        <div className="page-container contact-hero">
          <div>
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" /> Open to thoughtful collaborations</p>
            <h1>Let&apos;s make your next idea easier to use.</h1>
            <p className="page-hero__lead">
              Share a little about your project, challenge, or product direction. I&apos;ll be happy to
              start the conversation.
            </p>
          </div>
          <div className="contact-hero__availability">
            <span className="status-pulse" aria-hidden="true" />
            <div><strong>Currently available</strong><span>For select freelance and collaborative work</span></div>
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="page-container contact-layout">
          <div className="contact-form-panel">
            <div className="contact-form-panel__header">
              <p className="eyebrow">Start here</p>
              <h2>Tell me about it.</h2>
              <p>Submitting this form opens a ready-to-send email in your mail app. No message is stored on this site.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>Your name <b>*</b></span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <span>Email address <b>*</b></span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <label>
                <span>What can I help with?</span>
                <select name="projectType" value={form.projectType} onChange={updateField}>
                  <option>Web application</option>
                  <option>Frontend development</option>
                  <option>Product / UI refresh</option>
                  <option>Technical collaboration</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                <span>A few details <b>*</b></span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="What are you building, who is it for, and where would you like support?"
                  rows={7}
                  maxLength={2000}
                  required
                />
                <small>{form.message.length}/2000</small>
              </label>
              <div className="contact-form__submit-row">
                <button type="submit" className="button button--primary">
                  Prepare email <Send size={17} aria-hidden="true" />
                </button>
                <span>Usually replies within one business day.</span>
              </div>
              {status && (
                <p className="form-status" role="status"><CheckCircle2 size={17} aria-hidden="true" /> {status}</p>
              )}
            </form>
          </div>

          <aside className="contact-sidebar" aria-label="Contact details">
            <div className="contact-detail-card">
              <p className="eyebrow">Direct contact</p>
              <h2>Prefer a direct route?</h2>
              <a className="contact-detail-link" href={`mailto:${profile.email}`}>
                <span><Mail size={18} aria-hidden="true" /></span>
                <div><small>Email</small><strong>{profile.email}</strong></div>
              </a>
              <a className="contact-detail-link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <span><Phone size={18} aria-hidden="true" /></span>
                <div><small>Phone</small><strong>{profile.phone}</strong></div>
              </a>
              <a className="contact-detail-link" href={profile.github} target="_blank" rel="noreferrer">
                <span><Github size={18} aria-hidden="true" /></span>
                <div><small>GitHub</small><strong>DAVIXSX <ArrowRight size={14} aria-hidden="true" /></strong></div>
              </a>
            </div>
            <div className="contact-note-card">
              <MapPin size={19} aria-hidden="true" />
              <div><strong>{profile.location} · Remote</strong><p>Comfortable collaborating across time zones and working asynchronously.</p></div>
            </div>
            <div className="contact-note-card contact-note-card--dark">
              <Clock3 size={19} aria-hidden="true" />
              <div><strong>Clear next steps</strong><p>Start with the context. We can work out scope, priorities, and a practical plan together.</p></div>
            </div>
          </aside>
        </div>
      </section>
    </SiteFrame>
  );
};

export default ContactInquiry;
