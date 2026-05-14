/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        ink: '#07090d',
        graphite: '#111722',
        midnight: '#07162b',
        steel: '#d8dee8',
        chrome: '#f5f7fa',
        ocean: '#0a2b52',
      },
      boxShadow: {
        luxury: '0 28px 90px rgba(3, 10, 24, 0.18)',
        glass: '0 18px 60px rgba(7, 22, 43, 0.26)',
      },
      backgroundImage: {
        'radial-luxury':
          'radial-gradient(circle at 18% 20%, rgba(76, 116, 171, 0.22), transparent 28%), radial-gradient(circle at 82% 14%, rgba(255, 255, 255, 0.12), transparent 24%), linear-gradient(135deg, #05070b 0%, #07162b 46%, #0d1118 100%)',
      },
    },
  },
  plugins: [],
};
