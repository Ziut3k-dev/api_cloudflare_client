import ZoneSettings from '../lib/resources/ZoneSettings';
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

describe('ZoneSettings Unit Tests', () => {
  let instance: ZoneSettings;

  beforeEach(() => {
    instance = new ZoneSettings(mockApiClient as any);
  });

  test('editAll should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editAll('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-id', 'test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
