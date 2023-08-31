import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3982b9',
        'custom-blue-dark': '#20446E',
        'custom-gold': '#B4803C',
        'accent-blue': '#15BAFE'
        // Add more custom colors here
      },
      fontSize: {
        '2xs': '10px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.diagonal-cut': {
          clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config
