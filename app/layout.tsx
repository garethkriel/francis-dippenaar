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

export const metadata: Metadata = {
  title: "Francis Dippenaar — Personal Trainer, Virgin Active Kimberley",
  description:
    "Senior Personal Trainer at Virgin Active Kimberley. Let's be Frank — resistance training, weight loss, weight gain, kids' and elderly fitness. Book a session from R360.",
  metadataBase: new URL('https://francisdippenaar.co.za'),
  openGraph: {
    title: "Francis Dippenaar — Personal Trainer, Virgin Active Kimberley",
    description:
      "Let's be Frank. Senior Personal Trainer, TRIFOCUS certified. Book at Virgin Active Kimberley.",
    type: 'website',
    locale: 'en_ZA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
