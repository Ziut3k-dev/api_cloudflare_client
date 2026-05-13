import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Tunnels extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists and filters all types of Tunnels in an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Fetches a single Argo Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    read(accountId: string, tunnelId: string): Promise<any>;
    /**
     * Creates a new Argo Tunnel in an account.
     *
     * @param {string} accountId
     * @param {Object} data - { name, tunnel_secret, config_src? }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Updates the name or secret of a Cloudflare Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} data - { name?, tunnel_secret? }
     * @returns {Promise<Object>}
     */
    edit(accountId: string, tunnelId: string, data: any): Promise<any>;
    /**
     * Deletes an Argo Tunnel from an account.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} [data]
     * @returns {Promise<Object>}
     */
    del(accountId: string, tunnelId: string, data?: any): Promise<any>;
    /**
     * Gets a token used to associate a cloudflared instance with the tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    getToken(accountId: string, tunnelId: string): Promise<any>;
    /**
     * Fetches connection details for a Cloudflare Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    getConnections(accountId: string, tunnelId: string): Promise<any>;
    /**
     * Removes connections that are in a disconnected or pending state.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} [data]
     * @returns {Promise<Object>}
     */
    cleanConnections(accountId: string, tunnelId: string, data?: any): Promise<any>;
    /**
     * Gets the Tunnel configuration for an account.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    getConfig(accountId: string, tunnelId: string): Promise<any>;
    /**
     * Adds or updates the configuration for a remotely-managed tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} data - Tunnel configuration
     * @returns {Promise<Object>}
     */
    editConfig(accountId: string, tunnelId: string, data: any): Promise<any>;
}
export default Tunnels;
//# sourceMappingURL=Tunnels.d.ts.map