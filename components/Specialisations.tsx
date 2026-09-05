const ITEMS = [
  {
    n: '01',
    title: 'Resistance Training',
    body: 'Progressive strength programming — compound lifts, accessory work, and technique polished on the floor.',
  },
  {
    n: '02',
    title: 'Weight Loss',
    body: 'Sustainable fat loss without the crash cycle. Nutrition anchors, honest calorie targets, training that supports it.',
  },
  {
    n: '03',
    title: 'Weight Gain',
    body: 'Structured hypertrophy for people who struggle to put mass on. Enough volume, enough food, enough recovery.',
  },
  {
    n: '04',
    title: "Children's Fitness",
    body: 'Qualified specialist. Age-appropriate movement education — kids who learn to love training, not fear the gym.',
  },
  {
    n: '05',
    title: 'Elderly Fitness',
    body: 'Certified specialist. Strength, mobility, and balance work that keeps you independent for the next thirty years.',
  },
];

export default function Specialisations() {
  return (
    <section id="specialisations" className="relative bg-ink py-24 md:py-40 border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-6 js-reveal">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
              <span className="h-px w-6 bg-signal" /> Specialisations
            </span>
            <h2 className="mt-6 font-display tracking-tightest leading-[1.0] text-5xl md:text-6xl lg:text-7xl">
              Five things<br />
              <span className="italic">done well.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 text-bone/70 leading-relaxed text-lg js-reveal">
            <p>
              A short list on purpose. Depth over breadth — these are the disciplines I'm
              qualified in, coach every week, and can genuinely move the needle on for you.
            </p>
          </div>
        </div>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {ITEMS.map((it) => (
            <li key={it.n} className="group py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-baseline js-reveal">
              <div className="col-span-2 md:col-span-1 text-[11px] uppercase tracking-[0.24em] text-bone/40 pt-2">{it.n}</div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-3xl md:text-5xl tracking-tightest leading-none transition-transform duration-500 ease-editorial md:group-hover:translate-x-2">
                  {it.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-5 md:col-start-8 text-bone/70 leading-relaxed md:text-lg">
                {it.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
