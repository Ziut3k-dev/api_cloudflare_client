import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class LoadBalancerPools extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists all configured pools.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Fetches a single configured pool.
     *
     * @param {string} accountId
     * @param {string} poolId
     * @returns {Promise<Object>}
     */
    read(accountId: string, poolId: string): Promise<any>;
    /**
     * Creates a new pool.
     *
     * @param {string} accountId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Modifies a configured pool.
     *
     * @param {string} accountId
     * @param {string} poolId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(accountId: string, poolId: string, data: any): Promise<any>;
    /**
     * Deletes a configured pool.
     *
     * @param {string} accountId
     * @param {string} poolId
     * @returns {Promise<Object>}
     */
    del(accountId: string, poolId: string): Promise<any>;
    /**
     * Fetches the health of a configured pool.
     *
     * @param {string} accountId
     * @param {string} poolId
     * @returns {Promise<Object>}
     */
    health(accountId: string, poolId: string): Promise<any>;
    /**
     * Preview pool health using provided monitor details.
     *
     * @param {string} accountId
     * @param {string} poolId
     * @param {Object} data - Monitor configuration to preview
     * @returns {Promise<Object>}
     */
    preview(accountId: string, poolId: string, data: any): Promise<any>;
}
export default LoadBalancerPools;
//# sourceMappingURL=LoadBalancerPools.d.ts.map