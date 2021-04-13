import { GetStaticPropsContext } from 'next';
import { GraphQLClient } from 'graphql-request';
import { ParsedUrlQuery } from 'querystring';

export const client = (
  context?: GetStaticPropsContext<ParsedUrlQuery>,
): GraphQLClient => {
  let endpoint = process.env.GRAPH_URL ?? '';

  if (context?.previewData?.previewToken) {
    endpoint += `?token=${context.previewData?.previewToken}`;
  }

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
    },
  });
};
