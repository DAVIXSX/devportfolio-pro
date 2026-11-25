import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    error.__ErrorBoundary = true;
    window.__COMPONENT_ERROR__?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-background p-6 text-center">
          <div className="max-w-md">
            <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <AlertCircle size={27} aria-hidden="true" />
            </span>
            <p className="eyebrow">Unexpected interruption</p>
            <h1 className="mb-3 text-3xl font-bold text-foreground">Something went wrong.</h1>
            <p className="mb-7 text-muted-foreground">The page ran into an unexpected issue. Please try again from the home page.</p>
            <button type="button" className="button button--primary" onClick={() => { window.location.assign(import.meta.env.BASE_URL || '/'); }}>
              <ArrowLeft size={18} aria-hidden="true" /> Back home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
