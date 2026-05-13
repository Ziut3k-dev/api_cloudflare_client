import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class AccountRoles extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * List all roles for an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Get information about a specific role for an account.
     *
     * @param {string} accountId
     * @param {string} roleId
     * @returns {Promise<Object>}
     */
    read(accountId: string, roleId: string): Promise<any>;
}
export default AccountRoles;
//# sourceMappingURL=AccountRoles.d.ts.map