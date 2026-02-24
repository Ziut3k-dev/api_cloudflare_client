import Stream from '../lib/resources/Stream';
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

describe('Stream Unit Tests', () => {
  let instance: Stream;

  beforeEach(() => {
    instance = new Stream(mockApiClient as any);
  });

  test('listVideos should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.listVideos('test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('videoDetails should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.videoDetails('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('uploadVideoFromUrl should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.uploadVideoFromUrl('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('deleteVideo should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.deleteVideo('test-id', 'test-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
