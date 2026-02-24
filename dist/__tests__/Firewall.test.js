"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Firewall_1 = __importDefault(require("../lib/resources/Firewall"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Firewall API Tests (Unit)', () => {
    let instance;
    const zoneId = 'zone123';
    const ruleId = 'rule456';
    (0, globals_1.beforeEach)(() => {
        instance = new Firewall_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request with GET', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true, result: [] });
        await instance.browse(zoneId);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalledWith(globals_1.expect.objectContaining({
            method: 'GET',
            uriPath: 'zones/:zoneId/firewall/rules',
            params: { zoneId }
        }), instance);
    });
    (0, globals_1.test)('read should call request with GET', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true, result: {} });
        await instance.read(zoneId, ruleId);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalledWith(globals_1.expect.objectContaining({
            method: 'GET',
            uriPath: 'zones/:zoneId/firewall/rules/:ruleId',
            params: { zoneId, ruleId }
        }), instance);
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
