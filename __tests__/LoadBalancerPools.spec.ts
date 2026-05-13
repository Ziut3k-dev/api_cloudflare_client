import LoadBalancerPools from '../lib/resources/LoadBalancerPools';
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

describe('LoadBalancerPools Unit Tests', () => {
  let instance: LoadBalancerPools;

  beforeEach(() => {
    instance = new LoadBalancerPools(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-pool-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', {
      name: 'primary-dc-pool',
      origins: [{ name: 'web-server-1', address: '198.51.100.1', enabled: true }],
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', 'test-pool-id', { enabled: false });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-pool-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('health should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.health('test-account-id', 'test-pool-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('preview should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.preview('test-account-id', 'test-pool-id', { expected_codes: '2xx' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
