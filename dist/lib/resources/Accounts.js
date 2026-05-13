"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class Accounts extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId';
    }
    /**
     * List all accounts the user has access to.
     *
     * @param {number} [page=1]
     * @param {number} [per_page=20]
     * @returns {Promise<Object>}
     */
    async browse(page = 1, per_page = 20) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts?page=:page&per_page=:per_page',
            data: {},
            params: { accountId: null, page, per_page },
        }, this);
    }
    /**
     * Get information about a specific account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async read(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId },
        }, this);
    }
    /**
     * Update an existing account.
     *
     * @param {string} accountId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(accountId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { accountId },
        }, this);
    }
}
exports.default = Accounts;
