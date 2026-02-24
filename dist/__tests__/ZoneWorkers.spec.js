"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ZoneWorkers_1 = __importDefault(require("../lib/resources/ZoneWorkers"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('ZoneWorkers Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new ZoneWorkers_1.default(mockApiClient);
    });
    (0, globals_1.test)('validate should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.validate('test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
