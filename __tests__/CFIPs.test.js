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
      ipv4: ['173.245.48.0/20', '103.21.244.0/22'],
      ipv6: ['2400:cb00::/32', '2606:4700::/32'],
    };

    // Mock the API client's request method to return the desired response
    mockApiClient.request.mockResolvedValueOnce(mockResponse);

    // Call the browse method
    const result = await cfIPs.browse();

    // Expectations
    expect(result).toEqual(mockResponse);
  });

  // You can add more tests for other methods or edge cases as needed

  afterEach(() => {
    // Clear the mock function's usage data after each test
    mockApiClient.request.mockClear();
  });
});
