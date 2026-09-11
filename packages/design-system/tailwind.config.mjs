import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['../../app/**/*.{js,ts,jsx,tsx}', '../**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      serif: ['Ialiana', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      fontWeight: {
        400: '400',
        500: '500'
      },
      fontSize: {
        'display-1': '3.75rem',
        'display-2': '3.25rem',
        'display-3': '2.75rem',
        'display-4': '2.25rem',
        'heading-1': '2.5rem',
        'heading-2': '2.25rem',
        'heading-3': '2rem',
        'heading-4': '1.75rem',
        'heading-5': '1.5rem',
        'heading-6': '1.125rem',
        'label-1': '1.125rem',
        'label-2': '1rem',
        'label-3': '0.875rem',
        'label-4': '0.75rem',
        'body-1': '1.125rem',
        'body-2': '1rem',
        'body-3': '0.875rem',
        'body-4': '0.75rem',
        'body-5': '0.625rem',
        'body-6': '0.5rem'
      }
    }
  }
};
