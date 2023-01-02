import { existsSync, readFileSync } from 'fs';

const getImage = (imageUrl: string): Buffer | null => {
  if (!existsSync(imageUrl)) return null;

  const image = readFileSync(imageUrl);
  return image;
};

export default getImage;
