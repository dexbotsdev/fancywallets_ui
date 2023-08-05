import React from 'react';
import {  MantineProvider } from '@mantine/core';
import LandingPage from './LandingPage';
 
function App() {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: 'dark',
      colors: { 
        deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */], 
        blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
      },

      shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      },

      headings: {
        fontFamily: 'Exo, Inter',
        sizes: {
          h1: { fontSize: '2rem' },
        },
      },
    }}
  >
    <LandingPage />
  </MantineProvider>
  );
}

export default App;
