"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class AccountMembers extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/members/:memberId';
    }
    /**
     * List all members of an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/members',
            data: {},
            params: { accountId, memberId: null },
        }, this);
    }
    /**
     * Get information about a specific member of an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @returns {Promise<Object>}
     */
    async read(accountId, memberId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, memberId },
        }, this);
    }
    /**
     * Add a member to an account.
     *
     * @param {string} accountId
     * @param {Object} data - { email, roles[] }
     * @returns {Promise<Object>}
     */
    async add(accountId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/members',
            data,
            params: { accountId, memberId: null },
        }, this);
    }
    /**
     * Modify the roles of a member of an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @param {Object} data - { roles[] }
     * @returns {Promise<Object>}
     */
    async edit(accountId, memberId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { accountId, memberId },
        }, this);
    }
    /**
     * Remove a member from an account.
     *
     * @param {string} accountId
     * @param {string} memberId
     * @returns {Promise<Object>}
     */
    async del(accountId, memberId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { accountId, memberId },
        }, this);
    }
}
exports.default = AccountMembers;
