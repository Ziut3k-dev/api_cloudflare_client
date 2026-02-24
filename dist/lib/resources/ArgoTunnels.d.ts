import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class ArgoTunnels extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse allows for listing all Argo Tunnels for an account
     *
     * @function browse
     * @memberof ArgoTunnels
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @returns {Promise<Object>} The Argo Tunnels response object.
     */
    browse(accountId: string): Promise<any>;
    /**
     * clean removes stale connection resources from an Argo Tunnel
     *
     * @function clean
     * @memberof ArgoTunnels
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The tunnel ID being modified
     * @returns {Promise<Object>} The response object.
     */
    clean(accountId: string, id: string): Promise<any>;
    /**
     * read allows for retrieving the specified Argo Tunnel
     *
     * @function read
     * @memberof ArgoTunnels
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The Argo Tunnel ID
     * @returns {Promise<Object>} The Argo Tunnel object.
     */
    read(accountId: string, id: string): Promise<any>;
    /**
     * add allows for creating a new Argo Tunnel for an account.
     *
     * @function add
     * @memberof ArgoTunnels
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {Object} tunnel - The new Argo Tunnel object
     * @returns {Promise<Object>} The created Argo Tunnel object.
     */
    add(accountId: string, tunnel: any): Promise<any>;
    /**
     * del allows for deleting the specified Tunnel
     *
     * @function del
     * @memberof ArgoTunnels
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The Argo Tunnel ID
     * @returns {Promise<Object>} The deleted Argo Tunnel object.
     */
    del(accountId: string, id: string): Promise<any>;
}
export default ArgoTunnels;
//# sourceMappingURL=ArgoTunnels.d.ts.map