import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface PreviewData {
  previewToken?: string;
}

interface Variables {
  [key: string]: any;
}

export const client = (context?: GetStaticPropsContext<ParsedUrlQuery>) => {
  let endpoint = process.env.NEXT_PUBLIC_GRAPH_URL;
  const previewData = (context?.previewData as PreviewData) ?? null;

  if (previewData?.previewToken) {
    endpoint += `?token=${previewData?.previewToken}`;
  }

  const request = async <T>(
    query: string,
    variables: Variables = {},
  ): Promise<T> => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (process.env.GRAPH_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GRAPH_TOKEN}`;
    }

    interface Response {
      data: T;
      errors: {
        message: string;
      }[];
    }

    const { data, errors }: Response = await (
      await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: String(query),
          variables,
        }),
      })
    ).json();

    if (errors?.length) {
      throw new Error(errors[0].message);
    }

    return data;
  };

  return {
    request,
  };
};
