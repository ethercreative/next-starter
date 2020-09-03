import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { gql } from 'graphql-request';
import { client } from '../client';
import { Text } from 'ether-ui';

const Home = ({ home }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={home.seo!}>
    <Text>Home</Text>
  </Page>
);

type Data = {
  home: Home_Home_Entry;
};

export const getStaticProps: GetStaticProps<Data> = async (context) => {
  const { home } = await client(
    context.preview ? context.previewData?.previewToken : undefined,
  ).request<Data>(
    gql`
      query {
        home: entry(slug: "home") {
          ... on home_home_Entry {
            id
            slug
            title
            seo {
              title
              description
            }
          }
        }
      }
    `,
  );

  return {
    props: {
      home,
    },
    revalidate: 1,
  };
};

export default Home;
