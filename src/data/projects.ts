import type { Project } from '../types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features and modern UI',
    longDescription: 'A complete e-commerce platform built with modern technologies featuring user authentication, payment processing, admin dashboard, and real-time inventory management. The platform supports multiple payment gateways and provides a seamless shopping experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker', 'TypeScript'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500',
      'https://images.unsplash.com/photo-1563013546-7e5c0538f0b5?w=500'
    ],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    features: [
      'User authentication & authorization with JWT',
      'Payment processing with Stripe integration',
      'Real-time inventory management system',
      'Admin dashboard with sales analytics',
      'Advanced product search and filtering',
      'Order tracking and management system',
      'Responsive design for all devices'
    ],
    challenges: [
      'Handling concurrent orders and inventory updates in real-time',
      'Implementing secure payment processing with multiple gateways',
      'Optimizing database queries for large product catalogs',
      'Managing user sessions and cart persistence'
    ],
    solutions: [
      'Used Redis for caching and real-time inventory updates',
      'Implemented idempotent payment API endpoints with retry logic',
      'Created optimized MongoDB indexes and aggregation pipelines',
      'Utilized React Context for state management across the application'
    ]
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and drag-drop interface',
    longDescription: 'A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Built with modern web technologies for optimal performance.',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500'
    ],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/username/taskapp',
    featured: true,
    category: 'fullstack',
    status: 'completed',
    features: [
      'Real-time collaboration with WebSockets',
      'Drag and drop interface for task management',
      'Team management and user roles',
      'Progress analytics and reporting',
      'File attachments and comments',
      'Due date reminders and notifications',
      'Mobile-responsive design'
    ],
    challenges: [
      'Real-time synchronization across multiple clients',
      'Handling concurrent drag-and-drop operations',
      'Maintaining data consistency across distributed systems',
      'Optimizing real-time updates for large teams'
    ],
    solutions: [
      'Implemented operational transformation for conflict resolution',
      'Used WebSocket rooms for team-based real-time updates',
      'Applied optimistic UI updates with rollback capability',
      'Implemented debouncing for frequent updates'
    ]
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with beautiful data visualizations',
    longDescription: 'A modern weather dashboard that provides real-time weather data, forecasts, and beautiful data visualizations. Features include location-based weather, historical data, and interactive charts.',
    technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Vuex', 'SASS'],
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      'https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=500'
    ],
    liveUrl: 'https://weather-demo.com',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
    category: 'frontend',
    status: 'completed',
    features: [
      'Real-time weather data from multiple sources',
      'Interactive charts and data visualizations',
      'Location-based weather forecasts',
      'Historical weather data analysis',
      'Responsive design for all screen sizes',
      'Offline functionality with service workers'
    ],
    challenges: [
      'Handling multiple API data sources and rate limiting',
      'Creating responsive and accessible data visualizations',
      'Managing state for complex weather data structures',
      'Implementing offline functionality with caching'
    ],
    solutions: [
      'Implemented API aggregation layer with caching',
      'Used Chart.js with accessibility enhancements',
      'Vuex for centralized state management',
      'Service workers for offline functionality and caching'
    ]
  },
  {
    id: '4',
    title: 'REST API Service',
    description: 'Scalable backend API with authentication and documentation',
    longDescription: 'A robust REST API service built with Node.js and Express, featuring comprehensive authentication, rate limiting, API documentation, and database integration.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Docker'],
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500'
    ],
    liveUrl: 'https://api-demo.com',
    githubUrl: 'https://github.com/username/api-service',
    featured: false,
    category: 'backend',
    status: 'completed',
    features: [
      'RESTful API design with proper HTTP status codes',
      'JWT authentication and authorization',
      'Rate limiting and request throttling',
      'Comprehensive API documentation with Swagger',
      'Database integration with MongoDB',
      'Docker containerization',
      'Error handling and logging'
    ],
    challenges: [
      'Implementing secure authentication system',
      'Handling rate limiting across distributed systems',
      'Creating comprehensive API documentation',
      'Database performance optimization'
    ],
    solutions: [
      'Used JWT with refresh token rotation for security',
      'Implemented Redis for distributed rate limiting',
      'Auto-generated Swagger documentation from code',
      'Database indexing and query optimization'
    ]
  },
  {
    id: '5',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with social features',
    longDescription: 'A React Native fitness application that tracks workouts, nutrition, and progress. Includes social features, workout plans, and integration with health platforms.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Health APIs', 'Expo'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1571019614244-c5c476de52e4?w=500'
    ],
    liveUrl: 'https://fitness-app.com',
    githubUrl: 'https://github.com/username/fitness-app',
    featured: false,
    category: 'mobile',
    status: 'in-progress',
    features: [
      'Workout tracking and planning',
      'Nutrition and calorie tracking',
      'Social features and challenges',
      'Integration with health platforms',
      'Progress analytics and charts',
      'Push notifications and reminders',
      'Cross-platform compatibility'
    ],
    challenges: [
      'Cross-platform compatibility and performance',
      'Real-time data synchronization',
      'Integration with multiple health APIs',
      'Offline functionality for workout tracking'
    ],
    solutions: [
      'Used React Native with platform-specific optimizations',
      'Firebase for real-time data synchronization',
      'Abstracted health API integrations',
      'Local storage with sync capabilities'
    ]
  }
];