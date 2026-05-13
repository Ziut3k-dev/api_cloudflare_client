"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuditLogs_1 = __importDefault(require("../lib/resources/AuditLogs"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('AuditLogs Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new AuditLogs_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse with filters should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id', {
            since: '2024-01-01T00:00:00Z',
            before: '2024-12-31T23:59:59Z',
            actor_email: 'admin@example.com',
            action_type: 'zone.create',
            page: 1,
            per_page: 25,
            direction: 'desc',
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse with partial filters should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id', { actor_ip: '198.51.100.0' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
