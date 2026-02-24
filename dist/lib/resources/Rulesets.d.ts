import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Rulesets extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse all rulesets for a zone.
     *
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The rulesets response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read a specific ruleset.
     *
     * @param {string} zoneId
     * @param {string} rulesetId - The ruleset ID.
     * @returns {Promise<Object>} The ruleset response object.
     */
    read(zoneId: string, rulesetId: string): Promise<any>;
    /**
     * edit a specific ruleset.
     *
     * @param {string} zoneId - The zone ID.
     * @param {string} rulesetId - The ruleset ID.
     * @param {Object} ruleset - The ruleset object.
     * @returns {Promise<Object>} The response object.
     */
    edit(zoneId: string, rulesetId: string, ruleset: any): Promise<any>;
    /**
     * add a new ruleset.
     *
     * @param {string} zoneId
     * @param {Object} ruleset - The new ruleset object.
     * @returns {Promise<Object>} The ruleset response object.
     */
    add(zoneId: string, ruleset: any): Promise<any>;
    /**
     * del a ruleset.
     *
     * @param {string} zoneId
     * @param {string} rulesetId
     * @returns {Promise<Object>} The response object.
     */
    del(zoneId: string, rulesetId: string): Promise<any>;
}
export default Rulesets;
//# sourceMappingURL=Rulesets.d.ts.map