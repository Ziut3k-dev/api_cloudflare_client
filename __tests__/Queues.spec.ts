import Queues from '../lib/resources/Queues';
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

describe('Queues Unit Tests', () => {
  let instance: Queues;

  beforeEach(() => {
    instance = new Queues(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-queue-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', { queue_name: 'my-queue' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', 'test-queue-id', { queue_name: 'renamed-queue' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-queue-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browseConsumers should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browseConsumers('test-account-id', 'test-queue-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('addConsumer should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.addConsumer('test-account-id', 'test-queue-id', {
      script_name: 'my-worker',
      settings: { batch_size: 10, max_retries: 3 },
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('editConsumer should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editConsumer('test-account-id', 'test-queue-id', 'test-consumer-id', { settings: { batch_size: 20 } });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('delConsumer should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.delConsumer('test-account-id', 'test-queue-id', 'test-consumer-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
