import LoadBalancers from '../lib/resources/LoadBalancers';
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

describe('LoadBalancers Unit Tests', () => {
  let instance: LoadBalancers;

  beforeEach(() => {
    instance = new LoadBalancers(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-zone-id', 'test-lb-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-zone-id', {
      name: 'my-lb.example.com',
      fallback_pool: 'pool-id',
      default_pools: ['pool-id'],
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-zone-id', 'test-lb-id', { ttl: 30 });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-zone-id', 'test-lb-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
