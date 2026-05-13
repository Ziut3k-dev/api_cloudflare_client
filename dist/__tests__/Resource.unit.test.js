"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../lib/Resource"));
const Client_1 = require("../lib/Client");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('Resource Unit Tests', () => {
    let apiClient;
    (0, globals_1.beforeEach)(() => {
        apiClient = new Client_1.CloudflareApiClient({ token: 'test' });
    });
    (0, globals_1.test)('createFullPath should work when path is not set', () => {
        const resource = new Resource_1.default(apiClient);
        resource.path = undefined;
        (0, globals_1.expect)(resource.createFullPath('subpath')).toBe('subpath');
    });
    (0, globals_1.test)('createFullPath should work when path is set', () => {
        const resource = new Resource_1.default(apiClient);
        resource.path = 'zones';
        // With subpath
        (0, globals_1.expect)(resource.createFullPath('123')).toBe('zones/123');
        // Without subpath
        (0, globals_1.expect)(resource.createFullPath()).toBe('zones');
    });
});
