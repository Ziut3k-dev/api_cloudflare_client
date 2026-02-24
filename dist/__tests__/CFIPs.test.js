"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CFIPs_1 = __importDefault(require("../lib/resources/CFIPs"));
const globals_1 = require("@jest/globals");
const globals_2 = __importDefault(require("@jest/globals"));
// Mock API client for testing
const mockApiClient = {
    request: globals_2.default.jest.fn(),
};
(0, globals_1.describe)('CFIPs API Tests', () => {
    let cfIPs;
    (0, globals_1.beforeEach)(() => {
        // Create an instance of CFIPs with the mock API client
        cfIPs = new CFIPs_1.default(mockApiClient);
    });
    (0, globals_1.test)('Should successfully browse IP addresses', async () => {
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
        (0, globals_1.expect)(result).toEqual(mockResponse);
    });
    // You can add more tests for other methods or edge cases as needed
    (0, globals_1.afterEach)(() => {
        // Clear the mock function's usage data after each test
        mockApiClient.request.mockClear();
    });
});
