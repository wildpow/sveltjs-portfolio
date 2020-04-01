module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#191a1d',
      secondary: '#5e5e5e',
      figure_hero: '#121316',
      figure_projects: '#f6f6f6',
      button_blue: '#4b6cc1',
    }),
    fontFamily: {
      body: ['Rubik', 'Arial', 'sans-serif'],
    },
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#ababab',
      secondary: '#919191',
      list: '#5e5e5e',
      projects: '#191a1d',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      article: '#f6f6f6',
    }),
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': '2.125rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      // new
      '7xl': '4.5rem',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
