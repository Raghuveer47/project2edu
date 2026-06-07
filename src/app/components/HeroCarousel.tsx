import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import receptionHero from '../../assets/images/c2c-reception-hero.jpeg';
import trainingSession from '../../imports/WhatsApp_Image_2026-06-03_at_22.26.04.jpeg';

export const HERO_CAROUSEL_SLIDES = [
  {
    id: 'reception',
    src: receptionHero,
    alt: 'C2C Tech Solutions reception — Vijayawada office',
  },
  {
    id: 'training',
    src: trainingSession,
    alt: 'Interactive training at C2C Tech Solutions',
  },
] as const;

const AUTOPLAY_MS = 5000;
const slideCount = HERO_CAROUSEL_SLIDES.length;

/** Full-bleed background image carousel for the landing hero */
export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((index + slideCount) % slideCount);
  }, []);

  const nextSlide = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {HERO_CAROUSEL_SLIDES.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          draggable={false}
        />
      ))}

      {/* Readability overlay — does not alter photo colors, only darkens for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/92 via-[#1A2B4A]/55 to-[#1A2B4A]/25" />

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous background slide"
        className="absolute left-4 md:left-8 top-1/2 z-[1] -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/25 flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next background slide"
        className="absolute right-4 md:right-8 top-1/2 z-[1] -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/25 flex items-center justify-center hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-[1] -translate-x-1/2 flex items-center gap-2">
        {HERO_CAROUSEL_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-[var(--yellow)]' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
