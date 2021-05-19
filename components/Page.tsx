import * as React from 'react';
import Head from 'next/head';

interface Props {
  // Uncomment this once hooked up to Craft and types have been generated
  // seo: Ether_SeoData;
  seo: {
    title: string;
    description: string;
  };
}

const Page: React.FC<Props> = ({ seo, children }) => (
  <>
    <Head>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
    </Head>

    {children}
  </>
);

export default Page;
