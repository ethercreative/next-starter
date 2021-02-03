import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { client } from '../../client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.entryUid) {
    return res
      .status(401)
      .json({ message: 'Not allowed to access this route' });
  }

  const { entry } = await client().request(
    gql`
      query GetPreview($uid: String) {
        entry(uid: [$uid]) {
          url
        }
      }
    `,
    { uid: req.query.entryUid },
  );

  if (!entry?.url) {
    return res.status(404).json({
      message: `URL of the entry "${req.query.entryUid}" could not be fetched`,
    });
  }

  res.setPreviewData({
    previewToken: req.query.token ?? null,
  });

  res.redirect(entry.url);
};
