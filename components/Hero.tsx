'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink noise">
      {/* Backdrop image */}
      <div className="absolute inset-0">
        <Image
          src="/img/francis-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] hero-image"
        />
        {/* Gradients — heavy top nav shade (hides source-image UI chrome), left focus, bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/50 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/10 md:via-ink/30" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 md:mb-10 hero-eyebrow opacity-0">
            <span className="h-px w-10 bg-signal" aria-hidden />
            <span className="text-[11px] uppercase tracking-[0.28em] text-bone/80">Senior Personal Trainer · Virgin Active Kimberley</span>
          </div>

          <h1 className="font-display tracking-tightest leading-[0.9]">
            <span className="block text-[15vw] xs:text-[13vw] md:text-[9vw] lg:text-[8.2rem] xl:text-[9.5rem] reveal-mask">
              <span className="hero-line-1">Let's be</span>
            </span>
            <span className="block text-[15vw] xs:text-[13vw] md:text-[9vw] lg:text-[8.2rem] xl:text-[9.5rem] italic text-signal reveal-mask">
              <span className="hero-line-2">Frank.</span>
            </span>
          </h1>

          <div className="mt-8 md:mt-10 grid md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-end">
            <p className="max-w-lg text-base md:text-lg text-bone/75 leading-relaxed hero-para opacity-0">
              Straight-talking, science-backed personal training. Resistance, weight management,
              youth &amp; senior conditioning — programmed around <em className="not-italic text-bone">you</em>,
              delivered on the floor at Virgin Active Kimberley.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 hero-cta opacity-0">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-bone text-ink px-6 py-4 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-signal hover:text-bone transition-all duration-500 ease-editorial min-w-[240px]"
              >
                Book a session
                <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1" aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/27725254898"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-full border border-bone/25 text-bone px-6 py-4 text-[13px] uppercase tracking-[0.2em] hover:border-bone/70 transition-all duration-500 min-w-[240px]"
              >
                WhatsApp Francis
                <span className="inline-block transition-transform duration-500 ease-editorial group-hover:translate-x-1" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom meta rail */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 hero-meta opacity-0">
          {[
            { k: 'From', v: 'R360', sub: 'per session' },
            { k: 'Location', v: 'Kimberley', sub: 'Virgin Active' },
            { k: 'Certified', v: 'TRIFOCUS', sub: 'Nat. Diploma' },
            { k: 'Availability', v: 'Mon — Sat', sub: '05:30 — 19:00' },
          ].map((m) => (
            <div key={m.k} className="border-l border-bone/15 pl-4">
              <div className="text-[10px] uppercase tracking-[0.24em] text-bone/50">{m.k}</div>
              <div className="mt-2 font-display text-2xl md:text-3xl tracking-tighter2 leading-none">{m.v}</div>
              <div className="mt-1 text-xs text-bone/60">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-3 text-bone/50">
        <span className="text-[10px] uppercase tracking-[0.28em] rotate-90 origin-center translate-y-6">Scroll</span>
        <span className="block h-10 w-px bg-bone/30 scroll-line" />
      </div>
    </section>
  );
}
