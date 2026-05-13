"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class LoadBalancers extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/load_balancers/:lbId';
    }
    /**
     * Lists load balancers configured for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    async browse(zoneId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/load_balancers',
            data: {},
            params: { zoneId, lbId: null },
        }, this);
    }
    /**
     * Fetches a load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @returns {Promise<Object>}
     */
    async read(zoneId, lbId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { zoneId, lbId },
        }, this);
    }
    /**
     * Creates a new load balancer.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async add(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/load_balancers',
            data,
            params: { zoneId, lbId: null },
        }, this);
    }
    /**
     * Updates a configured load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(zoneId, lbId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { zoneId, lbId },
        }, this);
    }
    /**
     * Deletes a load balancer.
     *
     * @param {string} zoneId
     * @param {string} lbId
     * @returns {Promise<Object>}
     */
    async del(zoneId, lbId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { zoneId, lbId },
        }, this);
    }
}
exports.default = LoadBalancers;
