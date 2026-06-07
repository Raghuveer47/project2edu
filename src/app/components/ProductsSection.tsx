import { Brain, ClipboardCheck } from 'lucide-react';

export function ProductsSection() {
  return (
    <section id="products" className="py-[120px] px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="text-5xl text-[var(--navy)] mb-16 text-center"
        >
          Our Products
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* AI Based LMS Portal */}
          <div className="bg-[var(--navy)] text-white p-12 rounded-2xl">
            <Brain className="w-16 h-16 mb-6 text-[var(--yellow)]" strokeWidth={1.5} />
            <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-3xl mb-4">
              AI Based LMS Portal
            </h3>
            <ul style={{ fontFamily: 'var(--font-body)' }} className="space-y-3 mb-8 opacity-90">
              <li className="flex items-start">
                <span className="text-[var(--yellow)] mr-2">•</span>
                <span>Personalized learning paths powered by AI algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--yellow)] mr-2">•</span>
                <span>Real-time progress tracking and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--yellow)] mr-2">•</span>
                <span>Interactive content delivery with multimedia support</span>
              </li>
            </ul>
            <button
              className="bg-[var(--yellow)] text-[var(--navy)] px-8 py-3 rounded-lg hover:bg-[#E0B015] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore LMS
            </button>
          </div>

          {/* AI Based Assessment Portal */}
          <div className="bg-[var(--yellow)] text-[var(--navy)] p-12 rounded-2xl">
            <ClipboardCheck className="w-16 h-16 mb-6" strokeWidth={1.5} />
            <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-3xl mb-4">
              AI Based Assessment Portal
            </h3>
            <ul style={{ fontFamily: 'var(--font-body)' }} className="space-y-3 mb-8 opacity-90">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automated evaluation with instant feedback</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Adaptive testing based on student performance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Comprehensive skill gap analysis and reporting</span>
              </li>
            </ul>
            <button
              className="bg-[var(--navy)] text-white px-8 py-3 rounded-lg hover:bg-[#0F1A2E] transition-colors"
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
