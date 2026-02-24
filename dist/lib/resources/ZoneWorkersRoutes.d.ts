import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * ZoneWorkersRoutes represents the zones/:zoneId/workers/filters API endpoint.
 *
 * @class ZoneWorkersRoutes
 * @extends Resource
 */
declare class ZoneWorkersRoutes extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the ZoneWorkersRoutes class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * edit allows for modifying a specific zone's workers route.
     *
     * @function edit
     * @memberof ZoneWorkersRoutes
     * @instance ZoneWorkersRoutes
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The route ID.
     * @param {Object} config - The modified route object.
     * @returns {Promise<Object>} The custom hostname response object.
     */
    edit(zoneId: string, id: string, config: any): Promise<any>;
    /**
     * browse allows for listing all of a zone's workers routes.
     *
     * @function browse
     * @memberof ZoneWorkersRoutes
     * @instance ZoneWorkersRoutes
     * @async
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The route browse response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read allows for retrieving a specific zone's workers route.
     *
     * @function read
     * @memberof ZoneWorkersRoutes
     * @instance ZoneWorkersRoutes
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The route ID.
     * @returns {Promise<Object>} The route response object.
     */
    read(zoneId: string, id: string): Promise<any>;
    /**
     * add allows for creating a workers route.
     *
     * @function add
     * @memberof ZoneWorkersRoutes
     * @instance ZoneWorkersRoutes
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {Object} config - The new route object.
     * @returns {Promise<Object>} The custom route response object.
     */
    add(zoneId: string, config: any): Promise<any>;
    /**
     * del allows for removing a workers route.
     *
     * @function del
     * @memberof ZoneWorkersRoutes
     * @instance ZoneWorkersRoutes
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} id - The route ID to delete.
     * @returns {Promise<Object>} The custom route response object.
     */
    del(zoneId: string, id: string): Promise<any>;
}
export default ZoneWorkersRoutes;
//# sourceMappingURL=ZoneWorkersRoutes.d.ts.map