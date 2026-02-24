import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * ZoneWorkersScript represents the /zones/:zoneID/workers/script API endpoint.
 *
 * @class ZoneWorkersScript
 * @extends Resource
 */
declare class ZoneWorkersScript extends Resource {
    path: string;
    /**
     * Constructor for the ZoneWorkersScript class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * read retrieves the current workers script.
     *
     * @function read
     * @memberof ZoneWorkersScript
     * @instance ZoneWorkersScript
     * @async
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The workers script response object.
     */
    read(zoneId: string): Promise<any>;
    /**
     * edit allows for modifying the current workers script.
     *
     * @function edit
     * @memberof ZoneWorkersScript
     * @instance ZoneWorkersScript
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} script - The new script.
     * @returns {Promise<Object>} The workers script response object.
     */
    edit(zoneId: string, script: any): Promise<any>;
    /**
     * del allows for deleting the workers script.
     *
     * @function del
     * @memberof ZoneWorkersScript
     * @instance ZoneWorkersScript
     * @async
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The deleted zone workers script response object.
     */
    del(zoneId: string): Promise<any>;
}
export default ZoneWorkersScript;
//# sourceMappingURL=ZoneWorkersScript.d.ts.map