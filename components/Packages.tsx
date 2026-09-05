type Pkg = {
  name: string;
  price: string;
  suffix?: string;
  bullets: string[];
  featured?: boolean;
  tag?: string;
  category: 'Starter' | 'PT' | 'HYROX' | 'Custom';
};

const PACKAGES: Pkg[] = [
  {
    name: 'PT Intro Pack',
    price: 'R 515',
    suffix: 'per package',
    category: 'Starter',
    tag: 'Best first step',
    bullets: ['1 × in-depth consultation', '2 × 45 min training sessions', 'Baseline assessment & goal map'],
    featured: true,
  },
  {
    name: 'PT Six Pack',
    price: 'R 943',
    suffix: 'per package',
    category: 'PT',
    tag: 'Best value',
    bullets: ['1 × in-depth consultation', '6 × training sessions', 'Progress tracking & re-test'],
  },
  {
    name: 'HYROX Starter — 3 Pack',
    price: 'R 660',
    suffix: 'per package',
    category: 'HYROX',
    bullets: ['Master the HYROX fundamentals', '3 structured sessions', 'Movement standards drilled'],
  },
  {
    name: 'HYROX Builder — 6 Pack',
    price: 'R 1 273',
    suffix: 'per package',
    category: 'HYROX',
    bullets: ['Level up your output', '6 structured sessions', 'Pacing, transitions, engine work'],
  },
  {
    name: 'One-on-One — Custom',
    price: 'From R 4 000',
    suffix: 'once-off or recurring',
    category: 'Custom',
    bullets: ['Fully bespoke programming', 'Weekly session cadence', 'Nutrition & recovery guidance'],
  },
  {
    name: 'Group — Custom',
    price: 'From R 4 000',
    suffix: 'once-off or recurring',
    category: 'Custom',
    bullets: ['Train with 2–4 friends', 'Coached as one unit', 'Cost per person drops fast'],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative bg-coal py-24 md:py-40 border-y border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7 js-reveal">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
              <span className="h-px w-6 bg-signal" /> Packages
            </span>
            <h2 className="mt-6 font-display tracking-tightest leading-[1.0] text-5xl md:text-6xl lg:text-7xl">
              Pick a pack.<br />
              <span className="italic text-bone/80">Start Monday.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-bone/70 leading-relaxed js-reveal">
            <p>
              Every package is bookable directly through Virgin Active. Session times are set
              between us — schedules vary week to week.
            </p>
            <p className="mt-3 text-bone/50 text-sm">Prices in ZAR. Custom packages: once-off or recurring.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`group relative overflow-hidden rounded-sm border transition-all duration-500 ease-editorial js-reveal ${
                p.featured
                  ? 'bg-gradient-to-br from-graphite via-coal to-ink border-signal/40 hover:border-signal'
                  : 'bg-graphite/60 border-bone/10 hover:border-bone/25'
              }`}
            >
              {p.tag && (
                <div className={`absolute top-4 right-4 text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full ${p.featured ? 'bg-signal text-bone' : 'bg-bone/10 text-bone/80'}`}>
                  {p.tag}
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.28em] text-bone/50">{p.category}</div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tighter2 leading-tight">{p.name}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-5xl tracking-tighter2 text-bone">{p.price}</span>
                  {p.suffix && <span className="text-xs uppercase tracking-[0.22em] text-bone/50">{p.suffix}</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-bone/75 leading-relaxed">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-signal" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-between w-full rounded-full border border-bone/25 hover:border-bone/60 px-5 py-3 text-[12px] uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-all duration-500"
                >
                  Book this pack
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
