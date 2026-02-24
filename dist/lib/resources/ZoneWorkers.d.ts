import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * ZoneWorkers represents the /zones/:zoneId/workers API endpoint.
 *
 * @class ZoneWorkers
 * @extends Resource
 */
declare class ZoneWorkers extends Resource {
    path: string;
    /**
     * Constructor for the ZoneWorkers class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * validate allows for validating a workers script.
     *
     * @function validate
     * @memberof ZoneWorkers
     * @instance ZoneWorkers
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} script - The worker script.
     * @returns {Promise<Object>} The validate response object.
     */
    validate(zoneId: string, script: any): Promise<any>;
}
export default ZoneWorkers;
//# sourceMappingURL=ZoneWorkers.d.ts.map