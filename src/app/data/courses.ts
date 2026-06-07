import type { LucideIcon } from 'lucide-react';
import { BarChart, Code2, Cpu, Globe, Layers, Server, Zap } from 'lucide-react';

export type CurriculumId = 'data-science-ai' | 'core-python' | 'ai-mastery';

export type Course = {
  id: string;
  name: string;
  level: 'Beginner' | 'Advanced';
  duration: string;
  icon: LucideIcon;
  summary: string;
  curriculumId?: CurriculumId;
};

export const COURSES: Course[] = [
  {
    id: 'java-fullstack',
    name: 'Java Full Stack',
    level: 'Beginner',
    duration: '16 weeks',
    icon: Code2,
    summary: 'Java, Spring Boot, REST APIs, SQL databases, and React for end-to-end enterprise apps.',
  },
  {
    id: 'python-fullstack',
    name: 'Python Full Stack',
    level: 'Beginner',
    duration: '16 weeks',
    icon: Zap,
    summary: 'Python, Django/Flask, PostgreSQL, and modern front-end skills for production web apps.',
  },
  {
    id: 'mern-fullstack',
    name: 'MERN Full Stack',
    level: 'Beginner',
    duration: '14 weeks',
    icon: Layers,
    summary: 'MongoDB, Express, React, and Node.js — build and deploy scalable full stack applications.',
  },
  {
    id: 'angular-fullstack',
    name: 'Angular Full Stack',
    level: 'Advanced',
    duration: '14 weeks',
    icon: Globe,
    summary: 'Angular, TypeScript, Node.js APIs, and cloud-ready architecture for corporate web products.',
  },
  {
    id: 'dotnet-fullstack',
    name: '.NET Full Stack',
    level: 'Advanced',
    duration: '16 weeks',
    icon: Server,
    summary: 'C#, ASP.NET Core, SQL Server, and front-end integration for enterprise-grade solutions.',
  },
  {
    id: 'react-node-fullstack',
    name: 'React & Node Full Stack',
    level: 'Beginner',
    duration: '14 weeks',
    icon: Layers,
    summary: 'React, Node.js, Express, and database design — from UI components to deployed APIs.',
  },
  {
    id: 'data-science-ai',
    name: 'Data Science with AI',
    level: 'Advanced',
    duration: '14 weeks',
    icon: BarChart,
    summary: 'Data science foundations, analytics, and applied AI for real-world projects.',
    curriculumId: 'data-science-ai',
  },
  {
    id: 'core-python',
    name: 'Core Python',
    level: 'Beginner',
    duration: '8 weeks',
    icon: Zap,
    summary: 'Core Python, scripting, automation, and problem-solving from fundamentals to practice.',
    curriculumId: 'core-python',
  },
  {
    id: 'ai-mastery',
    name: 'AI Mastery',
    level: 'Advanced',
    duration: '14 weeks',
    icon: Cpu,
    summary: 'Deep dive into AI, machine learning workflows, and industry-ready mastery.',
    curriculumId: 'ai-mastery',
  },
];

export function getCourseByName(name: string): Course | undefined {
  return COURSES.find((c) => c.name === name);
}
