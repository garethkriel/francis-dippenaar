import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        coal: '#141414',
        graphite: '#1F1F1F',
        smoke: '#2A2A2A',
        bone: '#F5F1EA',
        chalk: '#EDE7DC',
        signal: '#E5231B',
        signalHot: '#FF2E24',
        gold: '#C9A66B',
        goldSoft: '#B8955F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter2: '-0.03em',
      },
      screens: {
        xs: '420px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
