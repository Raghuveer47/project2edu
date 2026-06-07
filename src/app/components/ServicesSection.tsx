import type { LucideIcon } from 'lucide-react';
import { Globe, Laptop, Lightbulb, UserSearch } from 'lucide-react';

type Initiative = {
  tagline: string;
  service: string;
  icon: LucideIcon;
};

const INITIATIVES: Initiative[] = [
  {
    tagline: 'Classroom to Corporate',
    service: 'IT Training & Placement',
    icon: Laptop,
  },
  {
    tagline: 'Clients to Conversions',
    service: 'Digital Marketing',
    icon: Globe,
  },
  {
    tagline: 'Candidate to Career',
    service: 'IT & Non IT Staffing',
    icon: UserSearch,
  },
  {
    tagline: 'Concept to Creation',
    service: 'IT Product Development',
    icon: Lightbulb,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-[120px] px-6 md:px-8 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="text-4xl md:text-5xl text-[var(--navy)] mb-12 md:mb-16 text-center"
        >
          Services & Initiatives
        </h2>

        <div className="relative bg-[var(--navy)] rounded-2xl md:rounded-3xl px-5 py-10 md:px-10 md:py-14 lg:pr-24 overflow-hidden">
          <div className="flex flex-col gap-5 md:gap-6">
            {INITIATIVES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.tagline}
                  className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(140px,220px)_1fr_auto] items-center gap-3 md:gap-5"
                >
                  <div
                    className="relative col-span-2 md:col-span-1 bg-[var(--yellow)] text-[var(--navy)] px-4 py-3 md:px-5 md:py-4 rounded-2xl rounded-bl-md shadow-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <p className="font-semibold text-sm md:text-base leading-snug">{item.tagline}</p>
                    <p className="text-xs md:text-sm font-medium opacity-90">(C2C)</p>
                    <span
                      className="absolute -left-2 bottom-4 hidden md:block w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[var(--yellow)]"
                      aria-hidden
                    />
                  </div>

                  <div
                    className="col-span-1 md:col-span-1 bg-white text-[var(--navy)] px-4 py-3 md:px-8 md:py-5 rounded-xl md:rounded-2xl text-center md:text-left shadow-sm min-h-[56px] flex items-center justify-center md:justify-start"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <h3 className="text-base md:text-xl lg:text-2xl font-medium leading-tight">
                      {item.service}
                    </h3>
                  </div>

                  <div className="col-span-1 row-start-2 md:row-start-auto justify-self-end md:justify-self-auto w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-[var(--yellow)] flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-7 h-7 md:w-9 md:h-9 text-[var(--navy)]" strokeWidth={1.75} />
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center"
            aria-hidden
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
              className="text-white text-2xl xl:text-3xl tracking-[0.25em] font-semibold uppercase"
            >
              Our Initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
