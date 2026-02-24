import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * IPs represents the /ips API endpoint.
 *
 * @class CFIPs
 * @extends Resource
 */
declare class CFIPs extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the IPs class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse returns a Promise of the current Cloudflare IPv4 and IPv6 addresses.
     *
     * @function browse
     * @memberof CFIPs
     * @instance CFIPs
     * @async
     * @returns {Promise<Object>} The IPv4 and IPv6 addresses
     * @example
     * // logs the fetched IP addresses
     * cf.ips.browse(console.log)
     */
    browse(): Promise<any>;
}
export default CFIPs;
//# sourceMappingURL=CFIPs.d.ts.map