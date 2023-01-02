import utils from '../../utils';

describe('check if image exist and get the image', () => {
  it('should be able to return null for a wrong image url', () => {
    expect(utils.getImage(utils.createImageUrl(`john.jpg`))).toBeFalsy();
  });

  it('should be able to return object of prototype of Buffer construction for given image url', () => {
    const imageUrl = utils.createImageUrl(`mouse.jpg`);
    const image = utils.getImage(imageUrl);
    expect(typeof image).toEqual(typeof Buffer.prototype);
  });
});
