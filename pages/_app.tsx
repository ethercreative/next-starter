import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Footer, Header } from 'components';
import '../public/style.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href='/assets/favicon.svg' />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />

    {process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_GA_TAG ? (
      <>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TAG}`}
        />

        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TAG}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </>
    ) : null}
  </>
);

export default App;
