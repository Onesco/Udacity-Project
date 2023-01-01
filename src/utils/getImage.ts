import { existsSync, readFileSync } from 'fs';

const getImage = (imageUrl: string) => {
  console.log('getting image');
  if (!existsSync(imageUrl)) return null;

  const image = readFileSync(imageUrl);
  return image;
};

export default getImage;
