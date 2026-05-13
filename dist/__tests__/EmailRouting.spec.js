"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailRouting_1 = __importDefault(require("../lib/resources/EmailRouting"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('EmailRouting Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new EmailRouting_1.default(mockApiClient);
    });
    (0, globals_1.test)('get should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.get('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('enable should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.enable('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('disable should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.disable('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browseRules should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browseRules('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('readRule should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.readRule('test-zone-id', 'test-rule-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('addRule should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.addRule('test-zone-id', {
            matchers: [{ type: 'literal', field: 'to', value: 'info@example.com' }],
            actions: [{ type: 'forward', value: ['user@example.com'] }],
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('editRule should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.editRule('test-zone-id', 'test-rule-id', { enabled: false });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('delRule should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.delRule('test-zone-id', 'test-rule-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('getCatchAll should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.getCatchAll('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('editCatchAll should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.editCatchAll('test-zone-id', {
            matchers: [{ type: 'all' }],
            actions: [{ type: 'drop', value: [] }],
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
