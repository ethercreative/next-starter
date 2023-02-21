import Head from 'next/head';

interface Props extends React.PropsWithChildren {
  seo: {
    title: string;
    description: string;
  };
}

export const Page = ({ seo, children }: Props) => (
  <>
    <Head>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
    </Head>

    <main>{children}</main>
  </>
);
