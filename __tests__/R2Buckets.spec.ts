import R2Buckets from '../lib/resources/R2Buckets';
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

describe('R2Buckets Unit Tests', () => {
  let instance: R2Buckets;

  beforeEach(() => {
    instance = new R2Buckets(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'my-bucket');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', { name: 'my-new-bucket' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'my-bucket');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
