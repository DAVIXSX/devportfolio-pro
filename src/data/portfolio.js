export const profile = {
  name: 'Chemss Eddine Merabet',
  shortName: 'Chemss',
  initials: 'CEM',
  title: 'Full-stack developer',
  location: 'Algeria',
  email: 'nextgendev.davis@gmail.com',
  phone: '+213 775995111',
  github: 'https://github.com/DAVIXSX',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const project = {
  id: 'pharmacy-management',
  title: 'Pharmacy Management System',
  category: 'Web application',
  year: '2024',
  status: 'Case study',
  summary:
    'A focused operations dashboard that brings medicines, inventory, orders, suppliers, and reports into one clear workspace.',
  description:
    'Designed to make the everyday work of a pharmacy easier to understand and manage, with an emphasis on accessible navigation, stock visibility, and practical reporting.',
  role: 'Full-stack development',
  duration: '2 months',
  platform: 'Responsive web app',
  repositoryUrl: 'https://github.com/DAVIXSX/pharmacy-management-system',
  heroImage: '/images/pharmacy-screenshots/dashboard.png',
  stack: [
    'Python',
    'Flask',
    'Firebase',
    'Firestore',
    'JavaScript',
    'Bootstrap',
  ],
  highlights: [
    {
      title: 'A calmer daily workflow',
      description:
        'A dashboard surfaces the information staff need most, so routine tasks start with a useful snapshot instead of a blank screen.',
    },
    {
      title: 'Inventory at a glance',
      description:
        'Medicines, quantities, suppliers, and stock warnings are organized into a single, easy-to-scan workflow.',
    },
    {
      title: 'Reporting that stays useful',
      description:
        'Sales and inventory views are designed to turn operational data into decisions without adding complexity.',
    },
  ],
  approach: [
    {
      title: 'Structure first',
      description:
        'The application is organized around the real objects a pharmacy manages: medicines, orders, suppliers, and reports.',
    },
    {
      title: 'Secure by design',
      description:
        'Authentication, role-aware workflows, and server-side validation provide a foundation for handling sensitive operational data responsibly.',
    },
    {
      title: 'Built to evolve',
      description:
        'A Flask application paired with Firebase services keeps the project approachable while leaving room for future features and scale.',
    },
  ],
  gallery: [
    {
      url: '/images/pharmacy-screenshots/dashboard.png',
      label: 'Dashboard',
      caption: 'An at-a-glance view of pharmacy activity and key operational signals.',
    },
    {
      url: '/images/pharmacy-screenshots/inventory.png',
      label: 'Inventory',
      caption: 'A streamlined inventory workspace for monitoring stock and supply details.',
    },
    {
      url: '/images/pharmacy-screenshots/medicines.png',
      label: 'Medicines',
      caption: 'A searchable medicine catalog designed for quick reference.',
    },
    {
      url: '/images/pharmacy-screenshots/orders.png',
      label: 'Orders',
      caption: 'A clear order-management view that keeps fulfillment work organized.',
    },
    {
      url: '/images/pharmacy-screenshots/suppliers.png',
      label: 'Suppliers',
      caption: 'Supplier details and purchasing relationships in one place.',
    },
    {
      url: '/images/pharmacy-screenshots/reports.png',
      label: 'Reports',
      caption: 'Reporting screens that make operational trends easier to review.',
    },
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces that feel clear, fast, and intentional.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    description: 'Reliable application logic and useful integrations.',
    skills: ['Python', 'Flask', 'Node.js', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Workflow',
    description: 'A practical, maintainable path from idea to release.',
    skills: ['Git & GitHub', 'Responsive UI', 'Accessibility', 'Testing', 'CI/CD'],
  },
];

export const principles = [
  {
    title: 'Clarity over noise',
    description:
      'Good interfaces reduce cognitive load. I focus on hierarchy, meaningful states, and the next useful action.',
  },
  {
    title: 'Thoughtful foundations',
    description:
      'Clean components, sensible data flow, and scalable structure make a product easier to improve after launch.',
  },
  {
    title: 'Collaboration that moves',
    description:
      'The best work comes from clear communication, early feedback, and turning complex problems into manageable steps.',
  },
];
