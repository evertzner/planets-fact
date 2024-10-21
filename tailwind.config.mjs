/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif']
      },
      colors: {
        blue: {
          DEFAULT: '#2D68F0'
        },
        'dark-blue': '#070724',
        'light-blue': '#419EBB',
        gray: {
          DEFAULT: '#838391'
        },
        'dark-gray': '#38384F',
        yellow: {
          DEFAULT: '#EDA249'
        },
        orange: {
          DEFAULT: '#CD5120'
        },
        'orange-red': '#D14C32',
        purple: {
          DEFAULT: '#6D2ED5'
        },
        turquoise: {
          DEFAULT: '#1EC1A2'
        },
        red: {
          DEFAULT: '#D83A34'
        }
      },
      spacing: {
        13: '3.25rem'
      }
    }
  },
  plugins: []
};
