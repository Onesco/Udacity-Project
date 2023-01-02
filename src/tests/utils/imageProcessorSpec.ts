import sizeOf from 'buffer-image-size';
import utils from '../../utils';

describe('Process image for given sizes and type', () => {
  it('should process given image and return it buffer with exact type and dimensions', async () => {
    const imageUrl = utils.createImageUrl(`mouse.jpg`);
    const w = 402;
    const h = 403;
    const type = 'png' as unknown;
    const image = await utils.imageProcesor(type, imageUrl, w, h);
    const dimensions = sizeOf(image);
    expect(typeof image).toEqual(typeof Buffer.prototype);
    expect(dimensions.height).toBe(h);
    expect(dimensions.width).toBe(w);
    expect(dimensions.type).toBe(type as string);
  });
});
