export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8 js-reveal">
            <div className="font-display tracking-tightest leading-[0.85] text-[15vw] md:text-[10vw] lg:text-[8.5rem]">
              <span className="block text-bone/90">Francis</span>
              <span className="block italic text-bone/45">
                Dippenaar<span className="text-signal not-italic">.</span>
              </span>
            </div>
          </div>
          <div className="md:col-span-4 space-y-4 text-sm text-bone/60 js-reveal">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-bone/40">Contact</div>
              <div className="mt-2 space-y-1">
                <a href="tel:+27725254898" className="block hover:text-bone">+27 72 525 4898</a>
                <a href="mailto:francisharolddippenaar@gmail.com" className="block hover:text-bone break-all">francisharolddippenaar@gmail.com</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-bone/40">Studio</div>
              <div className="mt-2">Virgin Active Kimberley · Northern Cape</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone/40">
          <div>© {new Date().getFullYear()} Francis Dippenaar. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>TRIFOCUS Certified · Higher Certificate & National Diploma in Personal Training</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
