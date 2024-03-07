// Import dependencies
const Resource = require('../Resource');

/**
 * ZoneWorkersRoutes represents the zones/:zoneId/workers/filters API endpoint.
 *
 * @class ZoneWorkersRoutes
 * @extends Resource
 */
class ZoneWorkersRoutes extends Resource {
  /**
   * Constructor for the ZoneWorkersRoutes class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/workers/routes';
    this.includeBasic = ['browse', 'read', 'add', 'del'];
  }

  /**
   * edit allows for modifying a specific zone's workers route.
   *
   * @function edit
   * @memberof ZoneWorkersRoutes
   * @instance ZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID.
   * @param {Object} config - The modified route object.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async edit(zoneId, id, config) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/:id`,
        data: config,
        params: {zoneId, id},
      },
      this
    );
  }

  /**
   * browse allows for listing all of a zone's workers routes.
   *
   * @function browse
   * @memberof ZoneWorkersRoutes
   * @instance ZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The route browse response object.
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
   * read allows for retrieving a specific zone's workers route.
   *
   * @function read
   * @memberof ZoneWorkersRoutes
   * @instance ZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID.
   * @returns {Promise<Object>} The route response object.
   */
  async read(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/:id`,
        params: {zoneId, id},
      },
      this
    );
  }

  /**
   * add allows for creating a workers route.
   *
   * @function add
   * @memberof ZoneWorkersRoutes
   * @instance ZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {Object} config - The new route object.
   * @returns {Promise<Object>} The custom route response object.
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
   * del allows for removing a workers route.
   *
   * @function del
   * @memberof ZoneWorkersRoutes
   * @instance ZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID to delete.
   * @returns {Promise<Object>} The custom route response object.
   */
  async del(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `${this.path}/:id`,
        params: {zoneId, id},
      },
      this
    );
  }
}

// Export the ZoneWorkersRoutes class
module.exports = ZoneWorkersRoutes;
