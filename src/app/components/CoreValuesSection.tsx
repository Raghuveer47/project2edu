import { useCallback, useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Binoculars,
  ClipboardCheck,
  HandCoins,
  ScrollText,
  Target,
  Users,
} from 'lucide-react';
import logo from '../../imports/C2C_Logo.png';

type CoreValue = {
  number: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  highlightTitle?: boolean;
};

const CORE_VALUES: CoreValue[] = [
  {
    number: '01',
    name: 'Vision',
    description:
      "To redefine growth in the digital era by making every 'C2C' journey seamless, innovative, and impactful",
    icon: Binoculars,
    color: '#7CB342',
  },
  {
    number: '02',
    name: 'Mission',
    description:
      'To provide comprehensive IT training, strategic marketing, recruitment expertise, and cutting-edge product development',
    icon: Target,
    color: '#26A69A',
  },
  {
    number: '03',
    name: 'Collaboration',
    description:
      'Exceptional results are built together. We work as true partners with our students, clients, job seekers, and internal teams.',
    icon: Users,
    color: '#42A5F5',
  },
  {
    number: '04',
    name: 'Capability & Excellence',
    description:
      'We hold ourselves to the highest standards of execution, ensuring quality across training, staffing, and product engineering',
    icon: ClipboardCheck,
    color: '#1E88E5',
    highlightTitle: true,
  },
  {
    number: '05',
    name: 'Integrity',
    description: 'Building trust across every career pivot and business solution',
    icon: ScrollText,
    color: '#1565C0',
  },
  {
    number: '06',
    name: 'Innovation',
    description: 'Turning complex concepts into seamless digital creations',
    icon: HandCoins,
    color: '#0D47A1',
  },
  {
    number: '07',
    name: 'Inclusivity',
    description: 'Welcoming raw talent and refining it for the corporate world',
    icon: BarChart3,
    color: '#1A2B4A',
  },
];

const AUTOPLAY_MS = 3500;
const PAUSE_AFTER_INTERACTION_MS = 8000;
const PANEL_HEIGHT = 'h-[340px] sm:h-[360px]';

function ValuePanel({
  value,
  panelRef,
}: {
  value: CoreValue;
  panelRef?: (el: HTMLElement | null) => void;
}) {
  const Icon = value.icon;

  return (
    <article
      ref={panelRef}
      className="flex w-[200px] shrink-0 snap-center flex-col items-center sm:w-[220px] lg:w-auto"
    >
      <div className="mb-3 flex shrink-0 flex-col items-center">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--navy)] bg-white text-sm font-semibold text-[var(--navy)] shadow-sm"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {value.number}
        </div>
        <div className="h-5 w-px bg-[var(--navy)]/25" aria-hidden />
      </div>

      <div
        className={`flex w-full flex-col ${PANEL_HEIGHT} rounded-t-[1.75rem] rounded-b-[1.25rem] px-4 pb-5 pt-7 text-center shadow-md`}
        style={{ backgroundColor: value.color }}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
          <Icon className="h-7 w-7 text-[var(--navy)]" strokeWidth={1.75} />
        </div>

        <h3
          style={{ fontFamily: 'var(--font-heading)' }}
          className={`mb-3 shrink-0 text-sm font-semibold leading-snug sm:text-base ${
            value.highlightTitle ? 'text-[var(--yellow)]' : 'text-white'
          }`}
        >
          {value.name}
        </h3>

        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="flex-1 overflow-hidden text-xs leading-relaxed text-white/95 sm:text-sm"
        >
          {value.description}
        </p>
      </div>
    </article>
  );
}

export function CoreValuesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileCarousel, setIsMobileCarousel] = useState(false);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = scrollContainerRef.current;
    const panel = panelRefs.current[index];
    if (!container || !panel) return;

    const panelLeft =
      container.scrollLeft +
      (panel.getBoundingClientRect().left - container.getBoundingClientRect().left);
    const targetLeft = panelLeft + panel.offsetWidth / 2 - container.clientWidth / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScroll)),
      behavior,
    });

    activeIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  const pauseAutoplay = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, PAUSE_AFTER_INTERACTION_MS);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');
    const updateMode = () => setIsMobileCarousel(media.matches);
    updateMode();
    media.addEventListener('change', updateMode);
    return () => media.removeEventListener('change', updateMode);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileCarousel) return;

    const interval = window.setInterval(() => {
      if (pausedRef.current || !isVisibleRef.current) return;

      const next = (activeIndexRef.current + 1) % CORE_VALUES.length;
      scrollToIndex(next);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [isMobileCarousel, scrollToIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="core-values" ref={sectionRef} className="bg-white">
      <div className="relative bg-[var(--navy)]">
        <div className="absolute bottom-0 left-0 top-0 w-2 bg-[var(--yellow)]" aria-hidden />

        <div className="relative mx-auto flex max-w-[1440px] items-start justify-between gap-6 px-6 py-14 md:px-8 md:py-16">
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Core Values
          </h2>
          <img
            src={logo}
            alt="C2C Tech Solutions"
            className="hidden h-16 w-16 shrink-0 rounded-full bg-white/10 p-1 sm:block md:h-20 md:w-20"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-8 md:px-8 md:pb-20">
        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="mx-auto mb-4 max-w-3xl text-center text-base text-[var(--navy)]/75 md:mb-12 md:text-lg"
        >
          The core components that build a strong plan for success
        </p>

        <div
          ref={scrollContainerRef}
          className="-mx-5 overflow-x-auto overscroll-x-contain px-5 pb-2 scrollbar-hide snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 lg:snap-none"
          onTouchStart={pauseAutoplay}
          onPointerDown={(e) => {
            if (e.pointerType === 'mouse') return;
            pauseAutoplay();
          }}
        >
          <div className="flex w-max items-start gap-4 lg:grid lg:w-full lg:grid-cols-7 lg:gap-3 xl:gap-4">
            {CORE_VALUES.map((value, index) => (
              <ValuePanel
                key={value.number}
                value={value}
                panelRef={(el) => {
                  panelRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
          {CORE_VALUES.map((value, index) => (
            <button
              key={value.number}
              type="button"
              aria-label={`Show ${value.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => {
                pauseAutoplay();
                scrollToIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-7 bg-[var(--yellow)]' : 'w-2 bg-[var(--navy)]/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
