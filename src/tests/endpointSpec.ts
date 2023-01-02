import supertest from 'supertest';

import app from '../index';

const request = supertest(app);

describe('Testing endpoints suite', () => {
  it('should return response status of 200 and text hello world ', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text.split(':')[0]).toBe('hello world');
  });

  it('should return 404 for filename that does not exist', async () => {
    const filename = 'john';
    const response = await request.get(
      `/images?filename=${filename}&height=400&width=400`
    );
    expect(response.status).toBe(404);
    expect(response.text.split(':')[0]).toBe(
      `file with ${filename} name does not exist`
    );
  });

  it('should return 403 for un processed image due to wrong image dimension(s)', async () => {
    const filename = 'mouse';
    const height = 300;
    const width = 0;
    const response = await request.get(
      `/images?filename=${filename}&height=${height}&width=${width}`
    );
    expect(response.status).toBe(403);
    expect(response.text.split(':')[0]).toBe(
      `can not process image of name ${filename} with dimension ${height} by ${width}`
    );
  });

  it('should return 200 for processed image', async () => {
    const filename = 'mouse';
    const height = 300;
    const width = 300;
    const response = await request.get(
      `/images?filename=${filename}&height=${height}&width=${width}`
    );
    expect(response.status).toBe(200);
  });
});
