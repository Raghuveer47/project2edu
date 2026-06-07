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

const PANEL_HEIGHT = 'h-[340px] sm:h-[360px]';

function ValuePanel({ value }: { value: CoreValue }) {
  const Icon = value.icon;

  return (
    <article className="flex flex-col items-center w-[160px] sm:w-[172px] lg:w-auto">
      <div className="flex flex-col items-center mb-3 shrink-0">
        <div
          className="w-11 h-11 rounded-full border-2 border-[var(--navy)] bg-white flex items-center justify-center text-[var(--navy)] text-sm font-semibold shadow-sm"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {value.number}
        </div>
        <div className="w-px h-5 bg-[var(--navy)]/25" aria-hidden />
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
  return (
    <section id="core-values" className="overflow-hidden bg-white">
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
          className="mx-auto mb-10 max-w-3xl text-center text-base text-[var(--navy)]/75 md:mb-12 md:text-lg"
        >
          The core components that build a strong plan for success
        </p>

        <div className="overflow-x-auto pb-2 scrollbar-hide lg:overflow-visible">
          <div className="mx-auto flex min-w-max items-start justify-center gap-3 sm:gap-4 lg:grid lg:min-w-0 lg:grid-cols-7 lg:gap-3 xl:gap-4">
            {CORE_VALUES.map((value) => (
              <ValuePanel key={value.number} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
