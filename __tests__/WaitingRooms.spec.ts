import WaitingRooms from '../lib/resources/WaitingRooms';
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

describe('WaitingRooms Unit Tests', () => {
  let instance: WaitingRooms;

  beforeEach(() => {
    instance = new WaitingRooms(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-zone-id', 'test-waiting-room-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-zone-id', {
      name: 'My Waiting Room',
      host: 'example.com',
      new_users_per_minute: 200,
      total_active_users: 300,
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-zone-id', 'test-waiting-room-id', { total_active_users: 500 });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-zone-id', 'test-waiting-room-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getEvents should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getEvents('test-zone-id', 'test-waiting-room-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getStatus should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getStatus('test-zone-id', 'test-waiting-room-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
