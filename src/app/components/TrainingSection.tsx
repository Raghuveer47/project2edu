import { Link } from 'react-router';
import { COURSES } from '../data/courses';

export function TrainingSection() {
  return (
    <section id="training" className="bg-white px-6 py-20 md:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="mb-4 text-center text-4xl text-[var(--navy)] md:text-5xl"
        >
          Comprehensive Training
        </h2>
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="mb-8 text-center text-lg text-[var(--navy)]/70 md:text-xl"
        >
          Fundamentals to Corporate Execution
        </p>
        <p className="mb-12 text-center md:mb-16">
          <Link
            to="/explore-courses"
            className="text-[var(--navy)] underline underline-offset-4 transition-colors hover:text-[var(--yellow)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Apply online and download course PDFs →
          </Link>
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--yellow)] hover:shadow-lg md:p-8"
              >
                <Icon className="mb-4 h-10 w-10 text-[var(--navy)]" strokeWidth={1.5} />
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-2 text-xl text-[var(--navy)]"
                >
                  {course.name}
                </h3>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm ${
                    course.level === 'Beginner'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {course.level}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
