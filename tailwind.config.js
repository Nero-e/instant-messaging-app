/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'electric-indigo': {
          DEFAULT: '#5932e6',
          '50': '#f3f3ff',
          '100': '#eaeafd',
          '200': '#d8d7fd',
          '300': '#bbb7fb',
          '400': '#998ef7',
          '500': '#7761f1',
          '600': '#5932e6',
          '700': '#552dd4',
          '800': '#4725b2',
          '900': '#3c2191',
        },
        'raspberry': {
          DEFAULT: '#D81159',
          '50': '#fef1f7',
          '100': '#fde6f2',
          '200': '#fdcde5',
          '300': '#fda4cf',
          '400': '#fb6bae',
          '500': '#f4408f',
          '600': '#e41e6b',
          '700': '#d81159',
          '800': '#a41044',
          '900': '#88133c',
        },
        'aureolin': {
          DEFAULT: '#FAF100',
          '50': '#fcffe7',
          '100': '#f6ffc1',
          '200': '#f2ff86',
          '300': '#f3ff41',
          '400': '#fbff0d',
          '500': '#faf100',
          '600': '#d1b700',
          '700': '#a68502',
          '800': '#89670a',
          '900': '#74540f',
        },
        'non-photo-blue': {
          DEFAULT: '#73D2DE',
          '50': '#effbfc',
          '100': '#d7f4f6',
          '200': '#b3e8ee',
          '300': '#73d2de',
          '400': '#44bbcc',
          '500': '#289fb2',
          '600': '#248096',
          '700': '#23687b',
          '800': '#255665',
          '900': '#234856',
        },
        'ghost-white': {
          DEFAULT: '#F3F4FA',
          '50': '#f3f4fa',
          '100': '#e5e7f4',
          '200': '#d2d6eb',
          '300': '#b2bade',
          '400': '#8d97cd',
          '500': '#7278bf',
          '600': '#5f61b1',
          '700': '#5754a1',
          '800': '#4c4984',
          '900': '#403e6a',
        },
        'rich-black': {
          DEFAULT: '#0F1020',
          '50': '#f0f4fd',
          '100': '#e4ebfb',
          '200': '#cedaf7',
          '300': '#afc1f2',
          '400': '#8fa1ea',
          '500': '#7480e0',
          '600': '#595dd2',
          '700': '#333438',
          '800': '#0f1020',
          '900': '#07070e',
        },
      },
    },
  },
  plugins: [],
};
