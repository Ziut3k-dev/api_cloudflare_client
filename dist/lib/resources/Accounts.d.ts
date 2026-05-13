import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Accounts extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * List all accounts the user has access to.
     *
     * @param {number} [page=1]
     * @param {number} [per_page=20]
     * @returns {Promise<Object>}
     */
    browse(page?: number, per_page?: number): Promise<any>;
    /**
     * Get information about a specific account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    read(accountId: string): Promise<any>;
    /**
     * Update an existing account.
     *
     * @param {string} accountId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(accountId: string, data: any): Promise<any>;
}
export default Accounts;
//# sourceMappingURL=Accounts.d.ts.map