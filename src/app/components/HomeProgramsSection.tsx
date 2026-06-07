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
    <section className="py-[100px] px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-sm uppercase tracking-[0.2em] text-[#5c4a3a] mb-4"
            >
              Training Programs
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl md:text-5xl text-[var(--navy)] leading-tight"
            >
              Explore courses built for real careers
            </h2>
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-lg text-[var(--navy)]/75 leading-relaxed"
          >
            Full Stack programs in Java, Python, MERN, Angular, .NET, and React — plus Data Science,
            Core Python, and AI Mastery. Apply online; curriculum PDFs available for select programs.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-3 mb-12">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[var(--navy)]/85"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <CheckCircle2 className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-[var(--yellow)] hover:shadow-lg transition-all group"
              >
                <Icon className="w-9 h-9 mb-4 text-[var(--navy)]" strokeWidth={1.5} />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-xl text-[var(--navy)] mb-2 group-hover:text-[var(--yellow)] transition-colors"
                >
                  {course.name}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-sm text-[var(--navy)]/65 mb-3 line-clamp-2"
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
            className="inline-flex items-center gap-2 bg-[var(--yellow)] text-[var(--navy)] px-8 py-3.5 rounded-lg hover:bg-[#E0B015] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore all courses & apply
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
