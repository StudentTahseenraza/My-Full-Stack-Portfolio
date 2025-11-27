export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  status: 'completed' | 'in-progress' | 'planned';
  features: string[];
  challenges: string[];
  solutions: string[];
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured?: boolean;
}