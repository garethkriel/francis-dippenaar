const WORDS = [
  'RESISTANCE',
  'MOBILITY',
  'HYPERTROPHY',
  'CONDITIONING',
  'YOUTH',
  'SENIORS',
  'FAT LOSS',
  'STRENGTH',
  'RECOVERY',
  'ACCOUNTABILITY',
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative border-y border-bone/10 bg-coal overflow-hidden py-6 md:py-8">
      <div className="marquee-track flex whitespace-nowrap gap-14 md:gap-20 will-change-transform">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display italic text-2xl md:text-4xl tracking-tighter2 text-bone/80"
          >
            {w}
            <span className="mx-8 md:mx-14 text-signal" aria-hidden>◆</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-coal to-transparent" />
    </div>
  );
}
