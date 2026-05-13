"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Accounts_1 = __importDefault(require("../lib/resources/Accounts"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Accounts Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Accounts_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse();
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse with pagination should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse(2, 10);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-account-id', { name: 'Updated Account' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
