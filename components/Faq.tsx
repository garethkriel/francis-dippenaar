'use client';
import { useState } from 'react';

const FAQ = [
  {
    q: 'What can I expect from my consultation?',
    a: "A proper conversation, movement screen, and a baseline read on where you are. We agree the goal, the timeline, and what your first four weeks look like — no template plans.",
  },
  {
    q: 'Do I need to be a Virgin Active member?',
    a: 'Yes — sessions run on the Virgin Active Kimberley floor, so you\'ll need active membership. Contracting for the training packages happens through the club.',
  },
  {
    q: 'How often should I train with a PT?',
    a: 'Most clients do best with 2–3 coached sessions a week, plus one or two self-directed workouts. The intro pack is designed so we can figure out the right cadence for you.',
  },
  {
    q: 'I\'ve never trained before — is this for me?',
    a: 'Especially for you. My job is to make the first six weeks feel doable, teach you the movements properly, and build the habit before we push loading.',
  },
  {
    q: 'Do you train children and older clients?',
    a: 'Yes — I\'m a Qualified Children\'s Fitness Specialist and a Certified Elderly Fitness Specialist. Both groups need training designed for them; that\'s what they get.',
  },
  {
    q: 'What about nutrition?',
    a: 'I coach on the fundamentals — protein targets, meal structure, alcohol, hydration, sleep. For medical, macros-to-the-gram plans, or clinical conditions, I refer you to a registered dietitian.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-coal py-24 md:py-40 border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start js-reveal">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-signal">
            <span className="h-px w-6 bg-signal" /> FAQ
          </span>
          <h2 className="mt-6 font-display tracking-tightest leading-[0.95] text-5xl md:text-6xl">
            Common<br /><span className="italic text-bone/70">questions.</span>
          </h2>
          <p className="mt-6 text-bone/55 leading-relaxed">
            Anything I&rsquo;ve missed? WhatsApp me directly &mdash; I answer in the evenings.
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <ul className="divide-y divide-bone/10 border-y border-bone/10">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="js-reveal">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                  >
                    <span className="font-display text-2xl md:text-3xl tracking-tighter2 leading-tight text-bone group-hover:text-signal transition-colors duration-500">
                      {item.q}
                    </span>
                    <span
                      className={`mt-2 flex-none inline-flex h-8 w-8 items-center justify-center rounded-full border border-bone/25 text-bone transition-transform duration-500 ease-editorial ${isOpen ? 'rotate-45 bg-signal border-signal' : ''}`}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </span>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-editorial ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-bone/75 text-lg leading-relaxed max-w-2xl">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
