import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * ZoneSettings represents the /zones/:zoneID/settings API endpoint.
 *
 * @class ZoneSettings
 * @extends Resource
 */
declare class ZoneSettings extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the ZoneSettings class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * editAll allows for editing all the zone settings at once.
     *
     * @function editAll
     * @memberof ZoneSettings
     * @instance ZoneSettings
     * @async
     * @param {string} zoneId - The zone ID
     * @param {Object} settings - The modified zone settings
     * @returns {Promise<Object>} The response object
     */
    editAll(zoneId: string, settings: any): Promise<any>;
    /**
     * browse allows for listing all the zone settings.
     *
     * @function browse
     * @memberof ZoneSettings
     * @instance ZoneSettings
     * @async
     * @param {string} zoneId - The zone ID
     * @returns {Promise<Object>} The zone settings response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read retrieves a single zone setting.
     *
     * @function read
     * @memberof ZoneSettings
     * @instance ZoneSettings
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} setting - The setting name
     * @returns {Promise<Object>} The zone settings response object.
     */
    read(zoneId: string, setting: any): Promise<any>;
    /**
     * edit modifies a single zone setting.
     *
     * @function edit
     * @memberof ZoneSettings
     * @instance ZoneSettings
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} setting - The setting name
     * @param {string|Object} value - The new zone setting
     * @returns {Promise<Object>} The zone settings response object.
     */
    edit(zoneId: string, setting: any, value: any): Promise<any>;
}
export default ZoneSettings;
//# sourceMappingURL=ZoneSettings.d.ts.map