const CFIPs = require('../lib/resources/CFIPs');
const {
  describe,
  test,
  beforeEach,
  expect,
  afterEach,
} = require('@jest/globals');
const impJest = require('@jest/globals');
// Mock API client for testing
const mockApiClient = {
  request: impJest.jest.fn(),
};

describe('CFIPs API Tests', () => {
  let cfIPs;

  beforeEach(() => {
    // Create an instance of CFIPs with the mock API client
    cfIPs = new CFIPs(mockApiClient);
  });

  test('Should successfully browse IP addresses', async () => {
    // Mock the response data you expect from the API
    const mockResponse = {
      ipv4: ['192.168.0.1', '192.168.0.2'],
      ipv6: ['2001:db8::1', '2001:db8::2'],
    };

    // Mock the API client's request method to return the desired response
    mockApiClient.request.mockResolvedValueOnce(mockResponse);

    // Call the browse method
    const result = await cfIPs.browse();

    // Expectations
    expect(result).toEqual(mockResponse);
    expect(mockApiClient.request).toHaveBeenCalledWith(
      {
        method: 'GET',
        uriPath: 'ips',
      },
      cfIPs
    );
  });

  // You can add more tests for other methods or edge cases as needed

  afterEach(() => {
    // Clear the mock function's usage data after each test
    mockApiClient.request.mockClear();
  });
});
