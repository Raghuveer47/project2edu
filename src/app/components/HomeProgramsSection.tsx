import { Link } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory } from '../data/courses';

const highlights = [
  'Industry-aligned curriculum with live projects',
  'Mentorship from working professionals',
  '100% placement assistance',
  'Flexible batches for students and working learners',
];

const categoryColors: Record<string, string> = {
  'Basic Courses': 'bg-sky-100 text-sky-800',
  'Advanced IT Courses': 'bg-blue-100 text-blue-800',
  'Full Stack Courses': 'bg-orange-100 text-orange-800',
  'Quick Courses': 'bg-rose-100 text-rose-800',
  'Add on Courses': 'bg-emerald-100 text-emerald-800',
};

export function HomeProgramsSection() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-8 md:py-[100px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 grid items-end gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="mb-4 text-sm uppercase tracking-[0.2em] text-[#5c4a3a]"
            >
              Training Programs
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl leading-tight text-[var(--navy)] md:text-5xl"
            >
              C2C Tech Solutions — IT Training Courses
            </h2>
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-lg leading-relaxed text-[var(--navy)]/75"
          >
            Basic, advanced, full stack, quick, and add-on programs — from entry-level programming
            to AI, cloud, DevOps, and placement support. Apply online today.
          </p>
        </div>

        <ul className="mb-12 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[var(--navy)]/85"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--yellow)]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mb-12 space-y-10">
          {COURSE_CATEGORY_ORDER.map((category) => {
            const courses = getCoursesByCategory(category);
            return (
              <div key={category}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-2xl text-[var(--navy)]"
                  >
                    {category}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[category]}`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {courses.length} courses
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                      className="rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-[var(--yellow)] hover:shadow-md"
                    >
                      <p
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="mb-1 text-base font-medium text-[var(--navy)]"
                      >
                        {course.name}
                      </p>
                      <p
                        style={{ fontFamily: 'var(--font-body)' }}
                        className="text-xs text-[var(--navy)]/55"
                      >
                        {course.level}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/explore-courses"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--yellow)] px-8 py-3.5 text-[var(--navy)] transition-colors hover:bg-[#E0B015]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore all courses & apply
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
