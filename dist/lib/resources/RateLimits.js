"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class RateLimits extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/rate_limits/:rateLimitId';
    }
    /**
     * Fetches the rate limits for a zone.
     *
     * @param {string} zoneId
     * @param {number} [page=1]
     * @param {number} [per_page=20]
     * @returns {Promise<Object>}
     */
    async browse(zoneId, page = 1, per_page = 20) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/rate_limits?page=:page&per_page=:per_page',
            data: {},
            params: { zoneId, rateLimitId: null, page, per_page },
        }, this);
    }
    /**
     * Fetches the details of a rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @returns {Promise<Object>}
     */
    async read(zoneId, rateLimitId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { zoneId, rateLimitId },
        }, this);
    }
    /**
     * Creates a new rate limit for a zone.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async add(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/rate_limits',
            data,
            params: { zoneId, rateLimitId: null },
        }, this);
    }
    /**
     * Updates an existing rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(zoneId, rateLimitId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { zoneId, rateLimitId },
        }, this);
    }
    /**
     * Deletes an existing rate limit.
     *
     * @param {string} zoneId
     * @param {string} rateLimitId
     * @returns {Promise<Object>}
     */
    async del(zoneId, rateLimitId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { zoneId, rateLimitId },
        }, this);
    }
}
exports.default = RateLimits;
