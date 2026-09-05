import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const DESCRIPTION =
  'Senior Personal Trainer at Virgin Active Kimberley. Resistance training, weight loss, weight gain, and qualified youth and senior conditioning. Sessions from R360.';

export const metadata: Metadata = {
  title: {
    default: 'Francis Dippenaar — Personal Trainer, Virgin Active Kimberley',
    template: '%s · Francis Dippenaar',
  },
  description: DESCRIPTION,
  metadataBase: new URL('https://francisdippenaar.co.za'),
  applicationName: 'Francis Dippenaar Personal Training',
  authors: [{ name: 'Francis Dippenaar' }],
  keywords: [
    'personal trainer Kimberley',
    'Virgin Active Kimberley',
    'personal training Northern Cape',
    'strength coach Kimberley',
    'weight loss trainer Kimberley',
    'elderly fitness specialist',
    "children's fitness specialist",
  ],
  openGraph: {
    title: 'Francis Dippenaar — Personal Trainer, Virgin Active Kimberley',
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Francis Dippenaar Personal Training',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true, email: true },
};

// JSON-LD so Google can surface the practice as a local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Francis Dippenaar — Personal Training',
  description: DESCRIPTION,
  telephone: '+27725254898',
  email: 'francisharolddippenaar@gmail.com',
  priceRange: 'R360–R4000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kimberley',
    addressRegion: 'Northern Cape',
    addressCountry: 'ZA',
  },
  areaServed: 'Kimberley, Northern Cape',
  employee: {
    '@type': 'Person',
    name: 'Francis Dippenaar',
    jobTitle: 'Senior Personal Trainer',
    worksFor: { '@type': 'Organization', name: 'Virgin Active Kimberley' },
  },
};

/**
 * Serialise JSON-LD for embedding in a <script> tag.
 *
 * The payload above is entirely static and developer-authored, so there is no
 * injection vector today. This escapes the characters that could terminate the
 * script element or open an HTML comment anyway, so that a future edit which
 * introduces a dynamic value cannot turn this into an XSS sink.
 */
function serialiseJsonLd(data: unknown): string {
  // Escaping <, > and & is what closes the </script> breakout and HTML-comment
  // vectors. The map avoids escape-sequence ambiguity in the replacement string.
  const ESCAPES: Record<string, string> = {
    '<': '\u005cu003c',
    '>': '\u005cu003e',
    '&': '\u005cu0026',
  };
  return JSON.stringify(data).replace(/[<>&]/g, (ch) => ESCAPES[ch]);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialiseJsonLd(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-bone focus:px-5 focus:py-3 focus:text-ink focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
