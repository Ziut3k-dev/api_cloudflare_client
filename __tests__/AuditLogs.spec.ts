import AuditLogs from '../lib/resources/AuditLogs';
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

describe('AuditLogs Unit Tests', () => {
  let instance: AuditLogs;

  beforeEach(() => {
    instance = new AuditLogs(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with filters should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id', {
      since: '2024-01-01T00:00:00Z',
      before: '2024-12-31T23:59:59Z',
      actor_email: 'admin@example.com',
      action_type: 'zone.create',
      page: 1,
      per_page: 25,
      direction: 'desc',
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browse with partial filters should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id', { actor_ip: '198.51.100.0' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
