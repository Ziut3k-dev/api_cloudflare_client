import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class AccountMembers extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * List all members of an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Get information about a specific member of an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @returns {Promise<Object>}
     */
    read(accountId: string, memberId: string): Promise<any>;
    /**
     * Add a member to an account.
     *
     * @param {string} accountId
     * @param {Object} data - { email, roles[] }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Modify the roles of a member of an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @param {Object} data - { roles[] }
     * @returns {Promise<Object>}
     */
    edit(accountId: string, memberId: string, data: any): Promise<any>;
    /**
     * Remove a member from an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @returns {Promise<Object>}
     */
    del(accountId: string, memberId: string): Promise<any>;
}
export default AccountMembers;
//# sourceMappingURL=AccountMembers.d.ts.map