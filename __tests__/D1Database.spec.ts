import D1Database from '../lib/resources/D1Database';
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

describe('D1Database Unit Tests', () => {
  let instance: D1Database;

  beforeEach(() => {
    instance = new D1Database(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with pagination should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id', 1, 50);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-database-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', { name: 'my-database' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-database-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('query should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.query('test-account-id', 'test-database-id', 'SELECT * FROM users');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('query with params should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.query('test-account-id', 'test-database-id', 'SELECT * FROM users WHERE id = ?', [1]);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('raw should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.raw('test-account-id', 'test-database-id', 'SELECT 1');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
