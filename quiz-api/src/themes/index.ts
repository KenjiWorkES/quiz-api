import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#25274d',
    secondary: '#464866',
    terciary: '#2e9cca',
    quaternary: '#29648a',
    neutral: '#aaabb8',
    white: '#fff',
    black: '#0A0025',
  },
};

const breakpoints = {
  sm: '1024px',
  md: '1024px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
};

export const defaultTheme = extendTheme({ colors, breakpoints });
