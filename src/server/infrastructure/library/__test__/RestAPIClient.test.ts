import { restAPIClient } from '../RestAPIClient';

jest.mock('@/server/shared/config', () => {
  return {
    getServerEnv: { API_BASE_URL: 'https://example.com/api' },
  };
});

describe('RestAPIClient', () => {
  test('should be configured with the correct base URL and headers', () => {
    expect(restAPIClient.defaults.timeout).toBe(3_000);
    expect(restAPIClient.defaults.headers['Content-Type']).toBe('application/json');
    expect(restAPIClient.defaults.baseURL).toBe('https://example.com/api');
  });
});
