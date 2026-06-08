import type { LucideIcon } from 'lucide-react';
import { Globe, Laptop, Lightbulb, UserSearch } from 'lucide-react';

type Initiative = {
  caption: string;
  title: string;
  icon: LucideIcon;
};

const INITIATIVES: Initiative[] = [
  {
    caption: 'Campus to Corporate (C2C)',
    title: 'IT Training & Placement',
    icon: Laptop,
  },
  {
    caption: 'Clients to Conversions (C2C)',
    title: 'Digital Marketing',
    icon: Globe,
  },
  {
    caption: 'Candidate to Career (C2C)',
    title: 'IT & Non IT Staffing',
    icon: UserSearch,
  },
  {
    caption: 'Concept to Creation (C2C)',
    title: 'IT Product Development',
    icon: Lightbulb,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 px-5 py-16 sm:px-6 md:px-8 md:py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1440px]">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="mb-10 text-center text-3xl text-[var(--navy)] sm:text-4xl md:mb-16 md:text-5xl"
        >
          Services & Initiatives
        </h2>

        <div className="relative overflow-hidden rounded-2xl bg-[var(--navy)] px-4 py-8 sm:px-6 md:rounded-3xl md:px-10 md:py-14 lg:pr-24">
          <div className="flex flex-col gap-6 md:gap-7">
            {INITIATIVES.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.caption} className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5 md:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--yellow)] sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]">
                      <Icon className="h-6 w-6 text-[var(--navy)] sm:h-7 sm:w-7 md:h-9 md:w-9" strokeWidth={1.75} />
                    </div>

                    <h3
                      style={{ fontFamily: 'var(--font-heading)' }}
                      className="text-base font-semibold leading-snug text-[var(--navy)] sm:text-lg md:text-xl lg:text-2xl"
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="inline-flex w-fit max-w-full rounded-full bg-[var(--yellow)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--navy)] sm:px-4 sm:text-xs"
                  >
                    {item.caption}
                  </p>
                </article>
              );
            })}
          </div>

          <div
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center justify-center lg:flex"
            aria-hidden
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
              className="text-2xl font-semibold uppercase tracking-[0.25em] text-white xl:text-3xl"
            >
              Our Initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
