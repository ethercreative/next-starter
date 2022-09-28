import { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'client';

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!req.query.entryUid) {
      return res
        .status(401)
        .json({ message: 'Not allowed to access this route' });
    }

    const { entry } = await client().request(
      /* GraphQL */ `
        query Preview($uid: String!) {
          entry(uid: [$uid], status: null) {
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
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export default preview;
