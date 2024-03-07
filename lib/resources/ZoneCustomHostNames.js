// Import dependencies
const Resource = require('../Resource');

/**
 * ZoneCustomHostNames represents the /zones/:zoneID/custom_hostnames API endpoint.
 *
 * @class ZoneCustomHostNames
 * @extends Resource
 */
class ZoneCustomHostNames extends Resource {
  /**
   * Constructor for the ZoneCustomHostNames class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/custom_hostnames';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

  /**
   * browse allows for listing all of a zone's custom hostnames.
   *
   * @function browse
   * @memberof ZoneCustomHostNames
   * @instance ZoneCustomHostNames
   * @async
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The custom hostname browse response object.
   */
  async browse(zoneId) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * read allows for retrieving a specific custom hostname.
   *
   * @function read
   * @memberof ZoneCustomHostNames
   * @instance ZoneCustomHostNames
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The custom hostname ID.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async read(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/${id}`,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * edit allows for modifying a specific custom hostname.
   *
   * @function edit
   * @memberof ZoneCustomHostNames
   * @instance ZoneCustomHostNames
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The custom hostname ID.
   * @param {Object} config - The modified custom hostname object.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async edit(zoneId, id, config) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/${id}`,
        data: config,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * add allows for creating a new custom hostname.
   *
   * @function add
   * @memberof ZoneCustomHostNames
   * @instance ZoneCustomHostNames
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {Object} config - The new custom hostname object.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async add(zoneId, config) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: this.path,
        data: config,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * del allows for removing a custom hostname.
   *
   * @function del
   * @memberof ZoneCustomHostNames
   * @instance ZoneCustomHostNames
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The custom hostname ID to delete.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async del(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `${this.path}/${id}`,
        params: {zoneId},
      },
      this
    );
  }
}

// Export the ZoneCustomHostNames class
module.exports = ZoneCustomHostNames;
