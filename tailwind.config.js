/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06060A',
        coal: '#0B0B12',
        graphite: '#15151E',
        steel: '#1E1E2A',
        gold: {
          DEFAULT: '#C8A24B',
          bright: '#E6C36A',
          deep: '#8C6E2A',
        },
        neon: {
          cyan: '#5BE7FF',
          violet: '#A06BFF',
        },
        bone: '#E9E4D6',
      },
      fontFamily: {
        display: ['"Array"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Satoshi"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(200,162,75,0.4), 0 0 40px -8px rgba(200,162,75,0.45)',
        'neon-glow': '0 0 0 1px rgba(91,231,255,0.35), 0 0 60px -10px rgba(91,231,255,0.5)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(200,162,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,75,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
