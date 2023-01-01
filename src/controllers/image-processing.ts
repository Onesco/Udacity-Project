import { Response, Request } from 'express';
import sharp, { AvailableFormatInfo } from 'sharp';

import utils from '../utils';

const imageProcessor = async (req: Request, res: Response) => {
  const { filename, height, width, type } = req.query;
  const imageUrl = utils.createImageUrl(`${filename}.jpg`);
  const image = utils.getImage(imageUrl);

  if (!image) {
    return res.status(404).end('file does not exist');
  }

  const newFilename = type
    ? `${filename}_${height}X${width}.${type}`
    : `${filename}_${height}X${width}.jpg`;

  const thumbnailUrl = utils.createImageUrl(`/thumbnail/${newFilename}`);

  // check if thumbnail exist
  const thumbnail = utils.getImage(thumbnailUrl);
  const format = type as unknown;

  if (!thumbnail) {
    // resize the image or set it 400 by 400
    const w = width ? Number(width) : 400;
    const h = height ? Number(height) : 400;
    const data = await sharp(imageUrl)
      .resize(w, h)
      .toFormat(format as AvailableFormatInfo, { palette: true })
      .toBuffer();

    // then write the new thumbnail
    utils.writeThumbNail(thumbnailUrl, data);
  }
  res.status(200).sendFile(thumbnailUrl);
};

export default imageProcessor;
