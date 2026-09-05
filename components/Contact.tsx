export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-24 md:py-40 border-t border-bone/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6 js-reveal">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
            <span className="h-px w-6 bg-signal" /> Book
          </span>
          <h2 className="mt-6 font-display tracking-tightest leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
            Let's<br /><span className="italic text-signal">get to work.</span>
          </h2>
          <p className="mt-8 text-bone/70 text-lg leading-relaxed max-w-lg">
            The fastest way in is WhatsApp — I read every message and reply in the evenings.
            Prefer email or a call? Both work.
          </p>

          <div className="mt-10 grid gap-3 max-w-md">
            <a
              href="https://wa.me/27725254898?text=Hi%20Francis%2C%20I'd%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full bg-signal text-bone px-6 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-signalHot transition-all duration-500 ease-editorial"
            >
              <span className="inline-flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 3.4 20.2L2 22l1.9-1.5a11.9 11.9 0 0 0 16.6-17M12 21.2c-1.7 0-3.4-.5-4.9-1.4l-.4-.2-2.8.9.9-2.7-.2-.4A9.2 9.2 0 1 1 12 21.2m5.2-6.9c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2s-.8.9-1 1c-.2.2-.4.2-.6.1a7.7 7.7 0 0 1-2.3-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5s.1-.4 0-.5-.7-1.6-.9-2.2-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.6c.1.2 1.9 2.9 4.6 4.1a15.2 15.2 0 0 0 1.5.6 3.7 3.7 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c-.1-.1-.3-.2-.6-.3" /></svg>
                WhatsApp Francis
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="tel:+27725254898"
              className="group flex items-center justify-between rounded-full border border-bone/25 hover:border-bone/60 px-6 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-all duration-500"
            >
              <span className="inline-flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" /></svg>
                072 525 4898
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:francisharolddippenaar@gmail.com?subject=Personal%20Training%20Enquiry"
              className="group flex items-center justify-between rounded-full border border-bone/25 hover:border-bone/60 px-6 py-4 text-[13px] uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-all duration-500"
            >
              <span className="inline-flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                <span className="normal-case tracking-normal text-[13px]">francisharolddippenaar@gmail.com</span>
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8 js-reveal">
          <div className="rounded-sm border border-bone/10 bg-graphite/60 p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-bone/50">Where to find me</div>
            <div className="mt-4 font-display text-3xl md:text-4xl tracking-tighter2 leading-tight">
              Virgin Active<br /><span className="italic text-bone/80">Kimberley</span>
            </div>
            <div className="mt-6 space-y-2 text-bone/70">
              <div>Northern Cape · South Africa</div>
              <div className="text-sm text-bone/50">Mon — Sat · 05:30 — 19:00</div>
            </div>

            <div className="mt-8 aspect-video rounded-sm overflow-hidden border border-bone/10 bg-ink">
              <iframe
                title="Virgin Active Kimberley — map"
                src="https://www.google.com/maps?q=Virgin+Active+Kimberley&output=embed"
                loading="lazy"
                className="w-full h-full grayscale contrast-125"
              />
            </div>

            <div className="mt-6 text-xs text-bone/50 leading-relaxed">
              Training packages are contracted through Virgin Active. Session times arranged
              directly with Francis — schedules vary week to week.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
