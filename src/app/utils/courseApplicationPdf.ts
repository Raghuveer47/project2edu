import { getCourseByName } from '../data/courses';

export type ApplicationFormData = {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  city: string;
  message: string;
};

export const CURRICULUM_PDFS = [
  {
    id: 'data-science-ai' as const,
    title: 'Data Science with AI',
    url: '/documents/curricula/data-science-with-ai-curriculum.pdf',
    filename: 'Data-Science-with-AI-Curriculum.pdf',
  },
  {
    id: 'core-python' as const,
    title: 'Core Python',
    url: '/documents/curricula/core-python-curriculum.pdf',
    filename: 'Core-Python-Curriculum.pdf',
  },
  {
    id: 'ai-mastery' as const,
    title: 'AI Mastery',
    url: '/documents/curricula/ai-mastery-curriculum.pdf',
    filename: 'AI-Mastery-Curriculum.pdf',
  },
];

function downloadFile(url: string, filename: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function getCurriculumForCourse(courseName: string) {
  const course = getCourseByName(courseName);
  if (!course?.curriculumId) return undefined;
  return CURRICULUM_PDFS.find((pdf) => pdf.id === course.curriculumId);
}

export function downloadCurriculumForCourse(courseName: string) {
  const pdf = getCurriculumForCourse(courseName);
  if (!pdf) return;
  downloadFile(pdf.url, pdf.filename);
}

/** Download curriculum PDF for the selected course only */
export function triggerPostApplicationDownloads(data: ApplicationFormData) {
  downloadCurriculumForCourse(data.course);
}
