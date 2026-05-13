"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class AuditLogs extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/audit_logs';
    }
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
    async browse(accountId, params = {}) {
        const queryParts = [];
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined) {
                queryParts.push(`${key}=${encodeURIComponent(String(value))}`);
            }
        }
        const query = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
        return this.apiClient.request({
            method: 'GET',
            uriPath: `accounts/:accountId/audit_logs${query}`,
            data: {},
            params: { accountId },
        }, this);
    }
}
exports.default = AuditLogs;
