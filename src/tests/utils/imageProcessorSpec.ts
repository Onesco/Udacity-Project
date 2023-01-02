import sizeOf from 'buffer-image-size';
import utils from '../../utils';

describe('Process image for given sizes and type', () => {
  it('should process given image and return it buffer with exact dimensions', async () => {
    const imageUrl = utils.createImageUrl(`mouse.jpg`);
    const w = 400;
    const h = 400;
    const image = await utils.imageProcesor('jpeg', imageUrl, w, h);
    const dimensions = sizeOf(image);
    expect(typeof image).toEqual(typeof Buffer.prototype);
    expect(dimensions.height).toBe(h);
    expect(dimensions.width).toBe(w);
  });
});
