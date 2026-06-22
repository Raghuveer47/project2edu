import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Binary,
  Blocks,
  BotMessageSquare,
  BrainCircuit,
  Calculator,
  ChartColumn,
  Cloud,
  Coffee,
  Container,
  FileSpreadsheet,
  GitBranch,
  Layers3,
  LayoutTemplate,
  LockKeyhole,
  MessageSquareText,
  MicVocal,
  Monitor,
  Paintbrush,
  Presentation,
  Puzzle,
  Router,
  ServerCog,
  SquareCode,
  Terminal,
  WandSparkles,
  Workflow,
} from 'lucide-react';

export type CurriculumId = 'data-science-ai' | 'core-python' | 'ai-mastery';

export type CourseCategory =
  | 'Basic Courses'
  | 'Advanced IT Courses'
  | 'Full Stack Courses'
  | 'Quick Courses'
  | 'Add on Courses';

export const COURSE_CATEGORY_ORDER: CourseCategory[] = [
  'Basic Courses',
  'Advanced IT Courses',
  'Full Stack Courses',
  'Quick Courses',
  'Add on Courses',
];

export type Course = {
  id: string;
  name: string;
  category: CourseCategory;
  level: 'Beginner' | 'Advanced';
  icon: LucideIcon;
  summary: string;
  curriculumId?: CurriculumId;
};

export const COURSES: Course[] = [
  {
    id: 'c-programming',
    name: 'C Programming (Entry Level)',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: Terminal,
    summary: 'Programming fundamentals in C for first-time learners and campus students.',
  },
  {
    id: 'java-entry',
    name: 'Java (Entry Level)',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: Coffee,
    summary: 'Core Java syntax, OOP basics, and problem-solving for entry-level developers.',
  },
  {
    id: 'python-entry',
    name: 'Python (Entry Level)',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: SquareCode,
    summary: 'Python fundamentals, scripting, and logic building for beginners.',
    curriculumId: 'core-python',
  },
  {
    id: 'web-html-css',
    name: 'Web Development — HTML & CSS',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: LayoutTemplate,
    summary: 'Build responsive web pages with HTML5, CSS3, and modern layout techniques.',
  },
  {
    id: 'basic-cloud',
    name: 'Basic Cloud Computing',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: Cloud,
    summary: 'Introduction to cloud concepts, services, and hands-on cloud platform basics.',
  },
  {
    id: 'networking',
    name: 'Networking',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: Router,
    summary: 'Networking fundamentals, protocols, and practical IT infrastructure concepts.',
  },
  {
    id: 'office-automation',
    name: 'Office Automation',
    category: 'Basic Courses',
    level: 'Beginner',
    icon: FileSpreadsheet,
    summary: 'Productivity tools and office software skills for professional workplaces.',
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: BrainCircuit,
    summary: 'ML workflows, model building, and applied AI for real-world use cases.',
    curriculumId: 'ai-mastery',
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: BotMessageSquare,
    summary: 'Design and deploy AI agents, automation pipelines, and intelligent assistants.',
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: Atom,
    summary: 'Quantum concepts, algorithms, and next-generation computing foundations.',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Computing & DevOps',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: Container,
    summary: 'CI/CD, infrastructure as code, and cloud-native deployment practices.',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security & Ethical Hacking',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: LockKeyhole,
    summary: 'Security fundamentals, vulnerability assessment, and ethical hacking techniques.',
  },
  {
    id: 'gen-ai',
    name: 'Gen AI',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: WandSparkles,
    summary: 'Generative AI tools, prompt systems, and production-ready Gen AI applications.',
  },
  {
    id: 'data-science-analytics',
    name: 'Data Science & Analytics',
    category: 'Advanced IT Courses',
    level: 'Advanced',
    icon: ChartColumn,
    summary: 'Data analysis, visualization, and analytics pipelines for business decisions.',
    curriculumId: 'data-science-ai',
  },
  {
    id: 'mern-fullstack',
    name: 'MERN Stack',
    category: 'Full Stack Courses',
    level: 'Beginner',
    icon: Layers3,
    summary: 'MongoDB, Express, React, and Node.js for end-to-end web applications.',
  },
  {
    id: 'java-fullstack',
    name: 'Java Full Stack',
    category: 'Full Stack Courses',
    level: 'Beginner',
    icon: ServerCog,
    summary: 'Java, Spring Boot, REST APIs, and front-end integration for enterprise apps.',
  },
  {
    id: 'python-fullstack',
    name: 'Python Full Stack',
    category: 'Full Stack Courses',
    level: 'Beginner',
    icon: Workflow,
    summary: 'Python back-end frameworks with modern front-end skills for full stack delivery.',
  },
  {
    id: 'dotnet-fullstack',
    name: '.NET Full Stack',
    category: 'Full Stack Courses',
    level: 'Advanced',
    icon: Blocks,
    summary: 'C#, ASP.NET Core, SQL Server, and integrated full stack solutions.',
  },
  {
    id: 'advanced-devops',
    name: 'Advanced DevOps & Cloud Add-ons',
    category: 'Full Stack Courses',
    level: 'Advanced',
    icon: GitBranch,
    summary: 'Advanced DevOps tooling, cloud add-ons, and deployment automation at scale.',
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'Quick Courses',
    level: 'Beginner',
    icon: MessageSquareText,
    summary: 'Effective prompting for AI tools, chatbots, and productivity workflows.',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'Quick Courses',
    level: 'Beginner',
    icon: Monitor,
    summary: 'Build and manage websites quickly with WordPress themes and plugins.',
  },
  {
    id: 'photoshop-canva',
    name: 'Photoshop & Canva',
    category: 'Quick Courses',
    level: 'Beginner',
    icon: Paintbrush,
    summary: 'Graphic design essentials for social media, branding, and digital content.',
  },
  {
    id: 'hobby-projects',
    name: 'Hobby Projects',
    category: 'Quick Courses',
    level: 'Beginner',
    icon: Puzzle,
    summary: 'Hands-on mini projects to explore coding, creativity, and practical building.',
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills & Communication',
    category: 'Add on Courses',
    level: 'Beginner',
    icon: Presentation,
    summary: 'Professional communication, presentation, and workplace readiness skills.',
  },
  {
    id: 'aptitude-reasoning',
    name: 'Quantitative Aptitude & Reasoning',
    category: 'Add on Courses',
    level: 'Beginner',
    icon: Calculator,
    summary: 'Aptitude, logical reasoning, and problem-solving for interviews and exams.',
  },
  {
    id: 'mock-interviews',
    name: 'Mock Interviews',
    category: 'Add on Courses',
    level: 'Beginner',
    icon: MicVocal,
    summary: 'Interview practice, feedback, and placement preparation with mentors.',
  },
];

export function getCourseByName(name: string): Course | undefined {
  return COURSES.find((c) => c.name === name);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return COURSES.filter((c) => c.category === category);
}
