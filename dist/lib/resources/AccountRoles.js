"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class AccountRoles extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/roles/:roleId';
    }
    /**
     * List all roles for an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/roles',
            data: {},
            params: { accountId, roleId: null },
        }, this);
    }
    /**
     * Get information about a specific role for an account.
     *
     * @param {string} accountId
     * @param {string} roleId
     * @returns {Promise<Object>}
     */
    async read(accountId, roleId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, roleId },
        }, this);
    }
}
exports.default = AccountRoles;
