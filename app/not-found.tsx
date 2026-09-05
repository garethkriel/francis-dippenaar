import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] bg-ink flex items-center justify-center px-6">
      <div className="absolute inset-0 grain" aria-hidden />
      <div className="relative text-center max-w-xl">
        <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-signal">
          <span className="h-px w-8 bg-signal" /> Error 404
        </span>
        <h1 className="mt-8 font-display tracking-tightest leading-[0.9] text-6xl md:text-8xl">
          Nothing
          <br />
          <span className="italic text-bone/60">here.</span>
        </h1>
        <p className="mt-8 text-bone/60 leading-relaxed">
          That page doesn&rsquo;t exist. The training still does.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-4 rounded-full bg-bone px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors duration-500 hover:bg-signal hover:text-bone"
        >
          Back to the start
          <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
