import { Response, Request } from 'express';
import sharp, { AvailableFormatInfo } from 'sharp';

import utils from '../utils';

//Todo:
//  0. destructure all query parameters from the request query object
//  1. Create image url based on the given filename
//  2. check if image exit with such file url
//  3. create image url for the thumbnail image
//  4 check if thumbnail exit with the provided query parameters

const imageProcessor = async (req: Request, res: Response) => {
  //  0. destructure all query parameters from the request query object
  const { filename, height, width, type } = req.query;
  const format = type as unknown;

  // Create image url based on the given filename
  const imageUrl = utils.createImageUrl(`${filename}.jpg`);
  const image = utils.getImage(imageUrl);
  //  2. check if image exit with such file url
  if (!image) {
    return res.status(404).end(`file with ${filename} name does not exist`);
  }

  const newFilename = type
    ? `${filename}_${height}X${width}.${type}`
    : `${filename}_${height}X${width}.jpg`;

  //  3. create image url for the thumbnail image
  const thumbnailUrl = utils.createImageUrl(`/thumbnail/${newFilename}`);

  // check if thumbnail exist
  const thumbnail = utils.getImage(thumbnailUrl);
  if (!thumbnail) {
    // resize the image or set it 400 by 400
    const w = width ? Number(width) : 400;
    const h = height ? Number(height) : 400;
    const data = await sharp(imageUrl)
      .resize(w, h)
      .toFormat(format as AvailableFormatInfo, { palette: true })
      .toBuffer();

    // then write the new thumbnail to the file system
    utils.writeThumbNail(thumbnailUrl, data);
  }

  // send the thumbnail file
  res.status(200).sendFile(thumbnailUrl);
};

export default imageProcessor;
