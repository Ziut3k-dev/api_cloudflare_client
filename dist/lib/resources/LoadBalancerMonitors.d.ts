import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class LoadBalancerMonitors extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists all configured monitors for a given account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Fetches a single configured monitor for an account.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    read(accountId: string, monitorId: string): Promise<any>;
    /**
     * Creates a new monitor.
     *
     * @param {string} accountId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Modifies a configured monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(accountId: string, monitorId: string, data: any): Promise<any>;
    /**
     * Deletes a configured monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    del(accountId: string, monitorId: string): Promise<any>;
    /**
     * Preview pool health for a monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @param {Object} data - Pools to preview
     * @returns {Promise<Object>}
     */
    preview(accountId: string, monitorId: string, data: any): Promise<any>;
    /**
     * List references to a monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    references(accountId: string, monitorId: string): Promise<any>;
}
export default LoadBalancerMonitors;
//# sourceMappingURL=LoadBalancerMonitors.d.ts.map