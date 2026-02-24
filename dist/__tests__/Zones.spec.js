"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Zones_1 = __importDefault(require("../lib/resources/Zones"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Zones Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Zones_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-id', 1, 1);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add({});
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('activationCheck should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.activationCheck('test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('purgeCache should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.purgeCache('test-id', {});
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browse should throw error if per_page > 50', async () => {
        await (0, globals_1.expect)(instance.browse(null, 100)).rejects.toThrow('per_page must be less than 50');
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
