import * as React from 'react';
import type { AppProps } from 'next/app';
import * as Sentry from '@sentry/react';
import { Grid } from 'ether-ui';
import { Footer, Header } from '../components';
import '../public/style.css';

declare var process: {
  env: {
    NODE_ENV: string;
    SENTRY_DSN: string;
  };
};

if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
}

const App = ({ Component, pageProps }: AppProps) => (
  <Grid gapY={{ default: '16', md: '24' }}>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </Grid>
);

export default App;
