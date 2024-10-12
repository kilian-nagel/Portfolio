/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      white:'#FFFFFF',
      gray:'#171717',
      'gray-muted':'#202020',
      'gray-muted-dark':'#161616'
    },
    extend: {
      keyframes: {
        'icon-out-and-in':{
          '0%':{
            transform:'translate(0px,0px)',
            opacity:'1',
          },
          '10%':{
            transform:'translate(40px,-40px)',
            opacity:'0',
          },
          '10.1%':{
            transform:'translate(-40px,40px)',
            opacity:'0',
          },
          '20%':{
            transform:'translate(0px,0px)',
            opacity:'1',
          },
          '100%':{
            transform:'translate(0px,0px)',
            opacity:'1',
          }
        }
      },
      animation:{
        'out-and-in':'icon-out-and-in 15s ease-in-out infinite'
      }
    }, 
    screens:{
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '639px'},
      '900px': {'min':'900px'}
    }
  },
  plugins: [],
}
