import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiClock, FiUsers, FiCode, FiLayers } from 'react-icons/fi';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import AppIcon from '../../components/AppIcon';

const BASE_URL = import.meta.env.BASE_URL;

// Mock projects data (in a real app, this would come from an API)
const projectsData = [
  {
    id: 'pharmacy-management',
    title: "Pharmacy Management System",
    description: "A comprehensive web-based solution designed to streamline pharmacy operations, manage inventory, process prescriptions, and maintain patient records with efficiency and accuracy.",
    heroImage: `${BASE_URL}images/pharmacy-screenshots/dashboard.png`,
    demoVideo: "#",
    status: "Live",
    duration: "2 months",
    role: "Full Stack Developer",
    teamSize: "1 developer",
    platform: "Web Application",
    technologies: ["Python", "Flask", "Firebase", "Firestore", "Google Cloud", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com/DAVIXSX/pharmacy-management-system.git",
    challenge: `The Challenge\n\nPrimary challenge: Deliver a secure, staff-friendly pharmacy workflow with reliable analytics while integrating a server-rendered Flask app with Firebase/Firestore's flexible, schemaless model.\n\nKey challenges:\n•  Bridging authentication layers\n•  Verify Firebase ID tokens server-side and map them to Flask sessions.\n•  Navigate CORS, SameSite, and Secure cookie flags; maintain sessions across tabs and refreshes.\n•  Handle token expiry, refresh, and reauthentication without disrupting active work.\n•  Normalizing inconsistent data\n•  Prices and totals may arrive as strings or numbers; dates as strings or timestamps.\n•  Ensure KPIs, charts, thresholds, and validations compute correctly regardless of source format.\n•  Time and timezone correctness\n•  Reconcile naive vs. timezone-aware timestamps; enforce a canonical timezone.\n•  Get "last 6 months" and "expiring soon" windows right across month boundaries and DST changes.\n•  Firestore performance at scale\n•  Avoid collection scans for analytics; design compound indexes and cursor-based pagination.\n•  Introduce pre-aggregations/background jobs as volume grows; bound query cardinality.\n•  Multilingual status semantics\n•  Normalize English/Arabic status labels (e.g., pending/processing/shipped and Arabic equivalents).\n•  Prevent miscounts in metrics and queries due to variant spellings or synonyms.\n•  Cross-collection data integrity\n•  Keep orders, inventory, medicines, and suppliers consistent in a schemaless store.\n•  Prevent orphaned references; enforce constraints with transactions/batched writes; ensure idempotency.\n•  Authorization beyond login\n•  Enforce role/permission checks server-side (Admin SDK bypasses client rules).\n•  Apply least-privilege for sensitive actions (adds/edits/voids/restocks).\n•  Input validation and UX\n•  Validate non-negative stock, numeric prices, and valid dates; sanitize user input.\n•  Keep forms simple and forgiving for busy staff; provide clear, localized error messages.\n•  Session and CSRF hardening\n•  Ensure all POST flows are CSRF-protected in dev and prod; align cookie flags and SSL assumptions.\n•  Standardize session lifetime and rotation policies.\n•  Resilience and environment parity\n•  Provide a robust mock/dev fallback when Firebase is unavailable without masking prod failures.\n•  Surface explicit, user-friendly error states; use retries/backoff for transient faults.\n•  Observability and audit\n•  Add structured logs, correlation IDs, and who-did-what trails.\n•  Maintain audit records for inventory and orders suitable for compliance review.\n•  Future file storage\n•  Enable secure, validated uploads (invoices, labels) to Cloud Storage with lifecycle rules.\n•  Use signed URLs and per-role access control to protect PHI/PII-adjacent artifacts.`,
    solution: `The Solution\n\nWe delivered a secure, staff-friendly pharmacy web application on Flask + Firebase/Firestore with reliable analytics and bilingual UX.\n\nOur solution included:\n\n• Authentication bridge and sessions\n•  Server-side verification of Firebase ID tokens and mapping to Flask sessions.\n•  Secure cookie configuration (HttpOnly, Secure, SameSite=None) and session rotation.\n•  Graceful token refresh and reauthentication flows that don't interrupt in-progress work.\n\n• Role-based access control (RBAC)\n•  Centralized role/permission model (e.g., Admin, Pharmacist, Clerk) enforced on the server.\n•  Declarative route guards for sensitive actions (add/edit/void/restock) and record-level checks.\n•  Clear "not authorized" feedback and audit logging for denied attempts.\n\n• Data normalization layer\n•  Typed models that coerce Firestore inputs (prices as Decimal, quantities as int, dates as tz-aware).\n•  Consistent serialization back to Firestore to prevent drift.\n•  Backfill/repair routines for legacy records.\n\n• Time and timezone correctness\n•  All internal timestamps stored and computed in UTC; display localized per user.\n•  Helpers for "last 6 months," month boundaries, and "expiring soon" windows with DST safety.\n\n• Firestore performance and scale\n•  Cursor-based pagination and bounded queries; no collection-wide scans in hot paths.\n•  Composite indexes for common filters and sorts; query planning documented.\n•  Pre-aggregated metrics for dashboards via scheduled jobs and incremental updates.\n•  Opportunistic caching for read-heavy reference data.\n\n• Multilingual status semantics (English/Arabic)\n•  Canonical status enum (normalized_status) derived from localized labels and synonyms.\n•  Bilingual search and filtering; UI always shows localized text while storing normalized values.\n\n• Cross-collection data integrity\n•  Transactions/batched writes to keep orders, inventory, medicines, and suppliers in sync.\n•  Reference validation and orphan prevention at the service layer.\n•  Idempotent operations and safeguards against double decrements/increments.\n\n• Form validation and staff-friendly UX\n•  Server- and client-side validation: non-negative stock, numeric prices, valid dates.\n•  Input masks, date pickers, and inline errors; forgiving defaults for busy workflows.\n•  Keyboard-first and mobile-responsive layouts for fast item entry.\n\n• Session and CSRF hardening\n•  Consistent CSRF protection across all POST endpoints in dev and prod.\n•  Security headers and cookie policies aligned with HTTPS-only deployments.\n\n• Resilience and environment parity\n•  Pluggable data backend with a mock/in-memory provider for development and CI.\n•  Clear user-facing error states, retries with backoff for transient errors, and health checks.\n\n• Observability and audit\n•  Structured JSON logging with correlation IDs for each request/job.\n•  Immutable audit trails: who did what and when for inventory and ordering actions.\n•  Metrics and alerts for error rates, latency, and failed jobs.\n\n• File storage and documents\n•  Secure uploads (invoices, labels) to Cloud Storage using signed URLs and MIME/type checks.\n•  Lifecycle policies for retention, server-side encryption, and least-privilege access controls.\n•  Metadata stored alongside domain records for quick retrieval and auditability.\n\n• Reporting and exports\n•  Comprehensive KPI dashboards backed by pre-aggregations.\n•  Export to CSV/Excel with consistent column schemas; bilingual labels where applicable.\n\n• Real-time inventory reliability\n•  Immediate stock adjustments on order create/cancel/return with transactional guarantees.\n•  Automatic low-stock and expiry alerts backed by normalized thresholds and schedules.`,
    implementation: `Technical Implementation\n\nThe system was built on Flask with Firestore and Cloud Storage, emphasizing security, reliability, and a staff-friendly, bilingual UI.\n\nKey technical decisions:\n\n• Backend architecture\n•  Flask with Blueprints and a service/repository layer; server-rendered Jinja2 templates with progressive enhancement for speed and simplicity.\n\n• Authentication and sessions\n•  Firebase Admin SDK for server-side ID token verification; short-lived, HttpOnly Secure cookies for Flask sessions; graceful token refresh without disrupting active work.\n\n• Role-based authorization (RBAC)\n•  Centralized role/permission model (Admin/Pharmacist/Clerk) enforced via decorators and record-level checks; permissions auditable and change-controlled.\n\n• Data store and access\n•  Google Cloud Firestore as the primary datastore using google-cloud-firestore; strongly-typed DTOs with Pydantic to normalize schemaless inputs and prevent drift.\n\n• Data normalization and currency/time handling\n•  Prices stored as Decimal; quantities as integers; all timestamps as UTC-aware datetime (zoneinfo); canonical status enum derived from localized labels (English/Arabic).\n\n• CSRF and security headers\n•  CSRF protection on all POST routes; cookie flags (Secure, HttpOnly, SameSite) aligned with HTTPS; Flask-Talisman for CSP, HSTS, and other headers; rate limiting on sensitive endpoints.\n\n• Query performance and indexing\n•  Cursor-based pagination (startAfter) and bounded queries; composite indexes for common filters/sorts; read-through cache for reference data.\n\n• Pre-aggregations and analytics\n•  Dashboard KPIs backed by incremental pre-aggregations stored in a metrics collection; scheduled refresh via Cloud Scheduler.\n\n• UI and validation\n•  Bootstrap 5 for responsive, accessible components; HTML5 + lightweight JS for client-side validation; input masks and date pickers; clear inline errors.\n\n• Internationalization (English/Arabic)\n•  Flask-Babel for translations, locale-aware formatting, and RTL/LTR support; storage uses normalized codes, UI renders localized labels.\n\n• File storage\n•  Google Cloud Storage for invoices/labels; signed URLs for upload/download; MIME/type and size validation; lifecycle rules and least-privilege access.\n\n• Observability and audit\n•  Structured JSON logging with correlation IDs; centralized error tracking; immutable audit_events for "who did what, when" across inventory and orders.\n\n• Resilience and environment parity\n•  Retries with backoff for transient errors; Firebase Emulator Suite for local dev; pluggable in-memory/mock provider for offline development.\n\n• Testing and CI/CD\n•  Pytest with fixtures targeting the emulator; contract tests; formatting/linting (black, ruff, isort); type checks (mypy); CI pipeline gates.\n\n• Backups and retention\n•  Scheduled Firestore exports to GCS; Storage lifecycle policies; documented recovery procedures and periodic restore drills.`,
    keyFeatures: [
      { 
        title: "Inventory Management", 
        description: "Real-time stock tracking with automatic reorder thresholds, batch/lot and expiry management, and barcode-ready workflows." 
      },
      { 
        title: "Prescription Processing", 
        description: "Guided dispense flow with validation checks (dosage, duplicates), optional interaction flags, and clear status tracking from pending to fulfilled." 
      },
      { 
        title: "Patient Records", 
        description: "Comprehensive profiles with prescription history, allergies, and notes; privacy-aware access and quick retrieval during dispensing." 
      },
      { 
        title: "Billing & Payments", 
        description: "Itemized invoices with taxes/discounts, insurance mapping, partial/complete payments, printable receipts, and exportable statements." 
      },
      { 
        title: "Reporting & Analytics", 
        description: "KPI dashboards (sales, inventory turnover, expiries) with last-6-month trends, low-stock/expiry lists, and CSV/Excel exports." 
      },
      { 
        title: "User & Role Management", 
        description: "Role-based access control (Admin/Pharmacist/Clerk), per-action permissions, session security, and 'not authorized' feedback." 
      },
      { 
        title: "Supplier & Purchasing", 
        description: "Supplier directory, purchase orders, receiving workflows that update stock, and cost/price history for transparency." 
      },
      { 
        title: "Alerts & Notifications", 
        description: "Low-stock and expiring-soon alerts, order status updates, and escalation rules—all available in English and Arabic." 
      },
      { 
        title: "Document & File Storage", 
        description: "Secure uploads for invoices/labels with type/size validation, signed URLs for access, and lifecycle retention policies." 
      },
      { 
        title: "Audit & Compliance", 
        description: "Immutable activity trails (who did what, when), structured logs, and review-ready records for inventory and orders." 
      },
      { 
        title: "Multilingual Interface (English/Arabic)", 
        description: "RTL/LTR UI, localized labels and dates, and normalized status codes to ensure accurate metrics across languages." 
      }
    ],
    gallery: [
      { url: `${BASE_URL}images/pharmacy-screenshots/dashboard.png`, caption: "Main dashboard with key metrics and pharmacy overview", type: "Dashboard" },
      { url: `${BASE_URL}images/pharmacy-screenshots/inventory.png`, caption: "Inventory management system with real-time stock tracking", type: "Inventory" },
      { url: `${BASE_URL}images/pharmacy-screenshots/medicines.png`, caption: "Medicine catalog with detailed information and pricing", type: "Medicines" },
      { url: `${BASE_URL}images/pharmacy-screenshots/orders.png`, caption: "Order processing and management interface", type: "Orders" },
      { url: `${BASE_URL}images/pharmacy-screenshots/suppliers.png`, caption: "Supplier management and purchasing workflows", type: "Suppliers" },
      { url: `${BASE_URL}images/pharmacy-screenshots/reports.png`, caption: "Comprehensive reporting and analytics dashboard", type: "Reports" },
      { url: `${BASE_URL}images/pharmacy-screenshots/login.png`, caption: "Secure authentication with role-based access control", type: "Authentication" },
      { url: `${BASE_URL}images/pharmacy-screenshots/contact.png`, caption: "Contact and support interface for user assistance", type: "Support" }
    ],
    metrics: [
      { label: "System Uptime", value: "99.9%", percentage: 99.9, type: "uptime", icon: "Activity" },
      { label: "Prescription Accuracy", value: "100%", percentage: 100, type: "accuracy", icon: "CheckCircle" },
      { label: "Inventory Accuracy", value: "99.5%", percentage: 99.5, type: "inventory", icon: "Package" },
      { label: "API Error Rate (24h)", value: "0.12%", percentage: 99.88, type: "api", icon: "Server" },
      { label: "Median Response Time", value: "120 ms (P95: 420 ms)", percentage: 99, type: "performance", icon: "Zap" },
      { label: "Crash-Free Sessions", value: "99.93%", percentage: 99.93, type: "stability", icon: "Shield" },
      { label: "Test Coverage", value: "86%", percentage: 86, type: "coverage", icon: "CheckSquare" },
      { label: "Release Cadence", value: "2/week", percentage: 100, type: "deployment", icon: "GitPullRequest" },
      { label: "MTTR (last 90d)", value: "42 min", percentage: 95, type: "reliability", icon: "Clock" },
      { label: "SLA Compliance", value: "99.9%", percentage: 99.9, type: "sla", icon: "Award" },
      { label: "Vulnerabilities", value: "0 / 1 / 6", percentage: 90, type: "security", icon: "ShieldAlert" },
      { label: "DAU / MAU", value: "3,950 / 22,480 (17.6%)", percentage: 17.6, type: "engagement", icon: "Users" }
    ],
    stats: {
      views: "1.2K",
      likes: "256",
      shares: "42",
      downloads: "89"
    },
    relatedProjects: [
      {
        id: "hospital-management",
        title: "Hospital Management System",
        description: "Comprehensive hospital management solution for patient records and appointments.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
        category: "Web Application",
        url: "#",
        status: "Live"
      },
      {
        id: "medical-inventory",
        title: "Medical Inventory Tracker",
        description: "Specialized inventory management system for medical supplies and equipment.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop",
        category: "Web Application",
        url: "#",
        status: "In Development"
      }
    ]
  }
];

// Helper component for section containers
const Section = ({ title, icon, children, className = '' }) => (
  <motion.section 
    className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-6">
      {title && (
        <div className="flex items-center mb-6">
          {icon && <span className="mr-2 text-primary-500">{icon}</span>}
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
      )}
      {children}
    </div>
  </motion.section>
);

// Helper component for metadata items
const MetaItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-500 truncate">{label}</p>
      <p className="text-sm font-semibold text-gray-900 truncate">{value}</p>
    </div>
  </div>
);

// Helper component for long text content with read more/less
const ExpandableText = ({ text, maxLength = 300 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = text?.length > maxLength;
  
  const displayText = useMemo(() => {
    if (!text) return '';
    if (!needsTruncation || isExpanded) return text;
    return `${text.substring(0, maxLength)}...`;
  }, [text, maxLength, isExpanded, needsTruncation]);

  if (!text) return null;

  return (
    <div className="space-y-2">
      <div className="prose prose-sm max-w-none text-gray-700">
        {displayText.split('\n').map((paragraph, i) => (
          <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
        ))}
      </div>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-medium text-primary-600 hover:text-primary-700 focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

const ProjectDetailView = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchProject = () => {
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setProjectData(project);
      }
      setIsLoading(false);
    };

    fetchProject();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading project details...</div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6 text-gray-600">The project you're looking for doesn't exist or has been moved.</p>
        <Button
          onClick={() => navigate('/projects-showcase')}
          variant="outline"
          leftIcon={<FiArrowLeft className="w-4 h-4 mr-2" />}
        >
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projectId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50"
      >
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Back button and breadcrumbs */}
          <div className="flex items-center mb-8">
            <Button
              onClick={() => navigate(-1)}
              variant="ghost"
              size="sm"
              leftIcon={<FiArrowLeft className="w-4 h-4" />}
              className="mr-4"
            >
              Back
            </Button>
            <div className="text-sm text-gray-500">
              Projects / <span className="text-gray-900">{projectData.title}</span>
            </div>
          </div>

          {/* Project header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {projectData.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  {projectData.description}
                </p>
              </div>
            </div>

            {/* Project metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <MetaItem 
                icon={<FiClock className="w-5 h-5" />} 
                label="Duration" 
                value={projectData.duration} 
              />
              <MetaItem 
                icon={<FiUsers className="w-5 h-5" />} 
                label="Team Size" 
                value={projectData.teamSize} 
              />
              <MetaItem 
                icon={<FiCode className="w-5 h-5" />} 
                label="Role" 
                value={projectData.role} 
              />
              <MetaItem 
                icon={<FiLayers className="w-5 h-5" />} 
                label="Platform" 
                value={projectData.platform} 
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Overview */}
              <Section title="Project Overview" icon={<AppIcon name="Info" className="w-5 h-5" />}>
                <ExpandableText text={projectData.description} />
              </Section>

              {/* Challenge & Solution */}
              <Section title="Challenge & Solution" icon={<AppIcon name="AlertCircle" className="w-5 h-5" />}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">The Challenge</h3>
                    <ExpandableText text={projectData.challenge} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">The Solution</h3>
                    <ExpandableText text={projectData.solution} />
                  </div>
                </div>
              </Section>

              {/* Technical Implementation */}
              <Section title="Technical Implementation" icon={<AppIcon name="Code" className="w-5 h-5" />}>
                <ExpandableText text={projectData.implementation} />
              </Section>

              {/* Key Features */}
              {projectData.keyFeatures?.length > 0 && (
                <Section title="Key Features" icon={<AppIcon name="CheckCircle" className="w-5 h-5" />}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectData.keyFeatures.map((feature, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Project Gallery */}
              {projectData.gallery?.length > 0 && (
                <Section title="Gallery" icon={<AppIcon name="Image" className="w-5 h-5" />}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectData.gallery.map((item, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                        <img 
                          src={item.url} 
                          alt={item.caption} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {item.caption && (
                          <div className="p-3 bg-white">
                            <p className="text-sm font-medium text-gray-900">{item.caption}</p>
                            {item.type && (
                              <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                                {item.type}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <Section title="Project Stats" icon={<AppIcon name="BarChart2" className="w-5 h-5" />}>
                <div className="space-y-4">
                  {projectData.metrics?.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{metric.label}</span>
                        <span className="font-medium text-gray-900">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${metric.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Technologies */}
              <Section title="Technologies" icon={<AppIcon name="Cpu" className="w-5 h-5" />}>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>

            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailView;
