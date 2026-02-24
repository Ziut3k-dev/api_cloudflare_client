"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
/**
 * IPs represents the /ips API endpoint.
 *
 * @class CFIPs
 * @extends Resource
 */
class CFIPs extends Resource_1.default {
    /**
     * Constructor for the IPs class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient) {
        super(apiClient);
        this.path = 'ips';
        this.includeBasic = ['browse'];
    }
    /**
     * browse returns a Promise of the current Cloudflare IPv4 and IPv6 addresses.
     *
     * @function browse
     * @memberof CFIPs
     * @instance CFIPs
     * @async
     * @returns {Promise<Object>} The IPv4 and IPv6 addresses
     * @example
     * // logs the fetched IP addresses
     * cf.ips.browse(console.log)
     */
    async browse() {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            params: {},
        }, this);
    }
}
exports.default = CFIPs;
