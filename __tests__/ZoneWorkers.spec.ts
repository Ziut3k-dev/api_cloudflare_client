import ZoneWorkers from '../lib/resources/ZoneWorkers';
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

describe('ZoneWorkers Unit Tests', () => {
  let instance: ZoneWorkers;

  beforeEach(() => {
    instance = new ZoneWorkers(mockApiClient as any);
  });

  test('validate should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.validate('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
