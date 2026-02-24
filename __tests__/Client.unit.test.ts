import axios from 'axios';
import { CloudflareApiClient } from '../lib/Client';
import { describe, test, expect, jest, beforeEach } from '@jest/globals';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('CloudflareApiClient Unit Tests', () => {
    let client: CloudflareApiClient;

    beforeEach(() => {
        client = new CloudflareApiClient({ token: 'test-token' });
        jest.clearAllMocks();
    });

    test('isPlainObject should work correctly for various inputs', () => {
        expect(client.isPlainObject({})).toBe(true);
        expect(client.isPlainObject([])).toBe(false);
        expect(client.isPlainObject(null)).toBe(false);
        expect(client.isPlainObject(undefined)).toBe(false);
        expect(client.isPlainObject('string')).toBe(false);
        expect(client.isPlainObject(42)).toBe(false);
    });

    test('isUserServiceKey should identify service keys', () => {
        expect(client.isUserServiceKey('v1.0-key')).toBe(true);
        expect(client.isUserServiceKey('not-a-service-key')).toBe(false);
        expect(client.isUserServiceKey(undefined)).toBe(false);
    });

    test('request should handle 40-char keys as tokens', async () => {
        const tokenClient = new CloudflareApiClient({ key: 'a'.repeat(40) });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });

        await tokenClient.request({ method: 'GET', uriPath: 'test' });

        expect(mockedAxios).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: expect.stringContaining('Bearer')
                })
            })
        );
    });

    test('request should handle service keys', async () => {
        const serviceClient = new CloudflareApiClient({ key: 'v1.0-service-key' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });

        await serviceClient.request({ method: 'GET', uriPath: 'test' });

        expect(mockedAxios).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Auth-User-Service-Key': 'v1.0-service-key'
                })
            })
        );
    });

    test('request should handle normal keys with email', async () => {
        const keyClient = new CloudflareApiClient({ key: 'abc', email: 'test@example.com' });
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });

        await keyClient.request({ method: 'GET', uriPath: 'test' });

        expect(mockedAxios).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Auth-Key': 'abc',
                    'X-Auth-Email': 'test@example.com'
                })
            })
        );
    });

    test('request should handle absolute URLs', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        const absUrl = 'https://example.com/api';
        await client.request({ method: 'GET', uriPath: absUrl });
        expect(mockedAxios).toHaveBeenCalledWith(absUrl, expect.any(Object));
    });

    test('request should handle paths starting with /', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET', uriPath: '/my/path' });
        expect(mockedAxios).toHaveBeenCalledWith(expect.stringMatching(/v4\/my\/path$/), expect.any(Object));
    });

    test('request should handle empty path', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({ method: 'GET' });
        expect(mockedAxios).toHaveBeenCalledWith(expect.stringMatching(/v4\/$/), expect.any(Object));
    });

    test('request should handle POST data', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        const testData = { foo: 'bar' };
        await client.request({ method: 'POST', uriPath: 'test', data: testData });
        expect(mockedAxios).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                data: JSON.stringify(testData)
            })
        );
    });

    test('request should handle path substitution', async () => {
        mockedAxios.mockResolvedValueOnce({ data: { success: true } });
        await client.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/test',
            params: { zoneId: '123', missing: null }
        });
        expect(mockedAxios).toHaveBeenCalledWith(
            expect.stringContaining('/zones/123/test'),
            expect.any(Object)
        );
    });

    test('request should throw on axios error', async () => {
        const error = new Error('Axios failed');
        mockedAxios.mockRejectedValueOnce(error);
        await expect(client.request({ method: 'GET', uriPath: 'test' })).rejects.toThrow('Axios failed');
    });
});
