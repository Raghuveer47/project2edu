import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { COURSE_CATEGORY_ORDER, getCoursesByCategory } from '../data/courses';

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
            Apply online and explore all courses →
          </Link>
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSE_CATEGORY_ORDER.map((category) => {
            const count = getCoursesByCategory(category).length;
            return (
              <Link
                key={category}
                to="/explore-courses"
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-[var(--yellow)] hover:shadow-lg md:p-8"
              >
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="mb-2 text-xl text-[var(--navy)]"
                >
                  {category}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="mb-4 text-sm text-[var(--navy)]/65"
                >
                  {count} programs available
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm text-[var(--navy)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View courses
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
