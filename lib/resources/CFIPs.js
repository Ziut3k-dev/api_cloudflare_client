'use strict';

const Resource = require('../Resource');

/**
 * IPs represents the /ips API endpoint.
 *
 * @class CFIPs
 * @extends Resource
 */
class CFIPs extends Resource {
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
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: null,
        params: {},
      },
      this
    );
  }
}

module.exports = CFIPs;
