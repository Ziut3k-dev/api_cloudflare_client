import EmailRouting from '../lib/resources/EmailRouting';
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

describe('EmailRouting Unit Tests', () => {
  let instance: EmailRouting;

  beforeEach(() => {
    instance = new EmailRouting(mockApiClient as any);
  });

  test('get should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.get('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('enable should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.enable('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('disable should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.disable('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('browseRules should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.browseRules('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('readRule should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.readRule('test-zone-id', 'test-rule-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('addRule should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.addRule('test-zone-id', {
      matchers: [{ type: 'literal', field: 'to', value: 'info@example.com' }],
      actions: [{ type: 'forward', value: ['user@example.com'] }],
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('editRule should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editRule('test-zone-id', 'test-rule-id', { enabled: false });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('delRule should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.delRule('test-zone-id', 'test-rule-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('getCatchAll should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.getCatchAll('test-zone-id');
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  test('editCatchAll should call request', async () => {
    mockApiClient.request.mockResolvedValueOnce({ success: true });
    await instance.editCatchAll('test-zone-id', {
      matchers: [{ type: 'all' }],
      actions: [{ type: 'drop', value: [] }],
    });
    expect(mockApiClient.request).toHaveBeenCalled();
  });

  afterEach(() => {
    mockApiClient.request.mockClear();
  });
});
