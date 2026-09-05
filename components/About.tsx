import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-graphite js-parallax">
            <Image
              src="/img/francis-portrait.png"
              alt="Francis Dippenaar, senior personal trainer at Virgin Active Kimberley"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[center_20%] parallax-target"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-bone/10 rounded-sm" />
          </div>
          <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-bone/50">
            <span>Kimberley · Northern Cape</span>
            <span>Est. Virgin Active</span>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <div className="js-reveal">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
              <span className="h-px w-6 bg-signal" /> About
            </span>
            <h2 className="mt-6 font-display tracking-tightest leading-[1.0] text-5xl md:text-6xl lg:text-7xl">
              Straight talk.<br />
              <span className="italic text-bone/80">Serious training.</span>
            </h2>
          </div>

          <div className="mt-10 space-y-6 text-lg md:text-xl leading-relaxed text-bone/75 js-reveal-stagger">
            <p>
              I'm Francis Dippenaar — Senior Personal Trainer on the floor at Virgin Active
              Kimberley. I coach people who are done guessing: honest assessment,
              programming that actually fits your week, and a coach in the room who cares
              whether you show up.
            </p>
            <p>
              Whether you're chasing your first pull-up, coming back from an injury, wanting
              your kid to move well for life, or setting your first personal best after
              sixty — the plan is built around you, not around a template.
            </p>
            <p className="text-bone">
              Let's be Frank. No fluff. Just work that produces the outcome you asked for.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:gap-8 js-reveal-stagger">
            {[
              { id: 'hc', k: 'Higher Certificate', v: 'Personal Training', badge: 'TRIFOCUS' },
              { id: 'nd', k: 'National Diploma', v: 'Personal Training', badge: 'TRIFOCUS' },
              { id: 'kids', k: 'Qualified', v: "Children's Fitness Specialist", badge: 'SAQA' },
              { id: 'elder', k: 'Certified', v: 'Elderly Fitness Specialist', badge: 'SAQA' },
            ].map((c) => (
              <div key={c.id} className="border-t border-bone/15 pt-4">
                <div className="text-[10px] uppercase tracking-[0.24em] text-bone/50">{c.k}</div>
                <div className="mt-2 font-display text-xl md:text-2xl tracking-tighter2 leading-tight">{c.v}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-signal">
                  <span className="h-1 w-1 rounded-full bg-signal" /> {c.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
