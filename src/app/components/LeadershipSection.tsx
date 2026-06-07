import kurraAnil from '../../assets/images/founders/kurra-anil.jpeg';
import rajendraPrasad from '../../assets/images/founders/rajendra-prasad-somala.jpeg';
import saiSatish from '../../assets/images/founders/sai-satish-gandaboina.jpeg';

const directors = [
  {
    name: 'Kurra Anil',
    title: 'Director',
    image: kurraAnil,
    alt: 'Kurra Anil — Director, C2C Tech Solutions',
  },
  {
    name: 'Rajendra Prasad Somala',
    title: 'Director',
    image: rajendraPrasad,
    alt: 'Rajendra Prasad Somala — Director, C2C Tech Solutions',
  },
  {
    name: 'Sai Satish Gandaboina',
    title: 'Director',
    image: saiSatish,
    alt: 'Sai Satish Gandaboina — Director, C2C Tech Solutions',
  },
];

const leadershipStatement =
  'Our leadership team is driven by a shared vision of innovation, technology advancement, and skill development. With expertise across technology, business operations, training, and strategic growth, the Directors of C2C Tech Solutions Pvt Ltd are committed to building a future-ready organization focused on Artificial Intelligence, Quantum Valley initiatives, product innovation, and industry-driven solutions.';

export function LeadershipSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 bg-white"
        style={{ height: 'clamp(248px, 32vw, 360px)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#3a3a3a]"
        style={{ top: 'clamp(248px, 32vw, 360px)' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 pt-[100px] pb-[100px]">
        <header className="text-center mb-10 md:mb-14">
          <div className="relative inline-block max-w-full">
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-1 md:bottom-1.5 w-full min-w-[100%] h-3 md:h-4 bg-[var(--yellow)]"
              aria-hidden
            />
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] uppercase tracking-wide px-2 leading-tight"
            >
              Leadership Behind Innovation
            </h2>
          </div>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 md:gap-12 mb-14 md:mb-16 list-none p-0 m-0">
          {directors.map((director) => (
            <li key={director.name} className="flex flex-col items-center text-center">
              <div className="mb-5 -translate-y-4 md:-translate-y-5">
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--yellow)] shadow-lg bg-white shrink-0 mx-auto">
                  <img
                    src={director.image}
                    alt={director.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-xl md:text-2xl text-white mb-1"
              >
                {director.name}
              </h3>
              <p
                style={{ fontFamily: 'var(--font-body)' }}
                className="text-white/80 text-sm md:text-base"
              >
                {director.title}
              </p>
            </li>
          ))}
        </ul>

        <p
          style={{ fontFamily: 'var(--font-body)' }}
          className="text-white/90 text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
        >
          {leadershipStatement}
        </p>
      </div>
    </section>
  );
}
