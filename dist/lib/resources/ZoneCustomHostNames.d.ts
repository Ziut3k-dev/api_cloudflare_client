import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * ZoneCustomHostNames represents the /zones/:zoneID/custom_hostnames API endpoint.
 *
 * @class ZoneCustomHostNames
 * @extends Resource
 */
declare class ZoneCustomHostNames extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the ZoneCustomHostNames class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse allows for listing all of a zone's custom hostnames.
     *
     * @function browse
     * @memberof ZoneCustomHostNames
     * @instance ZoneCustomHostNames
     * @async
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The custom hostname browse response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read allows for retrieving a specific custom hostname.
     *
     * @function read
     * @memberof ZoneCustomHostNames
     * @instance ZoneCustomHostNames
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The custom hostname ID.
     * @returns {Promise<Object>} The custom hostname response object.
     */
    read(zoneId: string, id: string): Promise<any>;
    /**
     * edit allows for modifying a specific custom hostname.
     *
     * @function edit
     * @memberof ZoneCustomHostNames
     * @instance ZoneCustomHostNames
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The custom hostname ID.
     * @param {Object} config - The modified custom hostname object.
     * @returns {Promise<Object>} The custom hostname response object.
     */
    edit(zoneId: string, id: string, config: any): Promise<any>;
    /**
     * add allows for creating a new custom hostname.
     *
     * @function add
     * @memberof ZoneCustomHostNames
     * @instance ZoneCustomHostNames
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {Object} config - The new custom hostname object.
     * @returns {Promise<Object>} The custom hostname response object.
     */
    add(zoneId: string, config: any): Promise<any>;
    /**
     * del allows for removing a custom hostname.
     *
     * @function del
     * @memberof ZoneCustomHostNames
     * @instance ZoneCustomHostNames
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The custom hostname ID to delete.
     * @returns {Promise<Object>} The custom hostname response object.
     */
    del(zoneId: string, id: string): Promise<any>;
}
export default ZoneCustomHostNames;
//# sourceMappingURL=ZoneCustomHostNames.d.ts.map