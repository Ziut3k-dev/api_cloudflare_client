"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class Queues extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/queues/:queueId';
    }
    /**
     * Returns the queues owned by an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/queues',
            data: {},
            params: { accountId, queueId: null },
        }, this);
    }
    /**
     * Get information about a specific queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    async read(accountId, queueId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, queueId },
        }, this);
    }
    /**
     * Creates a new queue.
     *
     * @param {string} accountId
     * @param {Object} data - { queue_name }
     * @returns {Promise<Object>}
     */
    async add(accountId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/queues',
            data,
            params: { accountId, queueId: null },
        }, this);
    }
    /**
     * Updates a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(accountId, queueId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { accountId, queueId },
        }, this);
    }
    /**
     * Deletes a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    async del(accountId, queueId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { accountId, queueId },
        }, this);
    }
    /**
     * Returns the consumers for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    async browseConsumers(accountId, queueId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/queues/:queueId/consumers',
            data: {},
            params: { accountId, queueId },
        }, this);
    }
    /**
     * Creates a new consumer for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {Object} data - { script_name, settings: { batch_size?, max_retries?, max_wait_time_ms? } }
     * @returns {Promise<Object>}
     */
    async addConsumer(accountId, queueId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/queues/:queueId/consumers',
            data,
            params: { accountId, queueId },
        }, this);
    }
    /**
     * Updates a consumer for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {string} consumerId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async editConsumer(accountId, queueId, consumerId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: 'accounts/:accountId/queues/:queueId/consumers/:consumerId',
            data,
            params: { accountId, queueId, consumerId },
        }, this);
    }
    /**
     * Deletes a consumer from a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {string} consumerId
     * @returns {Promise<Object>}
     */
    async delConsumer(accountId, queueId, consumerId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: 'accounts/:accountId/queues/:queueId/consumers/:consumerId',
            data: {},
            params: { accountId, queueId, consumerId },
        }, this);
    }
}
exports.default = Queues;
