import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class EmailRouting extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Get Email Routing settings for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    get(zoneId: string): Promise<any>;
    /**
     * Enable Email Routing for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    enable(zoneId: string): Promise<any>;
    /**
     * Disable Email Routing for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    disable(zoneId: string): Promise<any>;
    /**
     * Lists existing routing rules.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    browseRules(zoneId: string): Promise<any>;
    /**
     * Gets an existing email routing rule.
     *
     * @param {string} zoneId
     * @param {string} ruleId
     * @returns {Promise<Object>}
     */
    readRule(zoneId: string, ruleId: string): Promise<any>;
    /**
     * Creates a new email routing rule.
     *
     * @param {string} zoneId
     * @param {Object} data - { matchers[], actions[], name?, enabled?, priority? }
     * @returns {Promise<Object>}
     */
    addRule(zoneId: string, data: any): Promise<any>;
    /**
     * Updates an email routing rule.
     *
     * @param {string} zoneId
     * @param {string} ruleId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    editRule(zoneId: string, ruleId: string, data: any): Promise<any>;
    /**
     * Deletes an existing routing rule.
     *
     * @param {string} zoneId
     * @param {string} ruleId
     * @returns {Promise<Object>}
     */
    delRule(zoneId: string, ruleId: string): Promise<any>;
    /**
     * Lists existing catch-all routing rule or sets a routing rule for all
     * inbound emails that do not match any specific routing rules.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    getCatchAll(zoneId: string): Promise<any>;
    /**
     * Updates the catch-all routing rule.
     *
     * @param {string} zoneId
     * @param {Object} data - { matchers[], actions[], name?, enabled? }
     * @returns {Promise<Object>}
     */
    editCatchAll(zoneId: string, data: any): Promise<any>;
}
export default EmailRouting;
//# sourceMappingURL=EmailRouting.d.ts.map