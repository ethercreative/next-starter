import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Header } from '@/components';
import '../public/style.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href='/assets/favicon.svg' />
    </Head>

    <div className='grid gap-y-16 md:gap-y-24'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
);

export default App;
