import Resource from '../lib/Resource';
import { CloudflareApiClient } from '../lib/Client';
import { describe, test, expect, beforeEach } from '@jest/globals';

describe('Resource Unit Tests', () => {
    let apiClient: CloudflareApiClient;

    beforeEach(() => {
        apiClient = new CloudflareApiClient({ token: 'test' });
    });

    test('createFullPath should work when path is not set', () => {
        const resource = new Resource(apiClient);
        resource.path = undefined;
        expect(resource.createFullPath('subpath')).toBe('subpath');
    });

    test('createFullPath should work when path is set', () => {
        const resource = new Resource(apiClient);
        resource.path = 'zones';

        // With subpath
        expect(resource.createFullPath('123')).toBe('zones/123');

        // Without subpath
        expect(resource.createFullPath()).toBe('zones');
    });
});
