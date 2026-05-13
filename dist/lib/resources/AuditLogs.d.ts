import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class AuditLogs extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Gets a list of audit logs for an account.
     *
     * @param {string} accountId
     * @param {Object} [params] - Query parameters
     * @param {string} [params.since] - Limits the returned results to logs newer than the specified date
     * @param {string} [params.before] - Limits the returned results to logs older than the specified date
     * @param {string} [params.actor_email] - Filters by actor email
     * @param {string} [params.actor_ip] - Filters by actor IP address
     * @param {string} [params.action_type] - Filters by action type
     * @param {string} [params.resource_type] - Filters by resource type
     * @param {string} [params.resource_id] - Filters by resource ID
     * @param {number} [params.page] - Page number
     * @param {number} [params.per_page] - Number of results per page
     * @param {string} [params.direction] - Sorts the list of results by creation date. 'desc' or 'asc'
     * @returns {Promise<Object>}
     */
    browse(accountId: string, params?: {
        since?: string;
        before?: string;
        actor_email?: string;
        actor_ip?: string;
        action_type?: string;
        resource_type?: string;
        resource_id?: string;
        page?: number;
        per_page?: number;
        direction?: 'desc' | 'asc';
    }): Promise<any>;
}
export default AuditLogs;
//# sourceMappingURL=AuditLogs.d.ts.map