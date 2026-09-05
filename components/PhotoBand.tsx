import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  quote: string;
  attribution: string;
  priorityHint?: boolean;
};

export default function PhotoBand({ src, alt, quote, attribution }: Props) {
  return (
    <section
      aria-label="Training at Virgin Active Kimberley"
      className="relative h-[60svh] md:h-[75svh] w-full overflow-hidden bg-ink js-parallax"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-center parallax-target scale-110"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/70" aria-hidden />
      <div className="absolute inset-0 grain" aria-hidden />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 md:px-10 flex items-center">
        <blockquote className="max-w-3xl js-reveal">
          <p className="font-display italic tracking-tighter2 leading-[1.05] text-3xl sm:text-4xl md:text-6xl text-bone">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-6 md:mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-signal" aria-hidden />
            <cite className="not-italic text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-bone/60">
              {attribution}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
