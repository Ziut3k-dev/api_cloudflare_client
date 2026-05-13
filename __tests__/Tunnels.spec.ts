import Tunnels from '../lib/resources/Tunnels';
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

describe('Tunnels Unit Tests', () => {
  let instance: Tunnels;

  beforeEach(() => {
    instance = new Tunnels(mockApiClient as any);
  });

  test('browse should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browse('test-account-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('read should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.read('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('add should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.add('test-account-id', {
      name: 'my-tunnel',
      tunnel_secret: 'AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg=',
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('edit should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.edit('test-account-id', 'test-tunnel-id', { name: 'renamed-tunnel' });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('del should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.del('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getToken should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getToken('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getConnections should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getConnections('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('cleanConnections should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.cleanConnections('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getConfig should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getConfig('test-account-id', 'test-tunnel-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('editConfig should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editConfig('test-account-id', 'test-tunnel-id', {
      config: {
        ingress: [
          { hostname: 'app.example.com', service: 'http://localhost:3000' },
          { service: 'http_status:404' },
        ],
      },
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
