import receptionHero from '../../assets/images/c2c-reception-hero.jpeg';

export const HERO_CAROUSEL_SLIDES = [
  {
    id: 'reception',
    src: receptionHero,
    alt: 'C2C Tech Solutions reception — Vijayawada office',
  },
] as const;

/** Static hero background — single reception photo */
export function HeroCarousel() {
  const slide = HERO_CAROUSEL_SLIDES[0];

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <img
        src={slide.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A]/92 via-[#1A2B4A]/55 to-[#1A2B4A]/25" />
    </div>
  );
}
