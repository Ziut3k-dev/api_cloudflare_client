import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * EnterpriseZoneWorkersScripts represents the accounts/:accountId/workers/scripts API endpoint.
 *
 * @class EnterpriseZoneWorkersScripts
 * @extends Resource
 */
declare class EnterpriseZoneWorkersScripts extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the EnterpriseZoneWorkersScripts class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * read retrieves a single workers script.
     *
     * @function read
     * @memberof EnterpriseZoneWorkersScripts
     * @instance EnterpriseZoneWorkersScripts
     * @async
     * @param {string} accountId - The enterprise account ID.
     * @param {string} name - The script name.
     * @returns {Promise<Object>} The workers script response object.
     */
    read(accountId: string, name: any): Promise<any>;
    /**
     * edit uploads a new version of a workers script.
     *
     * @function edit
     * @memberof EnterpriseZoneWorkersScripts
     * @instance EnterpriseZoneWorkersScripts
     * @async
     * @param {string} accountId - The enterprise account ID.
     * @param {string} name - The script name.
     * @param {string} script - The new script.
     * @returns {Promise<Object>} The response object.
     */
    edit(accountId: string, name: any, script: any): Promise<any>;
}
export default EnterpriseZoneWorkersScripts;
//# sourceMappingURL=EnterpriseZoneWorkersScripts.d.ts.map