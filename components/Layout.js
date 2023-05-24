import Head from 'next/head';
import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Little Girls Clothes</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Little Girls Clothes</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}
