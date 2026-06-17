import { useState, useEffect } from 'react';
import receptionHero from '../../assets/images/c2c-reception-hero.jpeg';
import ceremony1 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.19.jpeg';
import ceremony2 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.20.jpeg';

const officePhotos = [
  {
    url: receptionHero,
    caption: 'OFFICE RECEPTION',
  },
  {
    url: ceremony1,
    caption: 'INAUGURATION',
  },
  {
    url: ceremony2,
    caption: 'CELEBRATION',
  },
];

function PhotoCard({ url, caption }: { url: string; caption: string }) {
  return (
    <article>
      <div className="overflow-hidden rounded-2xl border-4 border-[var(--yellow)] shadow-lg">
        <img src={url} alt={caption} className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
      </div>
      <p
        style={{ fontFamily: 'var(--font-body)' }}
        className="mt-4 text-center text-sm tracking-widest text-[var(--navy)]"
      >
        {caption}
      </p>
    </article>
  );
}

export function OfficeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, officePhotos.length - 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bg-white px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="mb-10 text-center text-3xl text-[var(--navy)] sm:text-4xl md:mb-16 md:text-5xl"
        >
          Our Space
        </h2>

        {/* Mobile & tablet — large swipeable images */}
        <div className="-mx-5 overflow-x-auto px-5 pb-2 scrollbar-hide snap-x snap-mandatory lg:hidden">
          <div className="flex gap-5">
            {officePhotos.map((photo) => (
              <div key={photo.caption} className="w-[min(88vw,420px)] shrink-0 snap-center">
                <PhotoCard url={photo.url} caption={photo.caption} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop carousel */}
        <div className="relative hidden lg:block">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)` }}
            >
              {officePhotos.map((photo, index) => (
                <div key={index} className="w-[calc(33.333%-16px)] shrink-0">
                  <PhotoCard url={photo.url} caption={photo.caption} />
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex ? 'scale-125 bg-[var(--yellow)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
