import CloudflareApiClient from './Client';
/**
 * @classdesc Resource generates basic methods defined on subclasses. It is not intended to
 * be constructed directly.
 * @class
 * @private
 */
export default class Resource {
    protected apiClient: CloudflareApiClient;
    path?: string;
    /**
     * Create the full path for a method.
     *        joined with the resource's path.
     * @returns {string} The full path for the method.
     * @param apiClient
     */
    constructor(apiClient: CloudflareApiClient);
    createFullPath(methodPath?: string): string | undefined;
}
//# sourceMappingURL=Resource.d.ts.map