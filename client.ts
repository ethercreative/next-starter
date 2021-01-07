import { GetStaticPropsContext } from 'next';
import { GraphQLClient } from 'graphql-request';
import { ParsedUrlQuery } from 'querystring';

export const client = (
  context: GetStaticPropsContext<ParsedUrlQuery>,
): GraphQLClient => {
  let endpoint = process.env.GRAPH_URL ?? '';

  if (context.preview) {
    endpoint += `?token=${context.previewData?.token}`;
  }

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
    },
  });
};
