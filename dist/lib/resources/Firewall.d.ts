import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Firewall extends Resource {
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
     * @param {string} ruleId - The modified zone object.
     * @returns {Promise<Object>} The zone response object.
     */
    read(zoneId: string, ruleId: string): Promise<any>;
    /**
     * Allows for modifying a specific zone.
     *
     * @param {string} id - The zone ID.
     * @param {string} ruleId - The rule ID.
     * @param {Object} rule - The modified rule object.
     * @returns {Promise<Object>} The zone response object.
     */
    edit(id: string, ruleId: string, rule: any): Promise<any>;
    /**
     * Allows for creating a new zone.
     *
     * @param {string} zoneId
     * @param rules
     * @returns {Promise<Object>} The zone response object.
     */
    add(zoneId: string, rules: any): Promise<any>;
    /**
     * Allows for removing a new zone.
     *
     * @param {string} zoneId - The zone ID to delete.
     * @param {string} ruleId
     * @returns {Promise<Object>} The zone response object.
     */
    del(zoneId: string, ruleId: string): Promise<any>;
}
export default Firewall;
//# sourceMappingURL=Firewall.d.ts.map