import { app } from '../src/app'; // Ensure the correct path to your app
import supertest from 'supertest';

const testRequest = supertest(app);

describe('Weather API Endpoints', () => {
  it('should fetch weather data for valid latitude and longitude', async () => {
    const response = await testRequest.get('/api/weather?lat=33.44&lon=-94.04');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('condition');
    expect(response.body).toHaveProperty('temperature');
    expect(response.body).toHaveProperty('alerts');
    expect(Array.isArray(response.body.alerts)).toBe(true);
  });

  it('should return 400 error if latitude and longitude are missing', async () => {
    const response = await testRequest.get('/api/weather');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Latitude and Longitude are required');
  });
});
