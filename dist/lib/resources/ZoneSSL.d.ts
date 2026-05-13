import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class ZoneSSL extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * List all SSL certificate packs for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    browse(zoneId: string): Promise<any>;
    /**
     * Get a certificate pack.
     *
     * @param {string} zoneId
     * @param {string} certPackId
     * @returns {Promise<Object>}
     */
    read(zoneId: string, certPackId: string): Promise<any>;
    /**
     * Order a new certificate pack.
     *
     * @param {string} zoneId
     * @param {Object} data - { type, hosts[] }
     * @returns {Promise<Object>}
     */
    add(zoneId: string, data: any): Promise<any>;
    /**
     * For a certificate pack, change the validation method.
     *
     * @param {string} zoneId
     * @param {string} certPackId
     * @param {Object} data - { validation_method }
     * @returns {Promise<Object>}
     */
    edit(zoneId: string, certPackId: string, data: any): Promise<any>;
    /**
     * Delete an advanced certificate pack.
     *
     * @param {string} zoneId
     * @param {string} certPackId
     * @returns {Promise<Object>}
     */
    del(zoneId: string, certPackId: string): Promise<any>;
}
export default ZoneSSL;
//# sourceMappingURL=ZoneSSL.d.ts.map