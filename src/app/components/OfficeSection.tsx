import { useState, useEffect } from 'react';
import receptionHero from '../../assets/images/c2c-reception-hero.jpeg';
import training1 from '../../imports/WhatsApp_Image_2026-06-03_at_22.26.04.jpeg';
import training2 from '../../imports/WhatsApp_Image_2026-06-03_at_22.26.40.jpeg';
import ceremony1 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.19.jpeg';
import ceremony2 from '../../imports/WhatsApp_Image_2026-06-03_at_22.34.20.jpeg';

const officePhotos = [
  {
    url: receptionHero,
    caption: 'OFFICE RECEPTION',
  },
  {
    url: training1,
    caption: 'TRAINING SESSION',
  },
  {
    url: ceremony1,
    caption: 'INAUGURATION',
  },
  {
    url: training2,
    caption: 'CLASSROOM',
  },
  {
    url: ceremony2,
    caption: 'CELEBRATION',
  },
];

export function OfficeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, officePhotos.length - 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="py-[120px] px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="text-5xl text-[var(--navy)] mb-16 text-center"
        >
          Our Space
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3 + 2)}%)` }}
            >
              {officePhotos.map((photo, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: 'calc(33.333% - 16px)' }}>
                  <div className="rounded-2xl overflow-hidden border-4 border-[var(--yellow)] shadow-lg">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="text-center mt-4 text-[var(--navy)] tracking-widest text-sm"
                  >
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[var(--yellow)] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
