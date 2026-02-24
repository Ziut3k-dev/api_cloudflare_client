import UserTokens from '../lib/resources/UserTokens';
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

describe('UserTokens Unit Tests', () => {
  let instance: UserTokens;

  beforeEach(() => {
    instance = new UserTokens(mockApiClient as any);
  });

  test('roll should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.roll('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('verify should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.verify();
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browsePermissionGroups should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browsePermissionGroups();
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse();
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add({});
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
