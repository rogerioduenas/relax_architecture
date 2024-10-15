// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', //black
    },
    secondary: {
      main: '#ffffff', //white
    },
    themeColor: {
      main: '#EFB21D', //yellow
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      lineHeight: '3.2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    heroSection: {
      fontSize: '2.5rem',
      lineHeight: '3.2rem',
      "@media (max-width: 768px)": {
        fontSize: '1.5rem',
        lineHeight: '2.2rem',
      },
    }
  },
});

export default theme;
