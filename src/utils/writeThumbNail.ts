import { writeFileSync } from 'fs';

const writeThumbNail = (thumbnailUrl: string, data: Buffer): void => {
  writeFileSync(thumbnailUrl, data);
};

export default writeThumbNail;
