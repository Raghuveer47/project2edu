import { Brain, ClipboardCheck } from 'lucide-react';

export function ProductsSection() {
  return (
    <section id="products" className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="mb-10 text-center text-3xl text-[var(--navy)] sm:text-4xl md:mb-16 md:text-5xl"
        >
          Our Products
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl bg-[var(--navy)] p-6 text-white sm:p-8 md:p-12">
            <Brain className="mb-5 h-12 w-12 text-[var(--yellow)] sm:mb-6 sm:h-16 sm:w-16" strokeWidth={1.5} />
            <h3
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mb-4 text-2xl sm:text-3xl"
            >
              AI Based LMS Portal
            </h3>
            <ul style={{ fontFamily: 'var(--font-body)' }} className="mb-8 space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[var(--yellow)]">•</span>
                <span>Personalized learning paths powered by AI algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[var(--yellow)]">•</span>
                <span>Real-time progress tracking and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 text-[var(--yellow)]">•</span>
                <span>Interactive content delivery with multimedia support</span>
              </li>
            </ul>
            <button
              className="w-full rounded-lg bg-[var(--yellow)] px-8 py-3 text-[var(--navy)] transition-colors hover:bg-[#E0B015] sm:w-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore LMS
            </button>
          </div>

          <div className="rounded-2xl bg-[var(--yellow)] p-6 text-[var(--navy)] sm:p-8 md:p-12">
            <ClipboardCheck className="mb-5 h-12 w-12 sm:mb-6 sm:h-16 sm:w-16" strokeWidth={1.5} />
            <h3
              style={{ fontFamily: 'var(--font-heading)' }}
              className="mb-4 text-2xl leading-snug sm:text-3xl"
            >
              AI Based Assessment Portal
            </h3>
            <ul style={{ fontFamily: 'var(--font-body)' }} className="mb-8 space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Automated evaluation with instant feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Adaptive testing based on student performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>Comprehensive skill gap analysis and reporting</span>
              </li>
            </ul>
            <button
              className="w-full rounded-lg bg-[var(--navy)] px-8 py-3 text-white transition-colors hover:bg-[#0F1A2E] sm:w-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
