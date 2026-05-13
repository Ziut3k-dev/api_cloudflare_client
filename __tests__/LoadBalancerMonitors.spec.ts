import LoadBalancerMonitors from '../lib/resources/LoadBalancerMonitors';
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

describe('LoadBalancerMonitors Unit Tests', () => {
  let instance: LoadBalancerMonitors;

  beforeEach(() => {
    instance = new LoadBalancerMonitors(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-monitor-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', {
      type: 'https',
      path: '/health',
      interval: 60,
      retries: 2,
      timeout: 5,
      expected_codes: '2xx',
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', 'test-monitor-id', { interval: 120 });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-monitor-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('preview should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.preview('test-account-id', 'test-monitor-id', {});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('references should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.references('test-account-id', 'test-monitor-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
