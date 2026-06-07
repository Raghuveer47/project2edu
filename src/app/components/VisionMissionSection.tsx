import { Eye, Target } from 'lucide-react';

export function VisionMissionSection() {
  return (
    <section className="py-[100px] px-6 md:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[var(--navy)] text-white p-10 md:p-12 rounded-2xl border-t-4 border-[var(--yellow)]">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-[var(--yellow)]" strokeWidth={1.5} />
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-3xl md:text-4xl tracking-wide"
              >
                Our Vision
              </h2>
            </div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-white/90 text-lg leading-relaxed"
            >
              To make Andhra Pradesh a hub for next-generation talent—where students and
              professionals master AI, Quantum-ready skills, and industry practices, and where
              Indian innovation leads globally through technology, education, and enterprise
              solutions.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-10 md:p-12 rounded-2xl border-t-4 border-[var(--yellow)]">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-[var(--navy)]" strokeWidth={1.5} />
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-3xl md:text-4xl text-[var(--navy)] tracking-wide"
              >
                Our Mission
              </h2>
            </div>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-[var(--navy)]/85 text-lg leading-relaxed"
            >
              C2C Tech Solutions bridges the gap between classroom learning and corporate
              readiness through EdTech platforms, IT services, corporate training, and strategic
              consulting—empowering learners from Vijayawada and across India with hands-on skills,
              mentorship, and career pathways aligned to real industry demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
