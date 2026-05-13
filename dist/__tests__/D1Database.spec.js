"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const D1Database_1 = __importDefault(require("../lib/resources/D1Database"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('D1Database Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new D1Database_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse with pagination should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id', 1, 50);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id', 'test-database-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-account-id', { name: 'my-database' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-account-id', 'test-database-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('query should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.query('test-account-id', 'test-database-id', 'SELECT * FROM users');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('query with params should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.query('test-account-id', 'test-database-id', 'SELECT * FROM users WHERE id = ?', [1]);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('raw should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.raw('test-account-id', 'test-database-id', 'SELECT 1');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
