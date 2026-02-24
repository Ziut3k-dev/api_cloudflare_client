"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stream_1 = __importDefault(require("../lib/resources/Stream"));
const globals_1 = require("@jest/globals");
const mockApiClient = {
    request: globals_1.jest.fn(),
};
(0, globals_1.describe)('Stream Unit Tests', () => {
    let instance;
    (0, globals_1.beforeEach)(() => {
        instance = new Stream_1.default(mockApiClient);
    });
    (0, globals_1.test)('listVideos should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.listVideos('test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('videoDetails should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.videoDetails('test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('uploadVideoFromUrl should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.uploadVideoFromUrl('test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.test)('deleteVideo should call request', async () => {
        mockApiClient.request.mockResolvedValueOnce({ success: true });
        await instance.deleteVideo('test-id', 'test-id');
        (0, globals_1.expect)(mockApiClient.request).toHaveBeenCalled();
    });
    (0, globals_1.afterEach)(() => {
        mockApiClient.request.mockClear();
    });
});
