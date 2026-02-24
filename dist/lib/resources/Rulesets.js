"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class Rulesets extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/rulesets';
    }
    /**
     * browse all rulesets for a zone.
     *
     * @param {string} zoneId - The zone ID.
     * @returns {Promise<Object>} The rulesets response object.
     */
    async browse(zoneId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/rulesets',
            params: { zoneId },
        }, this);
    }
    /**
     * read a specific ruleset.
     *
     * @param {string} zoneId
     * @param {string} rulesetId - The ruleset ID.
     * @returns {Promise<Object>} The ruleset response object.
     */
    async read(zoneId, rulesetId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/rulesets/:rulesetId',
            params: { zoneId, rulesetId },
        }, this);
    }
    /**
     * edit a specific ruleset.
     *
     * @param {string} zoneId - The zone ID.
     * @param {string} rulesetId - The ruleset ID.
     * @param {Object} ruleset - The ruleset object.
     * @returns {Promise<Object>} The response object.
     */
    async edit(zoneId, rulesetId, ruleset) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: 'zones/:zoneId/rulesets/:rulesetId',
            data: ruleset,
            params: { zoneId, rulesetId },
        }, this);
    }
    /**
     * add a new ruleset.
     *
     * @param {string} zoneId
     * @param {Object} ruleset - The new ruleset object.
     * @returns {Promise<Object>} The ruleset response object.
     */
    async add(zoneId, ruleset) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/rulesets',
            data: ruleset,
            params: { zoneId },
        }, this);
    }
    /**
     * del a ruleset.
     *
     * @param {string} zoneId
     * @param {string} rulesetId
     * @returns {Promise<Object>} The response object.
     */
    async del(zoneId, rulesetId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: 'zones/:zoneId/rulesets/:rulesetId',
            params: { zoneId, rulesetId },
        }, this);
    }
}
exports.default = Rulesets;
