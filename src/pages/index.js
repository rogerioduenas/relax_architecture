import * as React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './../theme/index';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/ClientsUsers';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <HeaderMenu />
        <Hero />
        <About />
        <Portfolio />
        <Clients/>
      </Box>
    </ThemeProvider>
  );
}
