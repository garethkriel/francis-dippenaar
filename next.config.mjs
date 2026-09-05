/**
 * Content Security Policy.
 *
 * 'unsafe-inline' is present on script-src and style-src because this is a
 * statically-prerendered App Router site: Next injects an inline bootstrap
 * script for hydration and next/font injects an inline <style> block. Removing
 * them requires a nonce issued from middleware, which forces every request to
 * render dynamically. For a brochure site with no auth, no user input and no
 * third-party JS, that trade is not worth the cost — the meaningful controls
 * here are object-src/base-uri/form-action/frame-ancestors, which are locked.
 *
 * If a form or third-party script is ever added, revisit this and move to a
 * nonce-based policy in middleware.
 */
const isDev = process.env.NODE_ENV === 'development';

/**
 * React's development build uses eval() for debugging features (rebuilding
 * callstacks across environments). It never does so in production. So
 * 'unsafe-eval' is granted in dev only — the shipped policy stays strict.
 */
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // Dev needs the HMR websocket; production talks to nothing but its own origin.
  isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
  // Google Maps place embed in the contact section
  "frame-src https://www.google.com https://maps.google.com",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  // Belt-and-braces alongside frame-ancestors, for older browsers
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()',
      'camera=()',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'payment=()',
      'usb=()',
      'interest-cohort=()',
    ].join(', '),
  },
  // HSTS is production-only: pinning it from a localhost dev server would force
  // https on every other service you run on localhost.
  ...(isDev
    ? []
    : [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
      ]),
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework/version in responses
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // No remote images are used; refuse any that get added without review
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
