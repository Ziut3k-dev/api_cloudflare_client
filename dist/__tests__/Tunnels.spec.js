"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tunnels_1 = __importDefault(require("../lib/resources/Tunnels"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Tunnels Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Tunnels_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-account-id', {
            name: 'my-tunnel',
            tunnel_secret: 'AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg=',
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-account-id', 'test-tunnel-id', { name: 'renamed-tunnel' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('getToken should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.getToken('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('getConnections should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.getConnections('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('cleanConnections should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.cleanConnections('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('getConfig should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.getConfig('test-account-id', 'test-tunnel-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('editConfig should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.editConfig('test-account-id', 'test-tunnel-id', {
            config: {
                ingress: [
                    { hostname: 'app.example.com', service: 'http://localhost:3000' },
                    { service: 'http_status:404' },
                ],
            },
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
