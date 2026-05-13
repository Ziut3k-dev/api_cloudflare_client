import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class RateLimits extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Fetches the rate limits for a zone.
     *
     * @param {string} zoneId
     * @param {number} [page=1]
     * @param {number} [per_page=20]
     * @returns {Promise<Object>}
     */
    browse(zoneId: string, page?: number, per_page?: number): Promise<any>;
    /**
     * Fetches the details of a rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @returns {Promise<Object>}
     */
    read(zoneId: string, rateLimitId: string): Promise<any>;
    /**
     * Creates a new rate limit for a zone.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    add(zoneId: string, data: any): Promise<any>;
    /**
     * Updates an existing rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(zoneId: string, rateLimitId: string, data: any): Promise<any>;
    /**
     * Deletes an existing rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @returns {Promise<Object>}
     */
    del(zoneId: string, rateLimitId: string): Promise<any>;
}
export default RateLimits;
//# sourceMappingURL=RateLimits.d.ts.map