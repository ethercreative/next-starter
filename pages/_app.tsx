import * as React from 'react';
import type { AppProps } from 'next/app';
import * as Sentry from '@sentry/react';
import { Footer, Header } from '../components';
import '../public/style.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div className='gap-y-16 md:gap-y-24'>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
