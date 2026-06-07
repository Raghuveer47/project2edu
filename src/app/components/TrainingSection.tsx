import { Link } from 'react-router';
import { COURSES } from '../data/courses';

export function TrainingSection() {
  return (
    <section id="training" className="py-[120px] px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="text-5xl text-[var(--navy)] mb-4 text-center"
        >
          Comprehensive Training
        </h2>
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="text-xl text-[var(--navy)] opacity-70 mb-8 text-center"
        >
          Fundamentals to Corporate Execution
        </p>
        <p className="text-center mb-16">
          <Link
            to="/explore-courses"
            className="text-[var(--navy)] hover:text-[var(--yellow)] underline underline-offset-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Apply online and download course PDFs →
          </Link>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                to={`/explore-courses?course=${encodeURIComponent(course.name)}`}
                className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[var(--yellow)] hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Icon className="w-10 h-10 mb-4 text-[var(--navy)]" strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl text-[var(--navy)] mb-2">
                  {course.name}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
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
