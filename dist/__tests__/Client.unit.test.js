"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../lib/Client"));
const axios_1 = __importDefault(require("axios"));
const globals_1 = require("@jest/globals");
globals_1.jest.mock('axios');
const mockedAxios = axios_1.default;
(0, globals_1.describe)('CloudflareApiClient Unit Tests', () => {
    (0, globals_1.test)('isPlainObject should work correctly', () => {
        const client = new Client_1.default({});
        (0, globals_1.expect)(client.isPlainObject({})).toBe(true);
        (0, globals_1.expect)(client.isPlainObject([])).toBe(false);
        (0, globals_1.expect)(client.isPlainObject(null)).toBe(false);
        (0, globals_1.expect)(client.isPlainObject('string')).toBe(false);
    });
    (0, globals_1.test)('isUserServiceKey should identify service keys', () => {
        const client = new Client_1.default({});
        (0, globals_1.expect)(client.isUserServiceKey('v1.0-key')).toBe(true);
        (0, globals_1.expect)(client.isUserServiceKey('not-a-service-key')).toBe(false);
    });
    (0, globals_1.test)('request should handle 40-char keys as tokens', async () => {
        const client = new Client_1.default({ key: 'a'.repeat(40) });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET', uriPath: 'test' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            headers: globals_1.expect.objectContaining({
                Authorization: globals_1.expect.stringContaining('Bearer')
            })
        }));
    });
    (0, globals_1.test)('request should handle normal keys with email', async () => {
        const client = new Client_1.default({ key: 'abc', email: 'test@example.com' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET', uriPath: 'test' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            headers: globals_1.expect.objectContaining({
                'X-Auth-Key': 'abc',
                'X-Auth-Email': 'test@example.com'
            })
        }));
    });
    (0, globals_1.test)('request should handle path substitution', async () => {
        const client = new Client_1.default({ token: 'abc' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/test',
            params: { zoneId: '123' }
        });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.stringContaining('/zones/123/test'), globals_1.expect.any(Object));
    });
});
