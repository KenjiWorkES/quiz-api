import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    black: '#000',
    white: '#fff',
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
