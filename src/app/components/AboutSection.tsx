export function AboutSection() {
  const pillars = [
    'Classroom to Corporate',
    'Clients to Conversions',
    'Candidate to Career',
    'Concept to Creation',
  ];

  return (
    <section id="about" className="py-[120px] px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-16 mb-12">
          {/* Left: Pull Quote */}
          <div>
            <blockquote
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-4xl text-[var(--navy)] leading-tight"
            >
              "We traded corporate cabins for a startup mission."
            </blockquote>
          </div>

          {/* Right: Body Text */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-lg text-[var(--navy)] opacity-80 leading-relaxed">
              C2C Tech Solutions is an EdTech & IT services company from Vijayawada, Andhra Pradesh,
              founded by three professionals who left their corporate careers to build AI & Quantum-ready
              talent for India&apos;s next generation. We bridge the gap between academic learning and industry
              readiness through comprehensive training and cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* C2C Pillars */}
        <div className="flex flex-wrap gap-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[var(--yellow)] text-[var(--navy)] px-6 py-3 rounded-full"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {pillar}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
