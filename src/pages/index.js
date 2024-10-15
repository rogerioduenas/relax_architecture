import * as React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './../theme/index';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <HeaderMenu />
        <Hero />
      </Box>
    </ThemeProvider>
  );
}
