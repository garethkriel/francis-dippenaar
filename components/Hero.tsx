import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/img/francis-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-image"
        />
        {/* Editorial grade: lift the blacks toward the brand red, crush the rest.
            Doubles as cover for the low-resolution source. */}
        <div className="absolute inset-0 bg-signal/10 mix-blend-color" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25 md:via-ink/45" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink to-transparent" aria-hidden />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_18rem_6rem_rgba(10,10,10,0.95)]" aria-hidden />
        <div className="absolute inset-0 grain" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-36 md:pt-44 pb-20 md:pb-28 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8 md:mb-12 hero-eyebrow opacity-0">
            <span className="h-px w-12 bg-signal" aria-hidden />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-bone/85">
              Senior Personal Trainer
            </span>
            <span className="h-1 w-1 rounded-full bg-bone/30" aria-hidden />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-bone/55">
              Virgin Active Kimberley
            </span>
          </div>

          <h1 className="font-display tracking-tightest leading-[0.88]">
            <span className="block text-[16vw] xs:text-[14vw] md:text-[10vw] lg:text-[8.6rem] xl:text-[10rem] reveal-mask">
              <span className="hero-line-1">Strong at</span>
            </span>
            <span className="block text-[16vw] xs:text-[14vw] md:text-[10vw] lg:text-[8.6rem] xl:text-[10rem] italic text-signal reveal-mask">
              <span className="hero-line-2">any age.</span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <p className="max-w-xl text-base md:text-lg text-bone/70 leading-relaxed hero-para opacity-0">
              Qualified in children&rsquo;s fitness, certified in senior conditioning, and coaching
              serious resistance work in between. Whoever you are and wherever you&rsquo;re starting,
              the programme is built for your body &mdash; not lifted from a template.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 hero-cta opacity-0">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden rounded-full bg-bone px-7 py-4 text-[12px] uppercase tracking-[0.2em] font-medium text-ink min-w-[250px] transition-colors duration-500"
              >
                <span className="absolute inset-0 -translate-x-full bg-signal transition-transform duration-500 ease-editorial group-hover:translate-x-0" aria-hidden />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-bone">Book a session</span>
                <span className="relative z-10 transition-all duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-bone" aria-hidden>&rarr;</span>
              </a>
              <a
                href="https://wa.me/27725254898"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full border border-bone/25 px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-bone/90 min-w-[250px] transition-all duration-500 hover:border-bone/70 hover:text-bone"
              >
                WhatsApp Francis
                <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1" aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Meta rail */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 hero-meta opacity-0">
          {[
            { k: 'Sessions from', v: 'R360', sub: '45 minutes, one-on-one' },
            { k: 'Based at', v: 'Kimberley', sub: 'Virgin Active, Northern Cape' },
            { k: 'Qualified', v: 'TRIFOCUS', sub: 'Diploma + Higher Certificate' },
            { k: 'On the floor', v: 'Mon — Sat', sub: '05:30 until 19:00' },
          ].map((m) => (
            <div key={m.k} className="relative pl-5">
              <span className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-signal/70 via-bone/20 to-transparent" aria-hidden />
              <div className="text-[9px] uppercase tracking-[0.26em] text-bone/45">{m.k}</div>
              <div className="mt-2.5 font-display text-2xl md:text-[1.75rem] tracking-tighter2 leading-none">{m.v}</div>
              <div className="mt-1.5 text-[11px] md:text-xs text-bone/55 leading-snug">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-4 text-bone/40">
        <span className="text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
        <span className="block h-12 w-px bg-gradient-to-b from-bone/40 to-transparent scroll-line" />
      </div>
    </section>
  );
}
