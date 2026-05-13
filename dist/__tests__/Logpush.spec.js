"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logpush_1 = __importDefault(require("../lib/resources/Logpush"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Logpush Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Logpush_1.default(mockApiClient);
    });
    (0, globals_1.test)('browseJobs should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browseJobs('test-zone-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('readJob should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.readJob('test-zone-id', 1);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('addJob should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.addJob('test-zone-id', {
            destination_conf: 's3://mybucket/logs?region=us-east-1',
            dataset: 'http_requests',
            enabled: true,
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('editJob should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.editJob('test-zone-id', 1, { enabled: false });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('delJob should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.delJob('test-zone-id', 1);
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('getOwnershipChallenge should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.getOwnershipChallenge('test-zone-id', { destination_conf: 's3://mybucket/logs' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('validateOwnership should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.validateOwnership('test-zone-id', {
            destination_conf: 's3://mybucket/logs',
            ownership_challenge: 'challenge-token',
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('validateDestination should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.validateDestination('test-zone-id', { destination_conf: 's3://mybucket/logs' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
