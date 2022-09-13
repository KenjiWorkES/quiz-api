import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    black: '#000',
    white: '#fff',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
