const STEPS = [
  {
    n: '01',
    title: 'Consultation',
    body: 'A proper conversation. What you want, what you\'ve tried, what\'s in the way. Movement screen, baseline numbers, honest timeline.',
  },
  {
    n: '02',
    title: 'Programming',
    body: 'A plan built around your week — training, nutrition anchors, recovery. Written so you know exactly what happens every session.',
  },
  {
    n: '03',
    title: 'Training',
    body: 'On the floor with me at Virgin Active Kimberley. Coached, corrected, progressed. We re-test on schedule so progress is visible, not vibes.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-16 md:mb-24 js-reveal">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
            <span className="h-px w-6 bg-signal" /> Process
          </span>
          <h2 className="mt-6 font-display tracking-tightest leading-[1.0] text-5xl md:text-6xl lg:text-7xl">
            Three moves.<br />
            <span className="italic text-bone/80">One outcome.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-bone/10 border border-bone/10">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-ink p-8 md:p-10 lg:p-12 js-reveal group">
              <div className="flex items-baseline justify-between">
                <span className="font-display italic text-6xl md:text-7xl text-signal/80 tracking-tighter2 leading-none transition-transform duration-700 ease-editorial group-hover:-translate-y-1">{s.n}</span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-bone/40">Step</span>
              </div>
              <h3 className="mt-8 font-display text-3xl md:text-4xl tracking-tightest leading-tight">{s.title}</h3>
              <p className="mt-4 text-bone/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
