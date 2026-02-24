import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Zones extends Resource {
    path: string;
    protected hasBrokenPatch: boolean;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Browse allows for listing all the zones
     *
     * @function browse
     * @memberof Zones
     * @instance Zones
     * @async
     * @param {string} [zoneId] - Purge files that match these hosts
     * @param {number} per_page
     * @param {number} page
     * @returns {Promise<Object>} The zone browse response object.
     */
    browse(zoneId?: string | null, per_page?: number, page?: number): Promise<any>;
    /**
     * Delete the zone
     *
     * @function del
     * @memberof Zones
     * @instance Zones
     * @async
     * @param {string} [zoneId] - Purge files that match these hosts
     * @returns {Promise<Object>} The zone browse response object.
     */
    del(zoneId?: string | null): Promise<any>;
    /**
     * Create the zone
     *
     * @function add
     * @memberof Zones
     * @instance Zones
     * @async
     * @returns {Promise<Object>} The zone browse response object.
     * @param {string} [data.account.id]
     * @param {string} [data.name]
     * @param {string|null} [data.type]
     * */
    add(data?: any): Promise<any>;
    /**
     * Read the zone
     *
     * @function read
     * @memberof Zones
     * @instance Zones
     * @async
     * @returns {Promise<Object>} The zone browse response object.
     * @param {string} [zoneId] - zoneId
     * */
    read(zoneId: string): Promise<any>;
    /**
     * Read the zone
     *
     * @function activationCheck
     * @memberof Zones
     * @instance Zones
     * @async
     * @returns {Promise<Object>} The zone browse response object.
     * @param {string} [zoneId] - zoneId
     * */
    activationCheck(zoneId: string): Promise<any>;
    /**
     * purgeCache purges files from Cloudflare's cache
     *
     * @function purgeCache
     * @memberof Zones
     * @instance
     * @async
     * @param {string[]|Object[]} [data.files] - Files to purge from the Cloudflare cache
     * @param {string[]} [data.tags] - Purge files served with these Cache-Tag headers
     * @param {string[]} [data.hosts] - Purge files that match these hosts
     * @param {string} [zoneId] - Purge files that match these hosts
     * @param data
     * @returns {Promise<Object>} The response object
     */
    purgeCache(zoneId: string, data: any): Promise<any>;
}
export default Zones;
//# sourceMappingURL=Zones.d.ts.map