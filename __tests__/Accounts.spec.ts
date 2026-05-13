import Accounts from '../lib/resources/Accounts';
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

describe('Accounts Unit Tests', () => {
  let instance: Accounts;

  beforeEach(() => {
    instance = new Accounts(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse();
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with pagination should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse(2, 10);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', { name: 'Updated Account' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
