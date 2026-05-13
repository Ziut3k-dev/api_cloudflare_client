"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoadBalancerPools_1 = __importDefault(require("../lib/resources/LoadBalancerPools"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('LoadBalancerPools Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new LoadBalancerPools_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id', 'test-pool-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-account-id', {
            name: 'primary-dc-pool',
            origins: [{ name: 'web-server-1', address: '198.51.100.1', enabled: true }],
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-account-id', 'test-pool-id', { enabled: false });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-account-id', 'test-pool-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('health should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.health('test-account-id', 'test-pool-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('preview should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.preview('test-account-id', 'test-pool-id', { expected_codes: '2xx' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
