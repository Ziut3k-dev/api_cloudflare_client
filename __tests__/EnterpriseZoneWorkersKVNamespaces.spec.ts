import EnterpriseZoneWorkersKVNamespaces from '../lib/resources/EnterpriseZoneWorkersKVNamespaces';
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

describe('EnterpriseZoneWorkersKVNamespaces Unit Tests', () => {
  let instance: EnterpriseZoneWorkersKVNamespaces;

  beforeEach(() => {
    instance = new EnterpriseZoneWorkersKVNamespaces(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
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
