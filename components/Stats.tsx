const STATS = [
  { v: '5', label: 'Specialist disciplines', sub: 'Kids, seniors, resistance, loss, gain' },
  { v: '2', label: 'TRIFOCUS qualifications', sub: 'National Diploma + Higher Certificate' },
  { v: '45', label: 'Minutes per session', sub: 'Focused, coached, no wasted sets' },
  { v: '6', label: 'Packages available', sub: 'From single intro to custom monthly' },
];

export default function Stats() {
  return (
    <section aria-label="At a glance" className="relative bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-10">
          {STATS.map((s) => (
            <div key={s.label} className="js-reveal group">
              <div className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tightest leading-none text-bone/95 transition-colors duration-500 group-hover:text-signal">
                {s.v}
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-bone/25 to-transparent" aria-hidden />
              <div className="mt-4 text-sm md:text-base text-bone/85">{s.label}</div>
              <div className="mt-1.5 text-xs text-bone/45 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
