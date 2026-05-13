import Turnstile from '../lib/resources/Turnstile';
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

describe('Turnstile Unit Tests', () => {
  let instance: Turnstile;

  beforeEach(() => {
    instance = new Turnstile(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with pagination should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id', 1, 10);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-sitekey');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', {
      name: 'My Widget',
      domains: ['example.com'],
      mode: 'managed',
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', 'test-sitekey', { name: 'Updated Widget' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-sitekey');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('rotateSecret should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.rotateSecret('test-account-id', 'test-sitekey');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('rotateSecret with invalidate_immediately should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.rotateSecret('test-account-id', 'test-sitekey', { invalidate_immediately: true });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
