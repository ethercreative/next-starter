import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { client } from '../../client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query['x-craft-live-preview'] || !req.query.entryUid) {
    return res
      .status(401)
      .json({ message: 'Not allowed to access this route' });
  }

  const { entry } = await client().request(
    gql`
      query {
        entry(uid: "${req.query.entryUid}") {
          url
        }
      }
    `,
  );

  if (!entry?.url) {
    return res.status(404).json({
      message: `URL of the entry "${req.query.entryUid}" could not be fetched`,
    });
  }

  res.setPreviewData({
    previewToken: req.query.token ?? null,
  });

  const parsedUrl = new URL(entry.url);
  res.writeHead(307, { Location: parsedUrl.pathname });
  res.end();
};
