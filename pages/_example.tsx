import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { gql } from 'graphql-request';
import { client } from '../client';
import { Fallback, Page } from '../components';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Fallback />;
  }

  return (
    <Page seo={post.seo!}>
      <p>post</p>
    </Page>
  );
};

type Data = {
  post: Post_Post_Entry;
};

export const getStaticProps: GetStaticProps<Data> = async (context) => {
  const { post } = await client(context).request<Data>(
    gql`
      query GetPost {
        post: entry(slug: "post") {
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
  );

  return {
    props: {
      post,
    },
    revalidate: 120,
  };
};

type Posts = {
  posts: Post_Post_Entry[];
};

export const getStaticPaths = async () => {
  const { posts } = await client().request<Posts>(
    gql`
      query GetPosts {
        posts: entries(section: "post") {
          ... on post_post_Entry {
            id
            slug
          }
        }
      }
    `,
  );

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

export default Post;
