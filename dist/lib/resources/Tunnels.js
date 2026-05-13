"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class Tunnels extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/cfd_tunnel/:tunnelId';
    }
    /**
     * Lists and filters all types of Tunnels in an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/cfd_tunnel',
            data: {},
            params: { accountId, tunnelId: null },
        }, this);
    }
    /**
     * Fetches a single Argo Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    async read(accountId, tunnelId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Creates a new Argo Tunnel in an account.
     *
     * @param {string} accountId
     * @param {Object} data - { name, tunnel_secret, config_src? }
     * @returns {Promise<Object>}
     */
    async add(accountId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/cfd_tunnel',
            data,
            params: { accountId, tunnelId: null },
        }, this);
    }
    /**
     * Updates the name or secret of a Cloudflare Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} data - { name?, tunnel_secret? }
     * @returns {Promise<Object>}
     */
    async edit(accountId, tunnelId, data) {
        return this.apiClient.request({
            method: 'PATCH',
            uriPath: undefined,
            data,
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Deletes an Argo Tunnel from an account.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} [data]
     * @returns {Promise<Object>}
     */
    async del(accountId, tunnelId, data = {}) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data,
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Gets a token used to associate a cloudflared instance with the tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    async getToken(accountId, tunnelId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/cfd_tunnel/:tunnelId/token',
            data: {},
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Fetches connection details for a Cloudflare Tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    async getConnections(accountId, tunnelId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/cfd_tunnel/:tunnelId/connections',
            data: {},
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Removes connections that are in a disconnected or pending state.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} [data]
     * @returns {Promise<Object>}
     */
    async cleanConnections(accountId, tunnelId, data = {}) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: 'accounts/:accountId/cfd_tunnel/:tunnelId/connections',
            data,
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Gets the Tunnel configuration for an account.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @returns {Promise<Object>}
     */
    async getConfig(accountId, tunnelId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/cfd_tunnel/:tunnelId/configurations',
            data: {},
            params: { accountId, tunnelId },
        }, this);
    }
    /**
     * Adds or updates the configuration for a remotely-managed tunnel.
     *
     * @param {string} accountId
     * @param {string} tunnelId
     * @param {Object} data - Tunnel configuration
     * @returns {Promise<Object>}
     */
    async editConfig(accountId, tunnelId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: 'accounts/:accountId/cfd_tunnel/:tunnelId/configurations',
            data,
            params: { accountId, tunnelId },
        }, this);
    }
}
exports.default = Tunnels;
