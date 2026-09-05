'use client';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#specialisations', label: 'Specialisations' },
  { href: '#packages', label: 'Packages' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled ? 'backdrop-blur-md bg-ink/70 border-b border-bone/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group" aria-label="Francis Dippenaar — home">
          <span className="font-display italic text-2xl md:text-[26px] leading-none tracking-tighter2">Francis</span>
          <span className="hidden xs:inline text-[11px] uppercase tracking-[0.2em] text-bone/60 group-hover:text-bone transition">
            Dippenaar
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.18em] text-bone/70 hover:text-bone transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-bone/25 hover:border-bone/60 px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] text-bone hover:bg-bone hover:text-ink transition-all duration-300"
        >
          Book a session
          <span aria-hidden>→</span>
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-bone"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d={open ? 'M6 6l14 14M20 6L6 20' : 'M4 8h18M4 18h18'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial ${
          open ? 'max-h-96 opacity-100 border-b border-bone/5' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-ink/95 backdrop-blur-md" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-display tracking-tighter2 text-bone/90 hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-signal text-bone px-6 py-3 text-sm uppercase tracking-[0.18em]"
          >
            Book a session
          </a>
        </nav>
      </div>
    </header>
  );
}
