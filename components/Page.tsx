import * as React from 'react';
import Head from 'next/head';

interface Props {
  seo: Ether_SeoData;
}

const Page: React.FC<Props> = ({ seo, children }) => (
  <>
    <Head>
      <title>{seo.title!}</title>
      <meta name='description' content={seo.description!} />
    </Head>

    {children}
  </>
);

export default Page;
