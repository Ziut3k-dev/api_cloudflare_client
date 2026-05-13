"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Client_1 = require("../lib/Client");
const globals_1 = require("@jest/globals");
globals_1.jest.mock('axios');
const mockedAxios = axios_1.default;
(0, globals_1.describe)('CloudflareApiClient Unit Tests', () => {
    let client;
    (0, globals_1.beforeEach)(() => {
        client = new Client_1.CloudflareApiClient({ token: 'test-token' });
        globals_1.jest.clearAllMocks();
    });
    (0, globals_1.test)('isPlainObject should work correctly for various inputs', () => {
        (0, globals_1.expect)(client.isPlainObject({})).toBe(true);
        (0, globals_1.expect)(client.isPlainObject([])).toBe(false);
        (0, globals_1.expect)(client.isPlainObject(null)).toBe(false);
        (0, globals_1.expect)(client.isPlainObject(undefined)).toBe(false);
        (0, globals_1.expect)(client.isPlainObject('string')).toBe(false);
        (0, globals_1.expect)(client.isPlainObject(42)).toBe(false);
    });
    (0, globals_1.test)('isUserServiceKey should identify service keys', () => {
        (0, globals_1.expect)(client.isUserServiceKey('v1.0-key')).toBe(true);
        (0, globals_1.expect)(client.isUserServiceKey('not-a-service-key')).toBe(false);
        (0, globals_1.expect)(client.isUserServiceKey(undefined)).toBe(false);
    });
    (0, globals_1.test)('request should handle 40-char keys as tokens', async () => {
        const tokenClient = new Client_1.CloudflareApiClient({ key: 'a'.repeat(40) });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await tokenClient.request({ method: 'GET', uriPath: 'test' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            headers: globals_1.expect.objectContaining({
                Authorization: globals_1.expect.stringContaining('Bearer')
            })
        }));
    });
    (0, globals_1.test)('request should handle service keys', async () => {
        const serviceClient = new Client_1.CloudflareApiClient({ key: 'v1.0-service-key' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await serviceClient.request({ method: 'GET', uriPath: 'test' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            headers: globals_1.expect.objectContaining({
                'X-Auth-User-Service-Key': 'v1.0-service-key'
            })
        }));
    });
    (0, globals_1.test)('request should handle normal keys with email', async () => {
        const keyClient = new Client_1.CloudflareApiClient({ key: 'abc', email: 'test@example.com' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await keyClient.request({ method: 'GET', uriPath: 'test' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            headers: globals_1.expect.objectContaining({
                'X-Auth-Key': 'abc',
                'X-Auth-Email': 'test@example.com'
            })
        }));
    });
    (0, globals_1.test)('request should handle absolute URLs', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        const absUrl = 'https://example.com/api';
        await client.request({ method: 'GET', uriPath: absUrl });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(absUrl, globals_1.expect.any(Object));
    });
    (0, globals_1.test)('request should handle paths starting with /', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET', uriPath: '/my/path' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.stringMatching(/v4\/my\/path$/), globals_1.expect.any(Object));
    });
    (0, globals_1.test)('request should handle empty path', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET' });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.stringMatching(/v4\/$/), globals_1.expect.any(Object));
    });
    (0, globals_1.test)('request should handle POST data', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        const testData = { foo: 'bar' };
        await client.request({ method: 'POST', uriPath: 'test', data: testData });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.any(String), globals_1.expect.objectContaining({
            data: JSON.stringify(testData)
        }));
    });
    (0, globals_1.test)('request should handle path substitution', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/test',
            params: { zoneId: '123', missing: null }
        });
        (0, globals_1.expect)(mockedAxios).toHaveBeenCalledWith(globals_1.expect.stringContaining('/zones/123/test'), globals_1.expect.any(Object));
    });
    (0, globals_1.test)('request should throw on axios error', async () => {
        const error = new Error('Axios failed');
        mockedAxios.mockRejectedValueOnce(error);
        await (0, globals_1.expect)(client.request({ method: 'GET', uriPath: 'test' })).rejects.toThrow('Axios failed');
    });
});
