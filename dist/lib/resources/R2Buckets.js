"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class R2Buckets extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'accounts/:accountId/r2/buckets/:bucketName';
    }
    /**
     * Lists all R2 buckets for an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    async browse(accountId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'accounts/:accountId/r2/buckets',
            data: {},
            params: { accountId, bucketName: null },
        }, this);
    }
    /**
     * Gets metadata for an existing R2 bucket.
     *
     * @param {string} accountId
     * @param {string} bucketName
     * @returns {Promise<Object>}
     */
    async read(accountId, bucketName) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { accountId, bucketName },
        }, this);
    }
    /**
     * Creates a new R2 bucket.
     *
     * @param {string} accountId
     * @param {Object} data - { name, locationHint? }
     * @returns {Promise<Object>}
     */
    async add(accountId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'accounts/:accountId/r2/buckets',
            data,
            params: { accountId, bucketName: null },
        }, this);
    }
    /**
     * Deletes an existing R2 bucket.
     *
     * @param {string} accountId
     * @param {string} bucketName
     * @returns {Promise<Object>}
     */
    async del(accountId, bucketName) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { accountId, bucketName },
        }, this);
    }
}
exports.default = R2Buckets;
