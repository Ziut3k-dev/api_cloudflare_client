import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class LoadBalancers extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists load balancers configured for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    browse(zoneId: string): Promise<any>;
    /**
     * Fetches a load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @returns {Promise<Object>}
     */
    read(zoneId: string, lbId: string): Promise<any>;
    /**
     * Creates a new load balancer.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    add(zoneId: string, data: any): Promise<any>;
    /**
     * Updates a configured load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(zoneId: string, lbId: string, data: any): Promise<any>;
    /**
     * Deletes a load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @returns {Promise<Object>}
     */
    del(zoneId: string, lbId: string): Promise<any>;
}
export default LoadBalancers;
//# sourceMappingURL=LoadBalancers.d.ts.map