"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnterpriseZoneWorkersKV_1 = __importDefault(require("../lib/resources/EnterpriseZoneWorkersKV"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('EnterpriseZoneWorkersKV Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new EnterpriseZoneWorkersKV_1.default(mockApiClient);
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-id', 'test-id', 'test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-id', 'test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-id', 'test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('addMulti should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.addMulti('test-id', 'test-id', {});
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('delMulti should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.delMulti('test-id', 'test-id', {});
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
