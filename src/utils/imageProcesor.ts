import sharp, { AvailableFormatInfo } from 'sharp';

const imageProcessor = async (
  format: unknown = 'png',
  imageUrl: string,
  width = 400,
  height = 400
): Promise<Buffer> => {
  const data = await sharp(imageUrl)
    .resize(width, height)
    .toFormat(format as AvailableFormatInfo, { palette: true })
    .toBuffer();
  return data;
};

export default imageProcessor;
