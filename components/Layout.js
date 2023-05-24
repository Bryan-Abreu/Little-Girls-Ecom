import Head from 'next/head';
import React from 'react';
import { AppBar } from '@mui/material';

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Little Girls Clothes</title>
      </Head>
      <AppBar position="static"></AppBar>
    </div>
  );
}
