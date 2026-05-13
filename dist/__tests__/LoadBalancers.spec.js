"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoadBalancers_1 = __importDefault(require("../lib/resources/LoadBalancers"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('LoadBalancers Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new LoadBalancers_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-zone-id', 'test-lb-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-zone-id', {
            name: 'my-lb.example.com',
            fallback_pool: 'pool-id',
            default_pools: ['pool-id'],
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-zone-id', 'test-lb-id', { ttl: 30 });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-zone-id', 'test-lb-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
