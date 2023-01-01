import createImageUrl from '../../utils/createImageUrl';

describe('Create Image url', () => {
  it('should be able to create image Url for file name john from the public repo', () => {
    expect(createImageUrl('john')).toEqual(
      'C:\\Users\\ONESIMUS\\Desktop\\udacity_Project\\build\\public\\john'
    );
  });
});
