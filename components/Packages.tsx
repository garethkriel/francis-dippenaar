import Image from 'next/image';

type Pkg = {
  name: string;
  price: string;
  suffix?: string;
  perSession?: string;
  bullets: string[];
  featured?: boolean;
  tag?: string;
  category: string;
  img?: string;
  imgAlt?: string;
};

const PACKAGES: Pkg[] = [
  {
    name: 'PT Intro Pack',
    price: 'R 515',
    suffix: 'per package',
    category: 'Start here',
    tag: 'Best first step',
    featured: true,
    img: '/img/francis-portrait.png',
    imgAlt: 'Francis Dippenaar at Virgin Active Kimberley',
    bullets: [
      '1 × in-depth consultation',
      '2 × 45 min training sessions',
      'Movement screen and baseline numbers',
    ],
  },
  {
    name: 'PT Six Pack',
    price: 'R 943',
    suffix: 'per package',
    category: 'Personal training',
    tag: 'Best value',
    img: '/img/train-kettlebell.png',
    imgAlt: 'Kettlebell training at Virgin Active',
    bullets: [
      '1 × in-depth consultation',
      '6 × training sessions',
      'Progress tracking and re-test',
    ],
  },
  {
    name: 'HYROX Starter',
    price: 'R 660',
    suffix: '3-session pack',
    category: 'HYROX',
    img: '/img/train-hyrox.png',
    imgAlt: 'HYROX-style conditioning work',
    bullets: [
      'Master the HYROX fundamentals',
      '3 structured sessions',
      'Movement standards drilled properly',
    ],
  },
  {
    name: 'HYROX Builder',
    price: 'R 1 273',
    suffix: '6-session pack',
    category: 'HYROX',
    img: '/img/train-hyrox.png',
    imgAlt: 'HYROX-style conditioning work',
    bullets: [
      'Level up your engine and output',
      '6 structured sessions',
      'Pacing, transitions, and recovery',
    ],
  },
  {
    name: 'One-on-One',
    price: 'From R 4 000',
    suffix: '12 sessions / month',
    perSession: 'R333 per session',
    category: 'Custom',
    img: '/img/train-boxing.png',
    imgAlt: 'One-on-one boxing session at Virgin Active',
    bullets: [
      'Fully bespoke programming',
      '45 min per session, 12 a month',
      'Once-off or recurring',
    ],
  },
  {
    name: 'Group',
    price: 'From R 4 000',
    suffix: 'custom schedule',
    category: 'Custom',
    img: '/img/train-group.png',
    imgAlt: 'Small group training at Virgin Active',
    bullets: [
      'Train with 2–4 friends',
      'Coached as one unit',
      'Cost per person drops fast',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative bg-coal py-24 md:py-40 border-y border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7 js-reveal">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-signal">
              <span className="h-px w-8 bg-signal" /> Packages
            </span>
            <h2 className="mt-7 font-display tracking-tightest leading-[0.95] text-5xl md:text-6xl lg:text-7xl">
              Pick a pack.
              <br />
              <span className="italic text-bone/70">Start Monday.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-bone/65 leading-relaxed js-reveal">
            <p>
              Every package is contracted through Virgin Active. Session times are arranged
              directly between us, since schedules shift week to week.
            </p>
            <p className="mt-3 text-bone/40 text-sm">
              Prices in ZAR. Custom packages available once-off or recurring.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`group relative flex flex-col overflow-hidden rounded-lg border transition-all duration-700 ease-editorial js-reveal ${
                p.featured
                  ? 'border-signal/45 hover:border-signal bg-gradient-to-b from-graphite to-ink'
                  : 'border-bone/10 hover:border-bone/30 bg-graphite/50'
              }`}
            >
              {/* Photo */}
              {p.img && (
                <div className="relative h-40 md:h-44 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.imgAlt ?? ''}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" aria-hidden />
                  <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:opacity-0" aria-hidden />
                </div>
              )}

              {p.tag && (
                <div
                  className={`absolute top-4 right-4 z-10 text-[9px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full backdrop-blur-sm ${
                    p.featured ? 'bg-signal text-bone' : 'bg-ink/70 text-bone/90 border border-bone/20'
                  }`}
                >
                  {p.tag}
                </div>
              )}

              <div className="flex flex-col flex-1 p-6 md:p-7">
                <div className="text-[9px] uppercase tracking-[0.3em] text-bone/45">{p.category}</div>
                <h3 className="mt-2.5 font-display text-2xl md:text-[1.7rem] tracking-tighter2 leading-tight">
                  {p.name}
                </h3>

                <div className="mt-5 flex items-baseline gap-2.5 flex-wrap">
                  <span className="font-display text-4xl md:text-[2.75rem] tracking-tightest leading-none text-bone">
                    {p.price}
                  </span>
                  {p.suffix && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-bone/45">{p.suffix}</span>
                  )}
                </div>
                {p.perSession && (
                  <div className="mt-1.5 text-xs text-signal/90">{p.perSession}</div>
                )}

                <ul className="mt-6 space-y-3 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-bone/70 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-signal" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-between w-full rounded-full border border-bone/20 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-bone/85 transition-all duration-500 hover:bg-bone hover:text-ink hover:border-bone"
                >
                  <span>Enquire about this pack</span>
                  <span aria-hidden className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
