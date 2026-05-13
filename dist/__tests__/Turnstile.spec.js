"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Turnstile_1 = __importDefault(require("../lib/resources/Turnstile"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Turnstile Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Turnstile_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse with pagination should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id', 1, 10);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id', 'test-sitekey');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-account-id', {
            name: 'My Widget',
            domains: ['example.com'],
            mode: 'managed',
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-account-id', 'test-sitekey', { name: 'Updated Widget' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-account-id', 'test-sitekey');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('rotateSecret should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.rotateSecret('test-account-id', 'test-sitekey');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('rotateSecret with invalidate_immediately should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.rotateSecret('test-account-id', 'test-sitekey', { invalidate_immediately: true });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
