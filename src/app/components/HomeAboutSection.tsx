import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function HomeAboutSection() {
  const pillars = [
    'Campus to Corporate',
    'Clients to Conversions',
    'Candidate to Career',
    'Concept to Creation',
  ];

  return (
    <section className="py-[100px] px-6 md:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-sm uppercase tracking-[0.2em] text-[#5c4a3a] mb-4"
            >
              Who We Are
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl md:text-5xl text-[var(--navy)] mb-6 leading-tight"
            >
              EdTech & IT from the heart of Andhra Pradesh
            </h2>
            <blockquote
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-2xl text-[var(--navy)]/90 border-l-4 border-[var(--yellow)] pl-6 mb-8"
            >
              &ldquo;We traded corporate cabins for a startup mission.&rdquo;
            </blockquote>
          </div>
          <div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-lg text-[var(--navy)]/80 leading-relaxed mb-6"
            >
              C2C Tech Solutions is an EdTech & IT services company based in Vijayawada, founded by
              three professionals who left corporate careers to build AI & Quantum-ready talent for
              India&apos;s next generation. We connect classroom learning with industry expectations
              through hands-on training, product development, and consulting.
            </p>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-lg text-[var(--navy)]/80 leading-relaxed mb-8"
            >
              From our reception in Vijayawada to classrooms across the region, we help students and
              teams move from fundamentals to corporate execution—with mentorship, live projects, and
              career-focused outcomes.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="bg-[var(--yellow)] text-[var(--navy)] px-5 py-2 rounded-full text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {pillar}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[var(--navy)] hover:text-[var(--yellow)] transition-colors font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Read our full story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
