import type { Project } from '../types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'DSA Visualizer',
    description:
      'Interactive platform for visualizing Data Structures and Algorithms with real-time animations.',

    longDescription:
      'DSA Visualizer is an educational platform that helps students and developers understand algorithms through interactive visual execution. The application supports sorting visualizations, data structure animations, speed controls, and step-by-step execution.',

    technologies: [
      'React',
      'Vite',
      'CSS',
      'Redux',
      'D3.js'
    ],

    images: [
      '/projects/dsa-1.png',
      '/projects/dsa-2.png'
    ],

    liveUrl:
      'https://dsa-visualization-two.vercel.app/',

    githubUrl:
      'https://github.com/StudentTahseenraza/DSA-Visualization',

    featured: true,

    category: 'frontend',

    status: 'completed',

    features: [
      'Sorting visualization',
      'Tree visualization',
      'Linked List animations',
      'Stack and Queue simulation',
      'Animation speed control',
      'Step-by-step execution',
      'Interactive UI'
    ],

    challenges: [
      'Synchronizing animations with algorithm execution',
      'Maintaining performance during visualization',
      'Reusable component architecture'
    ],

    solutions: [
      'Built modular visualization engine',
      'Used controlled rendering updates',
      'Separated visualization and execution logic'
    ]
  },

  {
    id: '2',

    title: 'AI Spend Audit',

    description:
      'AI-powered SaaS platform to analyze and optimize AI subscription spending.',

    longDescription:
      'AI Spend Audit identifies unnecessary AI tool spending and recommends optimization opportunities using benchmark analysis, forecasting, audit scoring, and intelligent summaries.',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'OpenAI',
      'Vercel'
    ],

    images: [
      '/projects/spend-1.png',
      '/projects/spend-2.png'
    ],

    liveUrl:
      'https://credex-ai-spend-audit-five.vercel.app/',

    githubUrl:
      'https://github.com/StudentTahseenraza/credex-ai-spend-audit',

    featured: true,

    category: 'fullstack',

    status: 'completed',

    features: [
      'AI Spend Health Score',
      'Benchmark Intelligence',
      'Optimization Engine',
      'Forecast Dashboard',
      'PDF Reports',
      'Email Reports',
      'Shareable Audit Links'
    ],

    challenges: [
      'Building deterministic audit logic',
      'Generating meaningful recommendations',
      'Creating premium SaaS experience'
    ],

    solutions: [
      'Rule-based audit engine',
      'AI summarization',
      'Progressive loading experience'
    ]
  },

  {
    id: '3',

    title: 'AI Counsellor',

    description:
      'AI-powered study abroad planning and recommendation platform.',

    longDescription:
      'Structured AI decision platform guiding students from onboarding to university selection and application preparation.',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'AI APIs'
    ],

    images: [
      '/projects/counsellor-1.png',
      '/projects/counsellor-2.png'
    ],

    liveUrl:
      'https://study-navigator-ai.vercel.app/',

    githubUrl:
      'https://github.com/StudentTahseenraza/study-navigator-ai',

    featured: true,

    category: 'fullstack',

    status: 'completed',

    features: [
      'AI Counsellor',
      'University Discovery',
      'Dashboard',
      'Application Guidance',
      'Task Generation',
      'Progress Tracking'
    ],

    challenges: [
      'Structured recommendation workflow',
      'Decision locking mechanism',
      'Profile-driven recommendations'
    ],

    solutions: [
      'Stage-based architecture',
      'AI recommendation pipeline',
      'Dynamic recalculation system'
    ]
  },

  {
    id: '4',

    title: 'Team Task Manager',

    description:
      'AI-powered collaborative task and project management platform.',

    longDescription:
      'Realtime collaboration platform with project management, analytics, AI automation, and Socket.io communication.',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.io',
      'OpenRouter'
    ],

    images: [
      '/projects/task-1.png',
      '/projects/task-2.png'
    ],

    liveUrl:
      'https://team-task-manager-two-cyan.vercel.app/',

    githubUrl:
      'https://github.com/StudentTahseenraza/Team_Task_Manager',

    featured: true,

    category: 'fullstack',

    status: 'completed',

    features: [
      'JWT Authentication',
      'Role-Based Access',
      'Realtime Collaboration',
      'Drag Drop Board',
      'AI Task Generation',
      'Dashboard Analytics'
    ],

    challenges: [
      'Realtime synchronization',
      'Role security',
      'Performance optimization'
    ],

    solutions: [
      'Socket.io rooms',
      'JWT authorization',
      'Optimized rendering'
    ]
  },

  {
    id: '5',

    title:
      'Finance Dashboard Backend API',

    description:
      'Production-ready financial backend with RBAC and analytics.',

    longDescription:
      'Backend API for secure financial record management with authentication, analytics, role permissions, and enterprise-grade architecture.',

    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'JWT',
      'Swagger',
      'Render'
    ],

    images: [
      '/projects/finance-1.png'
    ],

    liveUrl:
      'https://finance-data-processing-and-access-5h1o.onrender.com/',

    githubUrl:
      'https://github.com/StudentTahseenraza/-Finance-Data-Processing-and-Access-Control-Backend',

    featured: false,

    category: 'backend',

    status: 'completed',

    features: [
      'JWT Authentication',
      'RBAC',
      'Swagger Docs',
      'Rate Limiting',
      'Analytics',
      'Audit Logging',
      'Refresh Tokens'
    ],

    challenges: [
      'Secure financial processing',
      'Role permission management',
      'Scalable architecture'
    ],

    solutions: [
      'Connection pooling',
      'Redis caching',
      'Security middleware'
    ]
  },
  {
  id: '6',

  title: 'TaskFlow – Task Management System',

  description:
    'Modern task management dashboard with authentication, analytics, and role-based access.',

  longDescription:
    'TaskFlow is a productivity platform built to manage tasks efficiently through role-based access, analytics, responsive UI, dark mode support, and optimized performance.',

  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'React Query',
    'React Router',
    'Recharts',
    'Framer Motion'
  ],

  images: [
    '/projects/taskflow-1.png',
    '/projects/taskflow-2.png'
  ],

  liveUrl:
    'https://task-manager-si-iota.vercel.app/',

  githubUrl:
    'https://github.com/StudentTahseenraza/Task-Manager-SI',

  featured: true,

  category: 'frontend',

  status: 'completed',

  features: [
    'JWT Authentication',
    'Task CRUD',
    'Search Filters Sorting',
    'Analytics Dashboard',
    'Role-Based Access',
    'Dark Mode',
    'Toast Notifications',
    'React Query Optimization'
  ],

  challenges: [
    'Managing permissions across roles',
    'Building responsive dashboards',
    'Optimizing API interactions'
  ],

  solutions: [
    'Role-based architecture',
    'React Query caching',
    'Reusable dashboard components'
  ]
},

{
  id: '7',

  title: 'CipherSQLStudio',

  description:
    'Interactive SQL learning platform with AI-powered hints and real-time execution.',

  longDescription:
    'CipherSQLStudio provides hands-on SQL learning with Monaco Editor, PostgreSQL execution, AI hint generation, authentication, progress tracking, and analytics.',

  technologies: [
    'React',
    'Vite',
    'Monaco Editor',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Gemini',
    'OpenRouter'
  ],

  images: [
    '/projects/sql-1.png',
    '/projects/sql-2.png'
  ],

  liveUrl:
    'https://cipher-schools-aasignment.vercel.app/',

  githubUrl:
    'https://github.com/StudentTahseenraza/CipherSchools-aasignment',

  featured: true,

  category: 'fullstack',

  status: 'completed',

  features: [
    'Interactive SQL Editor',
    'AI Hint Generation',
    'Real-time SQL Execution',
    'Assignment System',
    'Progress Tracking',
    'Admin Dashboard',
    'Authentication',
    'Analytics'
  ],

  challenges: [
    'Secure SQL execution',
    'AI-assisted learning flow',
    'Responsive editor experience'
  ],

  solutions: [
    'PostgreSQL sandbox',
    'LLM integrations',
    'Progressive learning system'
  ]
},

{
  id: '8',

  title: 'Employee Dashboard',

  description:
    'Advanced employee analytics dashboard with visualizations and productivity tools.',

  longDescription:
    'Modern React dashboard featuring employee analytics, charts, camera integration, voice controls, exports, maps, QR generation, and responsive UI.',

  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Recharts',
    'React Router',
    'Framer Motion',
    'jsPDF',
    'XLSX'
  ],

  images: [
    '/projects/employee-1.png',
    '/projects/employee-2.png'
  ],

  liveUrl:
    'https://employee-dashboard-xi-eight.vercel.app/',

  githubUrl:
    '',

  featured: false,

  category: 'frontend',

  status: 'completed',

  features: [
    'Authentication',
    'Charts & Analytics',
    'Camera Integration',
    'Voice Commands',
    'Keyboard Shortcuts',
    'Export CSV Excel PDF',
    'QR Code Generation',
    'Weather Integration'
  ],

  challenges: [
    'Complex dashboard state',
    'Responsive data visualization',
    'Browser API integration'
  ],

  solutions: [
    'Modular architecture',
    'Performance optimization',
    'Reusable visualization layer'
  ]
}
];