import RateLimits from '../lib/resources/RateLimits';
import {
  describe,
  test,
  beforeEach,
  expect,
  afterEach,
  jest
} from '@jest/globals';

const mockApiClient = {
  request: jest.fn<any>(),
};

describe('RateLimits Unit Tests', () => {
  let instance: RateLimits;

  beforeEach(() => {
    instance = new RateLimits(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with pagination should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-zone-id', 2, 10);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-zone-id', 'test-rate-limit-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-zone-id', {
      match: { request: { url: '*.example.com/api*' } },
      threshold: 100,
      period: 60,
      action: { mode: 'ban', timeout: 600 },
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-zone-id', 'test-rate-limit-id', { threshold: 200 });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-zone-id', 'test-rate-limit-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
