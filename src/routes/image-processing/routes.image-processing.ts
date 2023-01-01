import { Response, Router, Request } from 'express';
import sharp from 'sharp';

import utils from '../../utils';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { filename, height, width, type } = req.query;
  const imageUrl = utils.createImageUrl(`${filename}.${type}`);
  const image = utils.getImage(imageUrl);

  if (!image) {
    return res.end('file does not exist');
  }

  const newFilename = `${filename}_${height}X${width}.${type}`;
  const thumbnailUrl = utils.createImageUrl(`/thumbnail/${newFilename}`);

  // check if thumbnail exist
  const thumbnail = utils.getImage(thumbnailUrl);

  if (!thumbnail) {
    // resize the image
    const w = Number(width);
    const h = Number(height);

    const data = await sharp(imageUrl)
      .resize(w, h)
      .jpeg({ mozjpeg: true })
      .toBuffer();

    // then write the new thumbnail
    utils.writeThumbNail(thumbnailUrl, data);
    res.sendFile(thumbnailUrl);
  } else {
    res.sendFile(thumbnailUrl);
  }
});

export default router;
