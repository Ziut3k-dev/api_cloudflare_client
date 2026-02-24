import EnterpriseZoneWorkersKV from '../lib/resources/EnterpriseZoneWorkersKV';
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

describe('EnterpriseZoneWorkersKV Unit Tests', () => {
  let instance: EnterpriseZoneWorkersKV;

  beforeEach(() => {
    instance = new EnterpriseZoneWorkersKV(mockApiClient as any);
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-id', 'test-id', 'test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-id', 'test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-id', 'test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('addMulti should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.addMulti('test-id', 'test-id', {});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('delMulti should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.delMulti('test-id', 'test-id', {});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
