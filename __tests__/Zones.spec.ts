import Zones from '../lib/resources/Zones';
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

describe('Zones Unit Tests', () => {
  let instance: Zones;

  beforeEach(() => {
    instance = new Zones(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-id', 1, 1);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add({});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('activationCheck should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.activationCheck('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('purgeCache should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.purgeCache('test-id', {});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse should throw error if per_page > 50', async () => {
    await expect(instance.browse(null, 100)).rejects.toThrow('per_page must be less than 50');
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
