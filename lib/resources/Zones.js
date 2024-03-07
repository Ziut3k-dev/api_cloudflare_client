'use strict';

const Resource = require('../Resource');

class Zones extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId';
    this.hasBrokenPatch = true;
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];

    /**
     * purgeCache purges files from Cloudflare's cache
     *
     * @function purgeCache
     * @memberof Zones
     * @instance
     * @async
     * @param {string} id - The zone ID
     * @param {Object} [params] - Parameters to restrict purges
     * @param {string[]|Object[]} [params.files] - Files to purge from the Cloudflare cache
     * @param {string[]} [params.tags] - Purge files served with these Cache-Tag headers
     * @param {string[]} [params.hosts] - Purge files that match these hosts
     * @returns {Promise<Object>} The response object
     */
  }

  /**
   * browse allows for listing all the zones
   *
   * @function browse
   * @memberof Zones
   * @instance Z
   * @async
   * @param {string} [zoneId] - Purge files that match these hosts
   * @returns {Promise<Object>} The zone browse response object.
   */
  async browse(zoneId = null) {
    const params = {};
    params.zoneId = zoneId;
    return await this.apiClient.request(
      {
        method: 'GET',
        uriPath: null,
        data: {},
        params: params,
      },
      this
    );
  }

  /**
   * purgeCache purges files from Cloudflare's cache
   *
   * @function purgeCache
   * @memberof Zones
   * @instance
   * @async
   * @param {string[]|Object[]} [params.files] - Files to purge from the Cloudflare cache
   * @param {string[]} [params.tags] - Purge files served with these Cache-Tag headers
   * @param {string[]} [params.hosts] - Purge files that match these hosts
   * @param {string[]} [params.zoneId] - Purge files that match these hosts
   * @returns {Promise<Object>} The response object
   */
  purgeCache(zoneId, params) {
    params.zoneId = zoneId;
    return this.apiClient.request(
      {
        method: 'POST',
        path: ':zoneId/purge_cache',
        data: {},
        params: params,
      },
      this
    );
  }
}

module.exports = Zones;
