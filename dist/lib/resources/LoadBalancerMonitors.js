"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class LoadBalancerMonitors extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/load_balancers/monitors/:monitorId';
    }
    /**
     * Lists all configured monitors for a given account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/load_balancers/monitors',
            data: {},
            params: { accountId, monitorId: null },
        }, this);
    }
    /**
     * Fetches a single configured monitor for an account.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    async read(accountId, monitorId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, monitorId },
        }, this);
    }
    /**
     * Creates a new monitor.
     *
     * @param {string} accountId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async add(accountId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/load_balancers/monitors',
            data,
            params: { accountId, monitorId: null },
        }, this);
    }
    /**
     * Modifies a configured monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(accountId, monitorId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { accountId, monitorId },
        }, this);
    }
    /**
     * Deletes a configured monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    async del(accountId, monitorId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { accountId, monitorId },
        }, this);
    }
    /**
     * Preview pool health for a monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @param {Object} data - Pools to preview
     * @returns {Promise<Object>}
     */
    async preview(accountId, monitorId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/load_balancers/monitors/:monitorId/preview',
            data,
            params: { accountId, monitorId },
        }, this);
    }
    /**
     * List references to a monitor.
     *
     * @param {string} accountId
     * @param {string} monitorId
     * @returns {Promise<Object>}
     */
    async references(accountId, monitorId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/load_balancers/monitors/:monitorId/references',
            data: {},
            params: { accountId, monitorId },
        }, this);
    }
}
exports.default = LoadBalancerMonitors;
