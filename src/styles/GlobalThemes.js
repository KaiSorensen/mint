import './GlobalThemes.css';

const themes = {
    red: {
      background: {
        light: 'var(--background-red-light)',
        dark: 'var(--background-red-dark)',
      },
      text: {
        light: 'var(--text-red-light)',
        dark: 'var(--text-red-dark)',
      },
      fill: {
        light: 'var(--fill-red-light)',
        dark: 'var(--fill-red-dark)',
      },
    },
    blue: {
      background: {
        light: 'var(--background-blue-light)',
        dark: 'var(--background-blue-dark)',
      },
      text: {
        light: 'var(--text-blue-light)',
        dark: 'var(--text-blue-dark)',
      },
      fill: {
        light: 'var(--fill-blue-light)',
        dark: 'var(--fill-blue-dark)',
      },
    },
    gray: {
      background: {
        light: 'var(--background-gray-light)',
        dark: 'var(--background-gray-dark)',
      },
      text: {
        light: 'var(--text-gray-light)',
        dark: 'var(--text-gray-dark)',
      },
      fill: {
        light: 'var(--fill-gray-light)',
        dark: 'var(--fill-gray-dark)',
      },
    },
    // Add more colors as needed
  };

  
const color = 'red';

export default function getTheme() {
    if (color === 'red') return themes.red;
    if (color === 'blue') return themes.blue;
    if (color === 'gray') return themes.gray;
    else return themes.gray;
}