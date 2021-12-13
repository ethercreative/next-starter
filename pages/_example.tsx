import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import gql from 'fake-tag';
import { client } from '../client';
import { formatStaticPaths } from 'helpers/formatStaticPaths';
import { Fallback, Page } from 'components';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Fallback />;
  }

  return (
    <Page seo={post.seo}>
      <p>post</p>
    </Page>
  );
};

interface Data {
  post: Post_Post_Entry;
}

export const getStaticProps: GetStaticProps<Data> = async (context) => {
  const data = await client(context).request<Data>(
    gql`
      query Post($slug: String!) {
        post: entry(slug: [$slug]) {
          ... on post_post_Entry {
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
    { slug: context.params.slug },
  );

  return {
    props: {
      ...data,
    },
    revalidate: Number(process.env.REVALIDATE_INTERVAL ?? 10),
  };
};

export const getStaticPaths = async () => {
  const { posts } = await client().request(
    gql`
      query PostSlugs {
        posts: entries(section: "post") {
          slug
        }
      }
    `,
  );

  return formatStaticPaths(posts);
};

export default Post;
