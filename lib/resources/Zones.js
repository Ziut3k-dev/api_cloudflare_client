'use strict';

const Resource = require('../Resource');

class Zones extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId';
    this.hasBrokenPatch = true;
  }

  /**
   * Browse allows for listing all the zones
   *
   * @function browse
   * @memberof Zones
   * @instance Zones
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
   * Delete the zone
   *
   * @function delete
   * @memberof Zones
   * @instance Zones
   * @async
   * @param {string} [zoneId] - Purge files that match these hosts
   * @returns {Promise<Object>} The zone browse response object.
   */
  async delete(zoneId = null) {
    const params = {};
    params.zoneId = zoneId;
    return await this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: null,
        data: {},
        params: params,
      },
      this
    );
  }

  /**
   * Create the zone
   *
   * @function create
   * @memberof Zones
   * @instance Zones
   * @async
   * @returns {Promise<Object>} The zone browse response object.
   * @param {string} [data.account.id]
   * @param {string} [data.name]
   * @param {string|null} [data.type]
   * */
  async create(data = {}) {
    const params = {};
    params.zoneId = null;
    return await this.apiClient.request(
      {
        method: 'POST',
        uriPath: null,
        data: data,
        params: params,
      },
      this
    );
  }

  /**
   * Read the zone
   *
   * @function read
   * @memberof Zones
   * @instance Zones
   * @async
   * @returns {Promise<Object>} The zone browse response object.
   * @param {string} [zoneId] - zoneId
   * */
  async read(zoneId) {
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
   * @param {string[]|Object[]} [data.files] - Files to purge from the Cloudflare cache
   * @param {string[]} [data.tags] - Purge files served with these Cache-Tag headers
   * @param {string[]} [data.hosts] - Purge files that match these hosts
   * @param {string} [zoneId] - Purge files that match these hosts
   * @returns {Promise<Object>} The response object
   */
  purgeCache(zoneId, data) {
    const params = {};
    params.zoneId = zoneId;
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/purge_cache',
        data: data,
        params: params,
      },
      this
    );
  }
}

module.exports = Zones;
