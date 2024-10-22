import * as React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './../theme/index';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <HeaderMenu />
        <Hero />
        <About />
      </Box>
    </ThemeProvider>
  );
}
