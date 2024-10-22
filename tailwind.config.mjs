/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'border-[#419EBB]',
    'bg-[#419EBB]',
    'bg-[#DEF4FC]',
    'border-[#EDA249]',
    'bg-[#EDA249]',
    'bg-[#F7CC7F]',
    'border-[#6D2ED5]',
    'bg-[#6D2ED5]',
    'bg-[#545BFE]',
    'border-[#1EC1A2]',
    'bg-[#1EC1A2]',
    'bg-[#65F0D5]',
    'border-[#D83A34]',
    'bg-[#D83A34]',
    'bg-[#ECAD7A]',
    'border-[#CD5120]',
    'bg-[#CD5120]',
    'bg-[#FCCB6B]',
    'border-[#D14C32]',
    'bg-[#D14C32]',
    'bg-[#FF6A45]',
    'border-[#2D68F0]',
    'bg-[#2D68F0]',
    'bg-[#497EFA]'
  ],
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
        'dark-blue': '#070724'
      },
      spacing: {
        13: '3.25rem'
      }
    }
  },
  plugins: []
};
