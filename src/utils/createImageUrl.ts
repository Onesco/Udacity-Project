import { join, normalize, resolve } from 'path';

const createImageUrl = (name: string): string => {
  return normalize(join(resolve(__dirname, '../../public'), name));
};

export default createImageUrl;
