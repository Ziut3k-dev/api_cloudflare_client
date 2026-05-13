"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class Logpush extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/logpush/jobs/:jobId';
    }
    /**
     * Lists Logpush jobs for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    async browseJobs(zoneId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/logpush/jobs',
            data: {},
            params: { zoneId, jobId: null },
        }, this);
    }
    /**
     * Gets the details of a Logpush job.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @returns {Promise<Object>}
     */
    async readJob(zoneId, jobId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { zoneId, jobId },
        }, this);
    }
    /**
     * Creates a new Logpush job.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf, dataset, logpull_options?, ownership_challenge?, name?, enabled? }
     * @returns {Promise<Object>}
     */
    async addJob(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/logpush/jobs',
            data,
            params: { zoneId, jobId: null },
        }, this);
    }
    /**
     * Updates a Logpush job's settings.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async editJob(zoneId, jobId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { zoneId, jobId },
        }, this);
    }
    /**
     * Deletes a Logpush job.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @returns {Promise<Object>}
     */
    async delJob(zoneId, jobId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { zoneId, jobId },
        }, this);
    }
    /**
     * Gets a new ownership challenge sent to your destination.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf }
     * @returns {Promise<Object>}
     */
    async getOwnershipChallenge(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/logpush/ownership',
            data,
            params: { zoneId, jobId: null },
        }, this);
    }
    /**
     * Validates ownership challenge.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf, ownership_challenge }
     * @returns {Promise<Object>}
     */
    async validateOwnership(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/logpush/ownership/validate',
            data,
            params: { zoneId, jobId: null },
        }, this);
    }
    /**
     * Checks if there is an existing destination that matches the provided
     * destination_conf.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf }
     * @returns {Promise<Object>}
     */
    async validateDestination(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/logpush/validate/destination/exists',
            data,
            params: { zoneId, jobId: null },
        }, this);
    }
}
exports.default = Logpush;
