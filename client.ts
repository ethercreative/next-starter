import { GetStaticPropsContext } from 'next';
import { GraphQLClient } from 'graphql-request';
import { ParsedUrlQuery } from 'querystring';

interface PreviewData {
  previewToken?: string;
}

export const client = (
  context?: GetStaticPropsContext<ParsedUrlQuery>,
): GraphQLClient => {
  let endpoint = process.env.NEXT_PUBLIC_GRAPH_URL ?? '';
  const previewData = (context?.previewData as PreviewData) ?? null;

  if (previewData?.previewToken) {
    endpoint += `?token=${previewData?.previewToken}`;
  }

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN
        ? `Bearer ${process.env.GRAPH_TOKEN}`
        : '',
    },
  });
};
