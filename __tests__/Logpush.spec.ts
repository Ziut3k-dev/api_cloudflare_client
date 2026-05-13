import Logpush from '../lib/resources/Logpush';
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

describe('Logpush Unit Tests', () => {
  let instance: Logpush;

  beforeEach(() => {
    instance = new Logpush(mockApiClient as any);
  });

  test('browseJobs should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browseJobs('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('readJob should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.readJob('test-zone-id', 1);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('addJob should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.addJob('test-zone-id', {
      destination_conf: 's3://mybucket/logs?region=us-east-1',
      dataset: 'http_requests',
      enabled: true,
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('editJob should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editJob('test-zone-id', 1, { enabled: false });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('delJob should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.delJob('test-zone-id', 1);
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getOwnershipChallenge should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getOwnershipChallenge('test-zone-id', { destination_conf: 's3://mybucket/logs' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('validateOwnership should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.validateOwnership('test-zone-id', {
      destination_conf: 's3://mybucket/logs',
      ownership_challenge: 'challenge-token',
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('validateDestination should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.validateDestination('test-zone-id', { destination_conf: 's3://mybucket/logs' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
