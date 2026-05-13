"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queues_1 = __importDefault(require("../lib/resources/Queues"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Queues Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Queues_1.default(mockApiClient);
    });
    (0, globals_1.test)('browse should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browse('test-account-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('read should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.read('test-account-id', 'test-queue-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('add should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.add('test-account-id', { queue_name: 'my-queue' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('edit should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.edit('test-account-id', 'test-queue-id', { queue_name: 'renamed-queue' });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('del should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.del('test-account-id', 'test-queue-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('browseConsumers should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.browseConsumers('test-account-id', 'test-queue-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('addConsumer should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.addConsumer('test-account-id', 'test-queue-id', {
            script_name: 'my-worker',
            settings: { batch_size: 10, max_retries: 3 },
        });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('editConsumer should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.editConsumer('test-account-id', 'test-queue-id', 'test-consumer-id', { settings: { batch_size: 20 } });
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('delConsumer should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.delConsumer('test-account-id', 'test-queue-id', 'test-consumer-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
