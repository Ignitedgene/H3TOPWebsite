module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
      '120%': '120%',
    },
    screens: {
      'sm': {'max': '768px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    backgroundImage: {
      'main-bg': "url('images/background.png')",
      'team-bg': "url('images/neon_bg.jpg')"
    },
    extend: {
      "hover": {
        "NavBarPage": "bg-red-500"
      }
    },
    fontFamily: {
      'blackopsone': ['Black Ops One', 'sans-serif'],
      'audiowide': ['Audiowide', 'sans-serif'],
      'orbitron': ['Orbitron']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
