import { Link } from 'react-router';
import { HeroCarousel } from './HeroCarousel';

/**
 * Landing hero — full-width background image carousel with text overlay.
 * Reception photo: src/assets/images/c2c-reception-hero.jpeg
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <HeroCarousel />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-8 pt-28 pb-28">
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="text-sm uppercase tracking-[0.2em] text-[var(--yellow)] mb-4"
        >
          Vijayawada · Andhra Pradesh
        </p>
        <h1
          style={{ fontFamily: 'var(--font-heading)' }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl"
        >
          From Campus to Corporate.
        </h1>
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
        >
          AI & Quantum-ready talent, built in Andhra Pradesh.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/explore-courses"
            className="bg-[var(--yellow)] text-[var(--navy)] px-8 py-3.5 rounded-lg hover:bg-[#E0B015] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore Courses
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--navy)] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
