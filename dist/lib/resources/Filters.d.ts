import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Filters extends Resource {
    path: string;
    protected hasBrokenPatch: boolean;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Allows for listing all the zones.
     *
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The zone browse response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * Allows for retrieving a specific zone.
     *
     * @param {string} zoneId
     * @param {string} filterId - The modified zone object.
     * @returns {Promise<Object>} The zone response object.
     */
    read(zoneId: string, filterId: any): Promise<any>;
    /**
     * Allows for modifying a specific zone.
     *
     * @param {string} id - The zone ID.
     * @param {string} filterId - The rule ID.
     * @param {Object} rule - The modified rule object.
     * @returns {Promise<Object>} The zone response object.
     */
    edit(id: string, filterId: any, rule: any): Promise<any>;
    /**
     * Allows for creating a new zone.
     *
     * @param {string} zoneId
     * @param {string} ruleId
     * @param {Object} zone - The new zone object.
     * @returns {Promise<Object>} The zone response object.
     */
    add(zoneId: string, ruleId: string, rules: any): Promise<any>;
    /**
     * Allows for removing a new zone.
     *
     * @param {string} zoneId - The zone ID to delete.
     * @param {string} ruleId
     * @returns {Promise<Object>} The zone response object.
     */
    del(zoneId: string, filterId: any): Promise<any>;
}
export default Filters;
//# sourceMappingURL=Filters.d.ts.map