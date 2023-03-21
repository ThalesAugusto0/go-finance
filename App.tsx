import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/screens/Global/styles/theme';
import { Dashboard } from './src/screens/Dashboard/index';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

