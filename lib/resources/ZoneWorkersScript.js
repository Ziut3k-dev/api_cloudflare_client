// Import dependencies
const Resource = require('../Resource');

/**
 * ZoneWorkersScript represents the /zones/:zoneID/workers/script API endpoint.
 *
 * @class ZoneWorkersScript
 * @extends Resource
 */
class ZoneWorkersScript extends Resource {
  /**
   * Constructor for the ZoneWorkersScript class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/workers/script';
  }

  /**
   * read retrieves the current workers script.
   *
   * @function read
   * @memberof ZoneWorkersScript
   * @instance ZoneWorkersScript
   * @async
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The workers script response object.
   */
  async read(zoneId) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params: {zoneId},
        json: false,
      },
      this
    );
  }

  /**
   * edit allows for modifying the current workers script.
   *
   * @function edit
   * @memberof ZoneWorkersScript
   * @instance ZoneWorkersScript
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} script - The new script.
   * @returns {Promise<Object>} The workers script response object.
   */
  async edit(zoneId, script) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: this.path,
        data: script,
        contentType: 'application/javascript',
        params: {zoneId},
      },
      this
    );
  }

  /**
   * del allows for deleting the workers script.
   *
   * @function del
   * @memberof ZoneWorkersScript
   * @instance ZoneWorkersScript
   * @async
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The deleted zone workers script response object.
   */
  async del(zoneId) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: this.path,
        params: {zoneId},
      },
      this
    );
  }
}

// Export the ZoneWorkersScript class
module.exports = ZoneWorkersScript;
