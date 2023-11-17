import Head from 'next/head';

interface Props extends React.PropsWithChildren {
  // seo: Ether_SeoData;
  seo: {
    title: string;
    description?: string;
  };
}

export const Page = ({ seo, children }: Props) => (
  <>
    <Head>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
    </Head>

    <main className='flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-32'>{children}</main>
  </>
);
