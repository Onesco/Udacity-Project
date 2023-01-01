import utils from '../../utils';
import { normalize } from 'path';

describe('Create Image url', () => {
  it('should be able to create image Url for file name john from the public repo', () => {
    expect(utils.createImageUrl('john.jpg')).toContain(
      normalize('/public/john.jpg')
    );
  });
});
