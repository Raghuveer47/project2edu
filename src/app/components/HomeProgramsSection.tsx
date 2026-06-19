import { Link } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';

const highlights = [
  'Industry-aligned curriculum with live projects',
  'Mentorship from working professionals',
  'Placement & internship support',
  'Flexible batches for students and working learners',
];

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
              Explore courses built for real careers
            </h2>
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-lg leading-relaxed text-[var(--navy)]/75"
          >
            Full Stack programs in Java, Python, MERN, Angular, .NET, and React — plus Data Science,
            Core Python, and AI Mastery. Apply online; curriculum PDFs available for select programs.
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

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[var(--yellow)] hover:shadow-lg"
              >
                <Icon className="mb-4 h-9 w-9 text-[var(--navy)]" strokeWidth={1.5} />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-2 text-xl text-[var(--navy)] transition-colors group-hover:text-[var(--yellow)]"
                >
                  {course.name}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="mb-3 line-clamp-2 text-sm text-[var(--navy)]/65"
                >
                  {course.summary}
                </p>
                <span className="text-xs text-[var(--navy)]/50" style={{ fontFamily: 'var(--font-body)' }}>
                  {course.duration} · {course.level}
                </span>
              </Link>
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
