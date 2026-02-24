import Firewall from '../lib/resources/Firewall';
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

describe('Firewall API Tests (Unit)', () => {
  let instance: Firewall;
  const zoneId = 'zone123';
  const ruleId = 'rule456';

  beforeEach(() => {
    instance = new Firewall(mockApiClient as any);
  });

  test('browse should call request with GET', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true, result: [] });
    await instance.browse(zoneId);
    expect(mockApiClient.request).toHaveBeenCalledWith(
      expect.objectContaining({
        method: 'GET',
        uriPath: 'zones/:zoneId/firewall/rules',
        params: { zoneId }
      }),
      instance
    );
  });

  test('read should call request with GET', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true, result: {} });
    await instance.read(zoneId, ruleId);
    expect(mockApiClient.request).toHaveBeenCalledWith(
      expect.objectContaining({
        method: 'GET',
        uriPath: 'zones/:zoneId/firewall/rules/:ruleId',
        params: { zoneId, ruleId }
      }),
      instance
    );
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
