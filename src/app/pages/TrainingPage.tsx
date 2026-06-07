import { Link } from 'react-router';
import { TrainingSection } from '../components/TrainingSection';
import { ContactSection } from '../components/ContactSection';
import { Image } from 'lucide-react';

export function TrainingPage() {
  return (
    <div className="pt-20">
      <TrainingSection />

      {/* Gallery CTA Section */}
      <section className="py-16 px-8 bg-[var(--navy)]">
        <div className="max-w-[1440px] mx-auto text-center">
          <Image className="w-16 h-16 mx-auto mb-4 text-[var(--yellow)]" />
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-4xl text-white mb-4"
          >
            See Our Training in Action
          </h2>
          <p style={{ fontFamily: 'var(--font-body)' }} className="text-white opacity-80 mb-8">
            Browse through our training sessions, workshops, and student success stories
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/explore-courses"
              className="inline-block bg-[var(--yellow)] text-[var(--navy)] px-8 py-3.5 rounded-lg hover:bg-[#E0B015] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore Courses & Apply
            </Link>
            <Link
              to="/training-gallery"
              className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--navy)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Training Gallery
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
