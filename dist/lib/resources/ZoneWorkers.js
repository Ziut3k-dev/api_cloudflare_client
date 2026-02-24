"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dependencies
const Resource_1 = __importDefault(require("../Resource"));
/**
 * ZoneWorkers represents the /zones/:zoneId/workers API endpoint.
 *
 * @class ZoneWorkers
 * @extends Resource
 */
class ZoneWorkers extends Resource_1.default {
    /**
     * Constructor for the ZoneWorkers class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/workers';
    }
    /**
     * validate allows for validating a workers script.
     *
     * @function validate
     * @memberof ZoneWorkers
     * @instance ZoneWorkers
     * @async
     * @param {string} zoneId - The zone ID.
     * @param {string} script - The worker script.
     * @returns {Promise<Object>} The validate response object.
     */
    async validate(zoneId, script) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: `${this.path}/validate`,
            contentType: 'application/javascript',
            data: script,
            params: { zoneId },
        }, this);
    }
}
// Export the ZoneWorkers class
exports.default = ZoneWorkers;
